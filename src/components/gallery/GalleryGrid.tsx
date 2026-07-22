import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import type { GalleryItem } from '@/types'
import { getImage } from '@/utils/images'
import { cn } from '@/utils/cn'

interface GalleryGridProps {
  items: GalleryItem[]
  onSelect: (index: number) => void
}

export default function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onSelect(index)}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
          className={cn(
            'group relative overflow-hidden rounded-2xl bg-soft text-left',
            item.span === 'row-span-2' && 'row-span-2',
            item.span === 'col-span-2' && 'col-span-2',
          )}
        >
          <img
            src={getImage(item.image)}
            alt={item.caption}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="flex items-center gap-2 text-xs font-medium text-white">
              <Expand size={14} /> {item.caption}
            </p>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
