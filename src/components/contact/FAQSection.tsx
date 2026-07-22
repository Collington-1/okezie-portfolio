import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'

const faqs = [
  {
    question: 'How quickly can you start on a new project?',
    answer:
      "Most projects can kick off within a week of scope and deposit being confirmed. If it's urgent, tell me in the message and I'll do my best to prioritize.",
  },
  {
    question: 'Do you work with clients outside Nigeria?',
    answer:
      "Yes — I've delivered projects remotely for clients in the UK and Nigeria, and I'm comfortable working across time zones with async check-ins.",
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      "A clear picture of your goals, any existing brand assets, and access to relevant accounts (domain, hosting, ad accounts). I'll guide you through anything missing.",
  },
  {
    question: 'Can you handle both design and development?',
    answer:
      "Yes. I design and build end-to-end, so you're not coordinating between separate designer and developer handoffs.",
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'I offer maintenance and optimization retainers for clients who want continued SEO, content or performance support after launch.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32">
      <Container className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" className="mx-auto" />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-ink">{faq.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-muted">
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
