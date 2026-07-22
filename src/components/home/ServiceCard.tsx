import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Code2,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '@/types'
import { getImage } from '@/utils/images'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Sparkles,
  TrendingUp,
  Target,
  ShoppingBag,
}

interface ServiceCardProps {
  service: Service
  isOpen: boolean
  onToggle: () => void
}

export default function ServiceCard({ service, isOpen, onToggle }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Sparkles

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen ? 'border-primary/40 bg-soft' : 'border-border bg-white hover:border-primary/30'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
            isOpen ? 'bg-primary text-white' : 'bg-soft text-primary'
          }`}
        >
          <Icon size={22} />
        </span>
        <span className="flex-1">
          <span className="block text-xl font-semibold text-ink">{service.title}</span>
          <span className="mt-1 block text-sm text-muted">{service.shortDescription}</span>
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-muted">
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid gap-8 px-6 pb-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="leading-relaxed text-muted">{service.description}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Key Skills</p>
                    <ul className="mt-3 space-y-1.5">
                      {service.skills.map((skill) => (
                        <li key={skill} className="text-sm text-ink">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Technologies</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-white px-3 py-1 text-xs text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    Start a project <ArrowRight size={15} />
                  </Link>
                  {service.id === 'meta-ads' && (
                    <Link
                      to="/meta-ads-project"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary"
                    >
                      View case study <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="h-40 w-full overflow-hidden rounded-2xl shadow-soft lg:h-48 lg:w-56">
                <img
                  src={getImage(service.image)}
                  alt={`Okezie Collington — ${service.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
