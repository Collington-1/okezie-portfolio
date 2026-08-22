import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Download, Search, Target, MessageCircle, TrendingUp, FlaskConical, MapPin, type LucideIcon } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { getImage } from '@/utils/images'
import { metaAdsProjects } from '@/data/metaAdsProjects'

const iconMap: Record<string, LucideIcon> = { Search, Target, MessageCircle, TrendingUp, FlaskConical, MapPin }

export default function MetaAdsProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const study = metaAdsProjects.find((s) => s.id === id)

  if (!study) return <Navigate to="/meta-ads-project" replace />

  return (
    <>
      <SEO
        title={`${study.title} — Meta Ads Case Study | Okezie Collington`}
        description={study.cardSummary}
        path={`/meta-ads-project/${study.id}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `Meta Ads Case Study — ${study.title}`,
          creator: { '@type': 'Person', name: 'Okezie Collington' },
        }}
      />

      <section className="pb-12 pt-10 sm:pt-16">
        <Container>
          <Reveal>
            <Link
              to="/meta-ads-project"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft size={14} /> All Meta Ads Projects
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Meta Ads Case Study
            </span>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {study.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{study.heroDescription}</p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>Client: {study.client}</span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
              <span>Role: {study.role}</span>
              {study.reportUrl && (
                <>
                  <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                  <a
                    href={study.reportUrl}
                    download
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-hover"
                  >
                    Download full report <Download size={14} />
                  </a>
                </>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={getImage(study.image)}
              alt={`${study.title} Meta Ads results`}
              className="w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </Container>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Brief</p>
            <p className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight text-ink">
              {study.briefTitle}
            </p>
            <p className="mt-5 leading-relaxed text-muted">{study.briefDescription}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Results at a glance</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-soft p-5">
                  <p className="text-2xl font-semibold text-ink">{m.value}</p>
                  <p className="mt-1 text-xs text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">My Approach</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Research before creative, every time.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {study.strategy.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Search
              return (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <Icon size={20} />
                    </span>
                    <p className="mt-4 text-base font-semibold text-ink">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Outcome</p>
            <p className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight text-ink">
              {study.outcomeTitle}
            </p>
            <p className="mt-5 leading-relaxed text-muted">{study.outcomeDescription}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Highlights</p>
            <ul className="mt-5 space-y-3">
              {study.highlights.map((h) => {
                const Icon = iconMap[h.icon] ?? Target
                return (
                  <li key={h.text} className="flex items-start gap-3 text-sm text-ink">
                    <Icon size={16} className="mt-0.5 shrink-0 text-primary" />
                    {h.text}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </Container>
      </section>

      {study.gallery && study.gallery.length > 0 && (
        <section className="bg-soft py-16 sm:py-20">
          <Container>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Inside The Numbers</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Straight from Ads Manager.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {study.gallery.map((item, i) => (
                <Reveal key={item.image} delay={i * 0.06}>
                  <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                    <img
                      src={getImage(item.image)}
                      alt={item.caption}
                      className="w-full object-cover object-top"
                    />
                    <p className="p-5 text-sm leading-relaxed text-muted">{item.caption}</p>
                  </div>
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
                {study.ctaTitle}
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-white/80">{study.ctaDescription}</p>
              <div className="relative mt-8">
                <Button to="/booking" variant="secondary" className="!bg-white !text-ink hover:!bg-white/90" icon={<ArrowRight size={16} />}>
                  Book a call
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
