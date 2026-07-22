import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { ArrowRight, Code2, FolderKanban, Quote, ShoppingBag, Sparkles, Target, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import RotatingWord from './RotatingWord'
import { getImage } from '@/utils/images'
import { testimonials } from '@/data/testimonials'

const badge = testimonials[3]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-10 sm:pt-16 lg:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            I Will Build You <RotatingWord />
            <br />
            That Make Your Clients Feel Safe Working With You.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 hidden max-w-lg text-lg leading-relaxed text-muted sm:block"
          >
            Website Developer &amp; Digital Growth Specialist, based in Nigeria.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 w-full max-w-sm sm:mt-16 sm:max-w-md"
        >
          <div className="relative">
            {/* Solid brand-gradient blob, anchored behind the lower body */}
            <div
              aria-hidden
              className="blob-shape absolute inset-x-0 bottom-0 mx-auto h-[84%] w-[87%] bg-brand-gradient shadow-glow"
            />

            <img
              src={getImage('founder-transparent')}
              alt="Okezie Collington, website developer and digital growth specialist"
              className="relative z-10 mx-auto block w-[92%] object-contain"
              loading="eager"
            />

            {/* Left: testimonial quote card */}
            <div className="absolute -left-20 top-0 hidden w-52 rounded-2xl border border-border bg-white/95 p-4 shadow-soft backdrop-blur xl:block">
              <Quote size={18} className="text-primary" fill="currentColor" strokeWidth={0} />
              <p className="mt-2 text-xs leading-relaxed text-ink">{badge.review}</p>
            </div>

            {/* Left: stat card */}
            <div className="absolute -left-10 bottom-28 hidden animate-float items-center gap-3 rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-soft backdrop-blur xl:flex">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                <FolderKanban size={18} />
              </span>
              <span>
                <span className="block text-xl font-semibold text-ink">
                  <CountUp end={20} duration={2} enableScrollSpy scrollSpyOnce />+
                </span>
                <span className="block text-xs text-muted">Projects Completed</span>
              </span>
            </div>

            {/* Right: floating service badges (CSS-driven, staggered) */}
            <div className="absolute -right-16 top-6 hidden animate-float xl:block" style={{ animationDelay: '0s' }}>
              <span className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft">
                <Code2 size={16} className="text-primary" /> Website Design
              </span>
            </div>

            <div className="absolute -right-24 top-[38%] hidden animate-float xl:block" style={{ animationDelay: '1.2s' }}>
              <span className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
                <Sparkles size={16} /> AI Automation
              </span>
            </div>

            <span
              aria-hidden
              className="absolute -right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-primary shadow-soft xl:flex"
            >
              <Target size={20} />
            </span>

            <div className="absolute -right-20 bottom-32 hidden animate-float xl:block" style={{ animationDelay: '2s' }}>
              <span className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft">
                <TrendingUp size={16} className="text-primary" /> SEO &amp; Social
              </span>
            </div>

            <div className="absolute -right-14 bottom-16 hidden animate-float xl:block" style={{ animationDelay: '0.6s' }}>
              <span className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
                <ShoppingBag size={16} /> Ecommerce
              </span>
            </div>
          </div>

          <div className="relative z-20 -mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/booking" icon={<ArrowRight size={16} />}>
              Hire Me
            </Button>
            <Button
              to="/projects"
              variant="ghost"
              className="!border-ink/20 !bg-white shadow-soft"
              icon={<FolderKanban size={16} />}
            >
              View Projects
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
