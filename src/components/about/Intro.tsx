import { Download } from 'lucide-react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { getImage } from '@/utils/images'

export default function Intro() {
  return (
    <section className="pb-20 pt-10 sm:pt-16">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md md:mx-0">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-lift">
              <img
                src={getImage('portrait-casual-1')}
                alt="Okezie Collington smiling in a professional setting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-2 rounded-2xl border border-border bg-white px-6 py-5 shadow-soft sm:-right-6">
              <p className="text-3xl font-semibold text-ink">7+</p>
              <p className="text-xs text-muted">Years of experience</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              About Me
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Building digital experiences that earn trust and drive results.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I'm a creative media and communications professional with over seven years of experience turning
              digital strategy into business growth. My work sits at the intersection of website development, SEO,
              social media and AI-powered automation — I've helped NGOs, investment firms and ecommerce brands build
              digital presences that actually convert.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I studied Polymer and Textile Engineering at the Federal University of Technology, Owerri — an
              unconventional path into tech that taught me to solve problems methodically, a habit that shows up in
              every website I build and every campaign I run.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="/Okezie-Collington-Resume.pdf" download className="mt-8 inline-block">
              <Button variant="secondary" icon={<Download size={16} />}>
                Download Resume
              </Button>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
