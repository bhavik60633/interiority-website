import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpg'

const links = ['Home', 'About', 'Services', 'Products', 'Projects', 'Gallery', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'h-16 bg-surface/80 backdrop-blur-2xl border-b border-outline-variant/40'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Interiority" className="h-8 w-8 object-cover rounded-[2px]" />
          <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-on-surface">
            Interiority
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2 bg-primary text-on-primary text-[9px] font-semibold tracking-[0.18em] uppercase hover:bg-primary-container transition-colors duration-300"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-[1.5px] bg-on-surface transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-on-surface transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-on-surface transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-outline-variant/30 transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-on-primary text-[10px] font-semibold tracking-[0.18em] uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}
