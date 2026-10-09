import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from '../ui/Button'
import WhatsAppButton from '../ui/WhatsAppButton'
import CallButton from '../ui/CallButton'
import { mainNav } from '../../config/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open
  const linkCls = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      solid
        ? isActive
          ? 'bg-navy-50 text-navy-900'
          : 'text-ink/80 hover:bg-navy-50 hover:text-navy-900'
        : isActive
          ? 'bg-white/15 text-white'
          : 'text-white/85 hover:bg-white/10 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        solid ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4 sm:h-20">
        <Logo light={!solid} />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkCls}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" variant="primary" className="min-h-11! px-5! max-sm:hidden">
            Plan Your Trip
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full transition xl:hidden ${
              solid ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto border-t border-navy-900/5 bg-white transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? 'max-h-[calc(100dvh-4.5rem)] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        hidden={!open}
      >
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-xl px-4 text-base font-semibold ${
                      isActive ? 'bg-navy-50 text-navy-900' : 'text-ink hover:bg-navy-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 border-t border-navy-900/5 pt-4 sm:grid-cols-3">
            <Button to="/contact" variant="primary">Plan Your Trip</Button>
            <WhatsAppButton>Enquire on WhatsApp</WhatsAppButton>
            <CallButton />
          </div>
        </nav>
      </div>
    </header>
  )
}
