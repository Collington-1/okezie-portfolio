import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'
import WhatsAppButton from './WhatsAppButton'
import CursorEffect from './CursorEffect'
import { useLenis } from '@/hooks/useLenis'

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  useLenis()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="relative flex min-h-screen flex-col">
      <CursorEffect />
      <ScrollProgress />
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 pt-20"
      >
        {children}
      </motion.main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}
