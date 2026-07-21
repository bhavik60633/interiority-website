import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Process from '../components/Process'
import Contact from '../components/Contact'

import heroImg from '../assets/luxury-rug-lounge.png'

const reasons = [
  {
    num: '01',
    title: 'End-to-End Execution',
    text: 'From initial concept and mood boards through procurement, production, and final installation — we manage every stage so you can focus on your guests.',
  },
  {
    num: '02',
    title: 'Hospitality-First Design',
    text: 'Every material, finish, and detail is selected with hotel-grade durability and five-star aesthetics in mind. We design for the way guests actually use spaces.',
  },
  {
    num: '03',
    title: 'Bespoke & Brand-Aligned',
    text: 'No off-the-shelf solutions. Every piece is custom-developed to match your brand identity, spatial language, and quality standards.',
  },
  {
    num: '04',
    title: 'Pan-India + Global Reach',
    text: 'Our artisan network and production partners span India and beyond — enabling us to deliver consistently at scale, wherever your properties are.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Full-Spectrum"
          subtitle="Hospitality Design"
          description="From spatial concepts to the smallest guest-room detail — we offer end-to-end design, product development, and procurement services for luxury hotels, resorts, spas, and private clubs worldwide."
          image={heroImg}
        />
        <Services />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface-container py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Why Interiority
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            BUILT FOR HOSPITALITY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              className="border-t border-outline-variant/25 pt-6"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-[20px] font-medium text-brass/50 mb-3 block">{r.num}</span>
              <h3 className="font-display text-[20px] md:text-[24px] font-medium text-on-surface tracking-[0.02em] mb-3">
                {r.title}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.7]">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
