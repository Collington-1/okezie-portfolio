import { MapPin } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/contact/ContactForm'
import ContactCards from '@/components/contact/ContactCards'
import FAQSection from '@/components/contact/FAQSection'
import { getImage } from '@/utils/images'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Okezie Collington | Let's Build Something Great"
        description="Get in touch with Okezie Collington for website development, SEO, Meta Ads, ecommerce and AI automation projects."
        path="/contact"
      />

      <section className="pb-16 pt-10 sm:pt-16">
        <Container className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Let&apos;s build something worth talking about.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Tell me about your project and where you want it to go. I read every message myself and reply within
                24 hours.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-xs">
            <div className="aspect-square w-full overflow-hidden rounded-xl2 shadow-lift">
              <img
                src={getImage('portrait-casual-2')}
                alt="Okezie Collington, ready to hear about your project"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-xl2 border border-border bg-white p-7 shadow-soft sm:p-10">
            <ContactForm />
          </Reveal>

          <div className="space-y-8">
            <ContactCards />

            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <div className="flex aspect-[4/3] items-center justify-center bg-soft text-muted">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <MapPin size={28} className="text-primary" />
                    <p className="text-sm font-medium">Nigeria</p>
                    <p className="text-xs text-muted">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  )
}
