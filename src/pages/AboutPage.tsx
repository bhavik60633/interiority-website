import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import CompanyStory from '../components/CompanyStory'
import BeyondInteriors from '../components/BeyondInteriors'
import LifestyleCategories from '../components/LifestyleCategories'
import Trust from '../components/Trust'

import heroImg from '../assets/console-styling.png'

const values = [
  { title: 'Craftsmanship Over Mass Production', desc: 'Every object passes through the hands of skilled artisans. We choose slow craft over fast manufacturing because guest experiences deserve that difference.' },
  { title: 'Design With Intention', desc: 'Nothing decorative without purpose. Every material, proportion, and finish is chosen to serve the space, the brand, and the guest who will use it.' },
  { title: 'Hospitality at the Core', desc: 'We are not a general interior firm that happens to work with hotels. Hospitality is our only domain, we understand the operational, aesthetic, and experiential standards it demands.' },
  { title: 'Lasting Relationships', desc: 'We build long-term partnerships with properties, returning for seasonal refreshes, new wing rollouts, and product evolution as your brand grows.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Interiority"
          title="Elegance Is Found"
          subtitle="In Attention to Detail"
          description="We are a hospitality-focused design studio based in Delhi, India, specializing in luxury interiors, bespoke Amenities System, and curated decor objects for five-star hotels, resorts, spas, and private clubs worldwide."
          image={heroImg}
        />
        <CompanyStory />
        <OurValues />
        <BeyondInteriors />
        <LifestyleCategories />
        <Trust />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}

function OurValues() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Our Values
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            WHAT WE BELIEVE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="border-t border-outline-variant/25 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-[18px] md:text-[22px] font-medium text-on-surface tracking-[0.02em] mb-3">
                {v.title}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.7]">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-warm-charcoal py-24 md:py-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-display text-[24px] md:text-[36px] font-medium text-inverse-on-surface tracking-[0.02em] mb-4 leading-[1.15]">
            Ready to Elevate Your Property?
          </h3>
          <p className="font-sans text-[13px] md:text-[15px] text-inverse-on-surface/50 leading-[1.7] mb-10 max-w-[500px] mx-auto">
            From a single consultation to a complete design partnership, we are here to shape the details your guests will notice.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-brass text-warm-charcoal text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-brass/85 transition-colors duration-300 cursor-pointer"
            >
              Start a Conversation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border border-inverse-on-surface/20 text-inverse-on-surface/70 text-[10px] font-semibold tracking-[0.2em] uppercase hover:border-brass/50 hover:text-brass transition-colors duration-300 cursor-pointer"
            >
              Our Services <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
