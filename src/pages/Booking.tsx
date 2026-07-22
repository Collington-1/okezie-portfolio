import { CalendarCheck, MessageCircle } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'

const CAL_LINK = 'protouchng'

export default function Booking() {
  return (
    <>
      <SEO
        title="Book a Call | Okezie Collington"
        description="Book a free discovery call with Okezie Collington to talk about your website, ecommerce, SEO or AI automation project."
        path="/booking"
      />

      <section className="pb-12 pt-10 sm:pt-16">
        <Container className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <CalendarCheck size={14} /> Book a Call
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Let&rsquo;s talk about your project.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Pick a time that works for you and I&rsquo;ll come prepared — no sales script, just a real conversation
              about what you need and whether I&rsquo;m the right fit to build it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <Reveal delay={0.1} className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Book a call with Okezie Collington"
              src={`https://cal.com/${CAL_LINK}?embed=true`}
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={0.2} className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm text-muted">
              Prefer to chat first?{' '}
              <a
                href="https://wa.me/2349020084552"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-hover"
              >
                <MessageCircle size={14} /> Message me on WhatsApp
              </a>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
