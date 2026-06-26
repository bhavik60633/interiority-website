import logo from '../assets/logo.jpg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Design Consulting',
  'Amenity Systems',
  'Glassware & Accessories',
  'Interior Styling',
  'Product Development',
]

const productLinks = [
  'Leather Goods',
  'Bathroom Sets',
  'Glassware',
  'Trays & Holders',
  'Decorative Objects',
]

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-inverse-on-surface/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Interiority" className="h-8 w-8 object-cover rounded-[2px]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface">
                Interiority
              </span>
            </div>
            <p className="font-sans text-[13px] text-inverse-on-surface/40 leading-[1.7] max-w-[280px]">
              Luxury hospitality design — interiors, amenity systems, and
              refined objects for five-star guest experiences across India
              and globally.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/30 mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[13px] text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/30 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <span className="font-sans text-[13px] text-inverse-on-surface/60">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/30 mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((label) => (
                <li key={label}>
                  <span className="font-sans text-[13px] text-inverse-on-surface/60">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-inverse-on-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[11px] text-inverse-on-surface/30">
            © {new Date().getFullYear()} Interiority. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="font-sans text-[10px] tracking-[0.1em] uppercase text-inverse-on-surface/30">
              Delhi, India
            </span>
            <span className="w-[0.5px] h-3 bg-inverse-on-surface/15" />
            <span className="font-sans text-[10px] tracking-[0.1em] uppercase text-inverse-on-surface/30">
              Pan India + Global
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
