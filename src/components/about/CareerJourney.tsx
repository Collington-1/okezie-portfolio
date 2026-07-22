import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import { getImage } from '@/utils/images'
import { timeline } from '@/data/timeline'

export default function CareerJourney() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader eyebrow="Career Journey" title="Where the experience comes from" />
          <Reveal delay={0.2} className="mt-8 hidden overflow-hidden rounded-xl2 shadow-soft lg:block">
            <img
              src={getImage('portrait-desk-2')}
              alt="Okezie Collington working at his desk"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="relative space-y-10 border-l border-border pl-8">
          {timeline.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-soft" />
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{entry.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{entry.role}</h3>
                <p className="text-sm text-muted">
                  {entry.company} · {entry.type}
                </p>
                <ul className="mt-3 space-y-2">
                  {entry.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-muted">
                      — {point}
                    </li>
                  ))}
                </ul>
                {entry.link && (
                  <Link
                    to={entry.link.to}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    {entry.link.label} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
