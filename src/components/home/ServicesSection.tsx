import { useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import ServiceCard from './ServiceCard'
import { services } from '@/data/services'

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(services[0].id)

  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeader eyebrow="What I Offer" title="My services" align="left" />
        <div className="mt-14 space-y-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06}>
              <ServiceCard
                service={service}
                isOpen={openId === service.id}
                onToggle={() => setOpenId(openId === service.id ? null : service.id)}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
