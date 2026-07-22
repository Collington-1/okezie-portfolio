import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import Lightbox from '@/components/gallery/Lightbox'
import { getImage } from '@/utils/images'
import { galleryItems } from '@/data/gallery'
import type { GalleryCategory } from '@/types'

const categories: { label: string; value: GalleryCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Training', value: 'training' },
  { label: 'Workstation', value: 'workstation' },
  { label: 'Certificates', value: 'certificates' },
  { label: 'Portraits', value: 'portrait' },
]

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <>
      <SEO
        title="Gallery | Okezie Collington"
        description="Behind-the-scenes photos of Okezie Collington's training sessions, client work, workstation and certifications."
        path="/gallery"
      />

      <section className="pb-16 pt-10 sm:pt-16">
        <Container className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Gallery
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                A look behind the work.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Training cohorts across the Niger Delta, late nights at the workstation, and the certifications that
                back up the work — a glimpse at what happens between the screenshots.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-xs">
            <div className="aspect-square w-full overflow-hidden rounded-xl2 shadow-lift">
              <img
                src={getImage('portrait-casual-6')}
                alt="Okezie Collington on location"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const isActive = filter === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {!isActive && <span className="absolute inset-0 rounded-full border border-border" />}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-10">
            <GalleryGrid items={filtered} onSelect={setActiveIndex} />
          </div>
        </Container>
      </section>

      <Lightbox items={filtered} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </>
  )
}
