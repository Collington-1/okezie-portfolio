import { Link } from 'react-router-dom'
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react'
import Container from '@/components/ui/Container'
import logo from '@/assets/images/logo/collington-logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'Website Development' },
  { label: 'AI Automation & Training' },
  { label: 'SEO & Social Media' },
  { label: 'Meta Ads', to: '/meta-ads-project' },
  { label: 'Ecommerce Development' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-ink text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Okezie Collington" className="h-6 w-auto brightness-0 invert" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Website developer, SEO specialist and AI automation consultant helping brands build digital experiences
            that convert.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-white/75 transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Services</h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((service) => (
              <li key={service.label} className="text-sm text-white/75">
                {service.to ? (
                  <Link to={service.to} className="transition-colors hover:text-primary">
                    {service.label}
                  </Link>
                ) : (
                  service.label
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Get in Touch</h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="mailto:okeziecollington@yahoo.com"
                className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-primary"
              >
                <Mail size={16} /> okeziecollington@yahoo.com
              </a>
            </li>
            <li>
              <a
                href="tel:+2349020084552"
                className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-primary"
              >
                <Phone size={16} /> +234 902 008 4552
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/okezie-collington-521770151/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">© {year} Okezie Collington. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-primary"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </Container>
      </div>
    </footer>
  )
}
