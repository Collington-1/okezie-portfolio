import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = [
  { text: 'Websites' },
  { text: 'Business Apps' },
  { text: 'eCommerce Solutions', mobileScale: 'max-sm:scale-75' },
  { text: 'AI Automations', mobileScale: 'max-sm:scale-90' },
  { text: 'Meta Ads' },
]

export default function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  const word = words[index]

  return (
    <span className="relative inline-flex h-[1em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={word.text}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap"
        >
          <span className={`inline-block origin-left text-gradient font-bold italic ${word.mobileScale ?? ''}`}>
            {word.text}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
