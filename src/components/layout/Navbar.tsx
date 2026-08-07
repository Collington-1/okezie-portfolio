import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import logo from '@/assets/images/logo/collington-logo.png'

interface NavChild {
  label: string
  to: string
}

interface NavItem {
  label: string
  to?: string
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Projects',
    children: [
      { label: 'Websites', to: '/projects?category=website' },
      { label: 'Apps', to: '/projects?category=app' },
      { label: 'Meta Ads', to: '/meta-ads-project' },
    ],
  },
  { label: 'Digital Trainer', to: '/digital-literacy-program' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function isChildActive(pathname: string, child: NavChild) {
  const childPath = child.to.split('?')[0]
  return pathname === childPath || pathname.startsWith(`${childPath}/`)
}

function DesktopNavDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
          active ? 'text-ink' : 'text-muted hover:text-ink'
        }`}
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} />
        </motion.span>
        {active && (
          <motion.span
            layoutId="nav-active"
            className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full mt-3 w-44 rounded-2xl border border-border bg-white p-2 shadow-soft"
          >
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-soft hover:text-primary"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Okezie Collington — home">
          <span className="flex items-center rounded-xl bg-ink px-3.5 py-2.5">
            <img src={logo} alt="Okezie Collington" className="h-6 w-auto" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            if (item.children) {
              const active = item.children.some((child) => isChildActive(location.pathname, child))
              return <DesktopNavDropdown key={item.label} item={item} active={active} />
            }
            return (
              <NavLink
                key={item.to}
                to={item.to!}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button to="/booking" variant="primary" className="!py-3">
            Hire Me
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white/95 backdrop-blur-lg md:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {navItems.map((item) => {
                if (item.children) {
                  const active = item.children.some((child) => isChildActive(location.pathname, child))
                  const subOpen = mobileSubOpen === item.label
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileSubOpen(subOpen ? null : item.label)}
                        aria-expanded={subOpen}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium ${
                          active ? 'bg-soft text-primary' : 'text-ink'
                        }`}
                      >
                        {item.label}
                        <motion.span animate={{ rotate: subOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {subOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 py-1 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.to}
                                  to={child.to}
                                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-soft hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <NavLink
                    key={item.to}
                    to={item.to!}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? 'bg-soft text-primary' : 'text-ink'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              })}
              <div className="mt-2">
                <Button to="/booking" className="w-full">
                  Hire Me
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
