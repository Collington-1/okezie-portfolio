import { Linkedin, Mail, MessageCircle, Phone } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

// Note: no verified GitHub profile was available, so it's omitted here
// rather than linking to a placeholder URL.
const cards = [
  {
    label: 'Email',
    value: 'okeziecollington@yahoo.com',
    href: 'mailto:okeziecollington@yahoo.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+234 902 008 4552',
    href: 'tel:+2349020084552',
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: 'Chat directly',
    href: 'https://wa.me/2349020084552',
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    value: 'Okezie Collington',
    href: 'https://www.linkedin.com/in/okezie-collington-521770151/',
    icon: Linkedin,
  },
]

export default function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card, i) => (
        <Reveal key={card.label} delay={i * 0.06}>
          <a
            href={card.href}
            target={card.href.startsWith('http') ? '_blank' : undefined}
            rel={card.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition-colors hover:border-primary/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <card.icon size={19} />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-secondary">
                {card.label}
              </span>
              <span className="block text-sm font-medium text-ink">{card.value}</span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  )
}
