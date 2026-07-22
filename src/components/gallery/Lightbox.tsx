import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '@/types'
import { getImage } from '@/utils/images'

interface LightboxProps {
  items: GalleryItem[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, activeIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeIndex !== null
  const item = activeIndex !== null ? items[activeIndex] : null

  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && activeIndex !== null) onNavigate((activeIndex + 1) % items.length)
      if (e.key === 'ArrowLeft' && activeIndex !== null) onNavigate((activeIndex - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, activeIndex, items.length, onClose, onNavigate])

  return createPortal(
    <AnimatePresence>
      {isOpen && item && activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((activeIndex - 1 + items.length) % items.length)
            }}
            aria-label="Previous image"
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary sm:left-8"
          >
            <ChevronLeft size={20} />
          </button>

          <motion.figure
            key={item.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-3xl"
          >
            <img
              src={getImage(item.image)}
              alt={item.caption}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">{item.caption}</figcaption>
          </motion.figure>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((activeIndex + 1) % items.length)
            }}
            aria-label="Next image"
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary sm:right-8"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
