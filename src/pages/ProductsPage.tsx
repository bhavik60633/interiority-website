import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import ProductCollection from '../components/ProductCollection'
import Contact from '../components/Contact'

import heroImg from '../assets/bedside-styling.png'

const categories = [
  { name: 'Leather Goods', desc: 'Paper holders, amenity boxes, trays, watch boxes, and waste bins — crafted in premium leather and leatherite.' },
  { name: 'Glassware & Crystal', desc: 'Tumblers, champagne coupes, decanters, and decorative vases in hand-blown crystal and artisan glass.' },
  { name: 'Bathroom & Amenity Sets', desc: 'Soap dispensers, tissue boxes, vanity trays, and complete bathroom accessory sets in marble, stone, and brass.' },
  { name: 'Lighting & Candles', desc: 'Table lamps, candle stands, diffusers, and ambient lighting designed for guest suites and lounge spaces.' },
  { name: 'Decorative Accents', desc: 'Metal murals, sculptural objects, planters, and art pieces that bring character to every corner.' },
  { name: 'Custom & Bespoke', desc: 'Made-to-order products developed from concept to production — matched to your brand identity and hotel standards.' },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Products"
          title="Objects That Complete"
          subtitle="The Stay"
          description="Every piece in our collection is designed for luxury hospitality — crafted from premium materials, built to hotel-grade standards, and refined to feel intentional in every setting."
          image={heroImg}
        />
        <CategoryOverview />
        <ProductCollection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function CategoryOverview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface-container py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Product Categories
          </span>
          <h2 className="font-display text-[28px] md:text-[40px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            CURATED BY CRAFT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="border border-outline-variant/15 bg-surface-container-lowest/50 rounded-[8px] p-6 md:p-8 group hover:border-brass/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-[18px] md:text-[20px] font-medium text-on-surface tracking-[0.02em] mb-3 group-hover:text-primary transition-colors duration-500">
                {cat.name}
              </h3>
              <p className="font-sans text-[12px] md:text-[13px] text-on-surface-variant/70 leading-[1.7]">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
