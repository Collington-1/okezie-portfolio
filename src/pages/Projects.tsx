import { useMemo, useState } from 'react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import ProjectFilters from '@/components/projects/ProjectFilters'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import { getImage } from '@/utils/images'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  return (
    <>
      <SEO
        title="Projects | Okezie Collington"
        description="A selection of websites, ecommerce stores and digital platforms built by Okezie Collington for NGOs, investment firms, hospitality and retail brands."
        path="/projects"
      />

      <section className="pb-16 pt-10 sm:pt-16">
        <Container className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Projects built to perform, not just look good.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Every project here shipped with a real deadline, a real client, and a real outcome — from NGO
                platforms built in weeks to ecommerce stores stocked with thousands of products.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-xs">
            <div className="aspect-square w-full overflow-hidden rounded-xl2 shadow-lift">
              <img
                src={getImage('portrait-desk-1')}
                alt="Okezie Collington reviewing a live project build"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <ProjectFilters active={filter} onChange={setFilter} />
          <div className="mt-10">
            <ProjectsGrid projects={filtered} />
          </div>
        </Container>
      </section>
    </>
  )
}
