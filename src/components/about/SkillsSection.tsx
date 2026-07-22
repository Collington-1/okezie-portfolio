import { CheckCircle2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import { getImage } from '@/utils/images'
import { skillGroups } from '@/data/skills'

export default function SkillsSection() {
  return (
    <section className="bg-soft py-24 lg:py-32">
      <Container className="grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Capabilities" title="Core skills, tools & industries" />
          <div className="mt-10 space-y-8">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">{group.title}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                      <CheckCircle2 size={16} className="shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-lift">
            <img
              src={getImage('portrait-studio-2')}
              alt="Okezie Collington, digital growth specialist"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
