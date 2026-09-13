import { ArrowRight, BookOpen, Download } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { publications } from '@/data/publications'

export default function Publications() {
  return (
    <>
      <SEO
        title="Publications | Okezie Collington"
        description="Peer-reviewed engineering research co-authored by Okezie Collington during his B.Eng. in Polymer and Textile Engineering at the Federal University of Technology, Owerri — on biodegradable, plant-based alternatives to synthetic drilling mud additives."
        path="/publications"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Academic Publications — Okezie Collington',
          creator: { '@type': 'Person', name: 'Okezie Collington' },
        }}
      />

      <section className="pb-12 pt-10 sm:pt-16">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Academic Research
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Published research from before the code.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Before website development, I studied Polymer and Textile Engineering at the Federal University of
              Technology, Owerri (FUTO). As part of that research, I co-authored two peer-reviewed papers exploring
              biodegradable, plant-based alternatives to the synthetic chemical additives used in oil and gas
              drilling — the same methodical, evidence-first thinking that shows up in how I approach every project
              today.
            </p>
          </Reveal>
        </Container>
      </section>

      {publications.map((pub, i) => (
        <section key={pub.id} className={i % 2 === 0 ? 'py-16 sm:py-20' : 'bg-soft py-16 sm:py-20'}>
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <BookOpen size={20} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Publication {i + 1} of {publications.length}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-5 text-balance text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                {pub.title}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                <span>{pub.authors}</span>
                <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                <span>{pub.role}</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                {pub.journal} · {pub.citation} · {pub.year} · {pub.identifier}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal delay={0.14}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Problem</p>
                <p className="mt-4 leading-relaxed text-muted">{pub.summary}</p>

                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary">How It Was Tested</p>
                <p className="mt-4 leading-relaxed text-muted">{pub.methodology}</p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Key Findings</p>
                <ul className="mt-4 space-y-3">
                  {pub.keyFindings.map((finding) => (
                    <li key={finding} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {finding}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary">Why It Matters</p>
                <p className="mt-4 leading-relaxed text-muted">{pub.whyItMatters}</p>
              </Reveal>
            </div>

            <Reveal delay={0.24}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {pub.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-white p-5 shadow-soft"
                  >
                    <p className="text-xl font-semibold text-ink">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <a
                href={pub.pdfUrl}
                download
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
              >
                Download the full paper (PDF) <Download size={14} />
              </a>
            </Reveal>
          </Container>
        </section>
      ))}

      <section className="pb-24 lg:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-16 text-center sm:px-16 sm:py-20">
              <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <h2 className="relative text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                The same discipline, a different material.
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-white/80">
                Test rigorously, measure honestly, and let the data decide — it's how I approached lab work, and how
                I approach every website, campaign and product I build today.
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
