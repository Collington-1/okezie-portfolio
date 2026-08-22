import { Laptop, Wifi, Monitor, Zap } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import { getImage } from '@/utils/images'

const items = [
  {
    icon: Laptop,
    title: 'Reliable Hardware',
    caption: 'HP EliteBook 840 G3 · Intel Core i7 · 8GB RAM · Windows 11 Pro',
    image: 'computer-specs',
  },
  {
    icon: Wifi,
    title: 'Fast, Stable Internet',
    caption: '41 Mbps download · 32 Mbps upload — tested live on Speedtest.net',
    image: 'internet-speed',
  },
  {
    icon: Monitor,
    title: 'Dedicated Workstation',
    caption: 'A proper dual-monitor home office setup, ready for calls, screen shares and long build sessions',
    image: 'workstation',
  },
  {
    icon: Zap,
    title: 'Backup Power, Always',
    caption: 'A fuel-powered generator on standby, so grid outages never cost a deadline',
    image: 'backup-power',
  },
]

export default function RemoteWorkReadiness() {
  return (
    <section className="bg-soft py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Working With Me Remotely"
          title="Remote work readiness"
          description="Everything I need to deliver reliably from anywhere — solid hardware, fast internet, a dedicated workspace, and backup power for when the grid doesn't cooperate."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-border">
                  <img
                    src={getImage(item.image)}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-soft text-primary">
                    <item.icon size={18} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
