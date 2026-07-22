import { motion } from 'framer-motion'
import { filterOptions } from '@/data/projects'
import type { ProjectCategory } from '@/types'

interface ProjectFiltersProps {
  active: ProjectCategory | 'all'
  onChange: (value: ProjectCategory | 'all') => void
}

export default function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filterOptions.map((option) => {
        const isActive = active === option.value
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              isActive ? 'text-white' : 'text-muted hover:text-ink'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {!isActive && <span className="absolute inset-0 rounded-full border border-border" />}
            <span className="relative z-10">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
