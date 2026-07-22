import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = ['Websites', 'Business Apps', 'eCommerce Solutions', 'AI Automations', 'Meta Ads']

export default function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-flex h-[1em] items-center overflow-hidden align-bottom text-[1.65rem] sm:text-[2.5rem] lg:text-[3.1rem]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap text-gradient font-bold italic"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
