import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'L\u0103g', to: '/lag' },
]

const serviceLinks = [
  { label: 'Design Consulting', to: '/services' },
  { label: 'Amenity Systems', to: '/services' },
  { label: 'Glassware & Accessories', to: '/services' },
  { label: 'Interior Styling', to: '/services' },
  { label: 'Product Development', to: '/services' },
]

const productLinks = [
  { label: 'Leather Goods', to: '/products' },
  { label: 'Bathroom Sets', to: '/products' },
  { label: 'Glassware', to: '/products' },
  { label: 'Trays & Holders', to: '/products' },
  { label: 'Decorative Objects', to: '/products' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-inverse-on-surface/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Interiority" className="h-8 w-8 object-cover rounded-[2px]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface">
                Interiority
              </span>
            </Link>
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
                  <Link
                    to={link.to}
                    className="font-sans text-[13px] text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/30 mb-5">
              <Link to="/services" className="hover:text-inverse-on-surface/60 transition-colors">
                Services
              </Link>
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-sans text-[13px] text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/30 mb-5">
              <Link to="/products" className="hover:text-inverse-on-surface/60 transition-colors">
                Products
              </Link>
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-sans text-[13px] text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-inverse-on-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[11px] text-inverse-on-surface/30">
            &copy; {new Date().getFullYear()} Interiority. All rights reserved.
          </span>

          <div className="flex items-center gap-5">
            {legalLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                <Link
                  to={link.to}
                  className="font-sans text-[11px] text-inverse-on-surface/30 hover:text-inverse-on-surface/60 transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="w-[0.5px] h-3 bg-inverse-on-surface/15" />
                )}
              </span>
            ))}
            <span className="w-[0.5px] h-3 bg-inverse-on-surface/15" />
            <span className="font-sans text-[10px] tracking-[0.1em] uppercase text-inverse-on-surface/30">
              Delhi, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
