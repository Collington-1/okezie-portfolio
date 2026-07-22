import { ArrowRight, Sparkle } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { getImage } from '@/utils/images'
import { whyHireMe } from '@/data/skills'

export default function WhyHireMe() {
  return (
    <section className="bg-ink py-24 text-white lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Why Hire Me"
            title="Because your project deserves someone who ships"
            className="[&_h2]:text-white [&_span]:bg-white/10 [&_span]:text-primary"
          />
          <ul className="mt-8 space-y-5">
            {whyHireMe.map((point, i) => (
              <Reveal key={point} delay={i * 0.08}>
                <li className="flex items-start gap-3">
                  <Sparkle size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-white/80">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.4}>
            <Button to="/contact" className="mt-10" icon={<ArrowRight size={16} />}>
              Let's Work Together
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-lift">
            <img
              src={getImage('portrait-casual-3')}
              alt="Okezie Collington, ready to collaborate"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
