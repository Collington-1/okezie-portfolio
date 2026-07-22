import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorEffect() {
  const [isTouch, setIsTouch] = useState(true)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (isTouch) return

    function onMove(e: MouseEvent) {
      x.set(e.clientX - 8)
      y.set(e.clientY - 8)
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest('a, button, [data-cursor-hover]')))
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isTouch, x, y])

  if (isTouch) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-4 w-4 rounded-full border border-primary md:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 2.2 : 1, backgroundColor: hovering ? 'rgba(249,95,84,0.15)' : 'transparent' }}
      transition={{ duration: 0.25 }}
    />
  )
}
