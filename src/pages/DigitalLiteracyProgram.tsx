import { ArrowRight, ArrowUpRight, Users, Briefcase, TrendingUp } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { getImage } from '@/utils/images'

const duties = [
  'Managed an EU-supported digital skills project for 1,500 women across the Niger Delta region.',
  'Designed the training structure for each cohort — Cohorts 1, 2 and 3.',
  'Coordinated post-training sessions for the trained women.',
  'Invited tech professionals to teach real-life applications of the skills covered.',
  'Collected outcomes and feedback data to identify participant challenges and project successes.',
]

const achievements = [
  'Achieved a 60% job success rate for career women who attended post-training sessions.',
  'Women in the Business category recorded over an 80% improvement in visibility, sales and staff performance through digital integration.',
  "Supported data collection for the project's overall annual report.",
  'Supported the gathering of quality information for ICT policy development in the Niger Delta region.',
]

const skills = ['Desktop Publishing', 'Data Analytics', 'Graphics Design', 'Cybersecurity', 'Digital Marketing', 'AI']

const gallery = [
  'digital-training-1',
  'digital-training-2',
  'digital-training-3',
  'digital-training-4',
  'digital-training-5',
  'digital-training-6',
]

export default function DigitalLiteracyProgram() {
  return (
    <>
      <SEO
        title="Digital Literacy Program | Okezie Collington"
        description="How Okezie Collington coordinated a digital literacy program for 1,500 women across the Niger Delta, covering desktop publishing, data analytics, graphic design, cybersecurity, digital marketing and AI."
        path="/digital-literacy-program"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Digital Literacy Program — Stakeholder Democracy Network',
          creator: { '@type': 'Person', name: 'Okezie Collington' },
        }}
      />

      <section className="pb-12 pt-10 sm:pt-16">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Digital Literacy Program
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Teaching tech skills to 1,500 women across the Niger Delta.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A digital literacy program covering desktop publishing, data analytics, graphic design, cybersecurity,
              digital marketing and AI — designed to help women gain real tech skills to get jobs and grow their
              businesses.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>Digital Consultant / Project Manager</span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
              <span>Stakeholder Democracy Network</span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
              <span>Oct 2023 – Nov 2025 · Nigeria, On-site</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Reveal delay={0.1}>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-lift">
            <img
              src={getImage(gallery[0])}
              alt="Okezie Collington leading a digital literacy training session"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal className="rounded-2xl border border-border bg-soft p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Users size={20} />
              </span>
              <p className="mt-4 text-2xl font-semibold text-ink">1,500</p>
              <p className="mt-1 text-sm text-muted">Women trained across 3 cohorts</p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-2xl border border-border bg-soft p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Briefcase size={20} />
              </span>
              <p className="mt-4 text-2xl font-semibold text-ink">60%</p>
              <p className="mt-1 text-sm text-muted">Job success rate, career category</p>
            </Reveal>
            <Reveal delay={0.16} className="rounded-2xl border border-border bg-soft p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <TrendingUp size={20} />
              </span>
              <p className="mt-4 text-2xl font-semibold text-ink">80%</p>
              <p className="mt-1 text-sm text-muted">Improved their business, business category</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">What I Did</p>
            <ul className="mt-5 space-y-3">
              {duties.map((duty) => (
                <li key={duty} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {duty}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary">Skills Covered</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border bg-white px-3 py-1 text-xs text-ink">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Achievements</p>
            <ul className="mt-5 space-y-3">
              {achievements.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="https://docs.google.com/spreadsheets/d/16lf0ZoTwChcgfUWmZqpROikHBp_fgzogG7mA_SZM3xA/edit?gid=0#gid=0"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              View the full success data <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">In The Room</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A look at the training sessions.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((key, i) => (
              <Reveal key={key} delay={i * 0.06} className={i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}>
                <div className="h-full overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={getImage(key)}
                    alt="Digital literacy training session for women in the Niger Delta"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-16 text-center sm:px-16 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <h2 className="relative text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Need someone who can train your team, not just build the tech?
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-white/80">
                I bring the same hands-on approach to AI literacy and digital-skills training for teams and
                organizations.
              </p>
              <div className="relative mt-8">
                <Button to="/contact" variant="secondary" className="!bg-white !text-ink hover:!bg-white/90" icon={<ArrowRight size={16} />}>
                  Let&rsquo;s talk
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
