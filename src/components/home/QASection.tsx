import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Layers,
  Star,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { qaItems } from '@/data/qa'
import type { QAItem } from '@/types'

const iconMap: Record<string, LucideIcon> = { Layers, Star, ShoppingBag, TrendingUp, ShieldCheck, Target }

function AnswerBody({ item, index }: { item: QAItem; index: number }) {
  const Icon = iconMap[item.icon] ?? Star

  return (
    <>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
        <Icon size={26} />
      </span>

      <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
        {String(index + 1).padStart(2, '0')} · {item.category}
      </span>

      <h3 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {item.question}
      </h3>

      <p className="mt-5 leading-relaxed text-muted">{item.answer}</p>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">In short</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Related skills</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-white px-3 py-1 text-xs text-ink">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink/90"
      >
        Let&rsquo;s talk about your project <ArrowRight size={16} />
      </Link>
    </>
  )
}

export default function QASection() {
  const [active, setActive] = useState(0)
  const [mobileActive, setMobileActive] = useState<number | null>(0)
  const current = qaItems[active]

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Ask Me Anything"
          title="Straight answers"
          description="The exact questions clients and hiring managers ask me about WordPress and ecommerce work — answered directly, no fluff."
        />

        {/* Mobile: accordion — answer appears directly under its question */}
        <div className="mt-14 flex flex-col gap-3 sm:hidden">
          {qaItems.map((item, i) => {
            const ItemIcon = iconMap[item.icon] ?? Star
            const isOpen = mobileActive === i
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'border-primary/40 bg-soft' : 'border-border bg-white'
                }`}
              >
                <button
                  onClick={() => setMobileActive(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-primary text-white' : 'bg-soft text-primary'
                    }`}
                  >
                    <ItemIcon size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-semibold ${isOpen ? 'text-primary' : 'text-ink'}`}>
                      {item.label}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">{item.teaser}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={isOpen ? 'shrink-0 text-primary' : 'shrink-0 text-muted/50'}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-6">
                        <AnswerBody item={item} index={i} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Tablet & desktop: question list + shared answer panel */}
        <div className="mt-14 hidden gap-4 sm:grid lg:grid-cols-[380px_1fr] lg:gap-8">
          <div className="flex flex-col gap-3">
            {qaItems.map((item, i) => {
              const ItemIcon = iconMap[item.icon] ?? Star
              const isActive = i === active
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors duration-300 ${
                    isActive ? 'border-primary/40 bg-soft' : 'border-border bg-white hover:border-primary/25'
                  }`}
                  aria-current={isActive}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isActive ? 'bg-primary text-white' : 'bg-soft text-primary'
                    }`}
                  >
                    <ItemIcon size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-semibold ${isActive ? 'text-primary' : 'text-ink'}`}>
                      {item.label}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">{item.teaser}</span>
                  </span>
                  <ChevronRight size={16} className={isActive ? 'shrink-0 text-primary' : 'shrink-0 text-muted/50'} />
                </button>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-soft p-8 sm:p-10 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <AnswerBody item={current} index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
