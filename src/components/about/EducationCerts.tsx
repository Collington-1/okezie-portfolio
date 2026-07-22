import { GraduationCap } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import { getImage } from '@/utils/images'
import { education } from '@/data/timeline'
import { certifications } from '@/data/certifications'

export default function EducationCerts() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeader eyebrow="Education & Certifications" title="Formal training & credentials" />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary">
                <GraduationCap size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted">{education.institution}</p>
              <p className="mt-auto pt-4 text-xs font-medium uppercase tracking-widest text-secondary">
                {education.period}
              </p>
            </div>
          </Reveal>

          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={(i + 1) * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <div className="aspect-[4/3] w-full overflow-hidden bg-soft">
                  <img
                    src={getImage(cert.image)}
                    alt={`${cert.title} certificate from ${cert.issuer}`}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-widest text-secondary">
                    Valid {cert.validFrom} – {cert.validTo}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
