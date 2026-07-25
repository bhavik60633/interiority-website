import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

// TODO: swap in the real business WhatsApp number (with country code, digits only).
const WHATSAPP_NUMBER = '910000000000'
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2.003c-5.514 0-9.983 4.47-9.983 9.983 0 1.76.462 3.483 1.34 5.003l-1.425 5.203 5.325-1.397a9.955 9.955 0 0 0 4.743 1.207h.004c5.513 0 9.983-4.47 9.983-9.983 0-2.667-1.038-5.174-2.924-7.06a9.926 9.926 0 0 0-7.063-2.956zm.004 18.077h-.003a8.31 8.31 0 0 1-4.233-1.16l-.303-.18-3.16.828.844-3.08-.198-.317a8.29 8.29 0 0 1-1.27-4.42c0-4.585 3.732-8.317 8.328-8.317a8.27 8.27 0 0 1 5.885 2.443 8.27 8.27 0 0 1 2.437 5.882c0 4.585-3.733 8.32-8.327 8.32z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // The page scrolls on <body> (body has overflow-x:hidden → overflow-y:auto),
    // not window, so read whichever scroll position is live and listen in the
    // capture phase to catch the scroll event regardless of the container.
    const getY = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    const onScroll = () => setScrolled(getY() > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => window.removeEventListener('scroll', onScroll, { capture: true })
  }, [])

  // At the top of the page the bar is transparent over a hero image, so text
  // must be light. Once scrolled, the bar gets a light background and text
  // switches back to the dark theme tokens.
  const onDark = !scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'h-16 bg-surface/80 backdrop-blur-2xl border-b border-outline-variant/40'
          : 'h-20 bg-transparent'
      }`}
    >
      {/* Contrast scrim, keeps light text legible over bright hero images */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent transition-opacity duration-500 ${
          onDark ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Interiority" className="h-8 w-8 object-cover rounded-[2px]" />
          <span
            className={`font-sans text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
              onDark ? 'text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]' : 'text-on-surface'
            }`}
          >
            Interiority
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-sans text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                onDark
                  ? 'text-white/85 hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/lag"
            className={`font-serif text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
              onDark
                ? 'text-white hover:text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]'
                : 'text-secondary hover:text-primary'
            }`}
          >
            L&#259;g
          </Link>
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-300 ${
              onDark
                ? 'border-white/50 text-white hover:border-white hover:bg-white/10'
                : 'border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2 bg-primary text-on-primary text-[9px] font-semibold tracking-[0.18em] uppercase hover:bg-primary-container transition-colors duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${onDark && !mobileOpen ? 'bg-white' : 'bg-on-surface'} ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${onDark && !mobileOpen ? 'bg-white' : 'bg-on-surface'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${onDark && !mobileOpen ? 'bg-white' : 'bg-on-surface'} ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-outline-variant/30 transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/lag"
            className="font-serif text-[14px] font-medium tracking-[0.12em] uppercase text-secondary"
            onClick={() => setMobileOpen(false)}
          >
            L&#259;g
          </Link>
          <div className="mt-2 flex items-center gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/40 text-on-surface-variant"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
            </a>
            <Link
              to="/contact"
              className="flex-1 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-on-primary text-[10px] font-semibold tracking-[0.18em] uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
