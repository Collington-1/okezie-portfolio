import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { getImage } from '@/utils/images'

const categoryLabels: Record<string, string> = {
  website: 'Website',
  seo: 'SEO',
  ai: 'AI',
  ecommerce: 'Ecommerce',
  'meta-ads': 'Meta Ads',
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) return <Navigate to="/projects" replace />

  const moreProjects = projects.filter((p) => p.id !== project.id).slice(0, 2)

  return (
    <>
      <SEO
        title={`${project.title} — Case Study | Okezie Collington`}
        description={project.overview}
        path={`/projects/${project.id}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          creator: { '@type': 'Person', name: 'Okezie Collington' },
          description: project.overview,
        }}
      />

      <section className="pb-12 pt-10 sm:pt-16">
        <Container>
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
                >
                  {categoryLabels[c] ?? c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>{project.client}</span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
              <span>{project.role}</span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-hover"
                >
                  Visit live site <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Reveal delay={0.1}>
          <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-lift">
            <img
              src={getImage(project.image)}
              alt={`${project.title} website preview`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </Container>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Project Overview</p>
            <p className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight text-ink">
              {project.problem}
            </p>
            <p className="mt-5 leading-relaxed text-muted">{project.overview}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">My Role</p>
            <p className="mt-4 text-xl font-semibold text-ink">{project.role}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.roleDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-sm text-ink">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-soft px-3 py-1 text-xs text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Goals</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {project.goals.map((goal) => (
                <li key={goal} className="rounded-2xl border border-border bg-white p-5 text-sm leading-relaxed text-ink shadow-soft">
                  {goal}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">My Strategy</p>
            </Reveal>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {project.strategy.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-sm font-semibold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-4 text-base font-semibold text-ink">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Outcome</p>
            <p className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight text-ink">
              {project.outcome}
            </p>
            <p className="mt-5 leading-relaxed text-muted">{project.solution}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Highlights</p>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {moreProjects.length > 0 && (
        <section className="pb-20">
          <Container>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">More Projects</p>
            </Reveal>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {moreProjects.map((p) => (
                <Reveal key={p.id}>
                  <Link
                    to={`/projects/${p.id}`}
                    className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getImage(p.image)}
                        alt={`${p.title} website preview`}
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted">{p.role}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="pb-24 lg:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-16 text-center sm:px-16 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <h2 className="relative text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Let&rsquo;s create great work together
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-white/80">
                Have a project in mind? I&rsquo;d love to hear what you&rsquo;re building.
              </p>
              <div className="relative mt-8">
                <Button to="/contact" variant="secondary" className="!bg-white !text-ink hover:!bg-white/90" icon={<ArrowRight size={16} />}>
                  Start a project
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
