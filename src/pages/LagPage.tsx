import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LagShowcase from '../components/LagShowcase'
import LagTimeline from '../components/LagTimeline'
import LagWordmark from '../components/LagWordmark'

const rituals = [
  {
    step: '01',
    title: 'Cleanse',
    desc: 'After washing your face, mist a hydrosol over damp skin to remove residual impurities and prepare your pores.',
  },
  {
    step: '02',
    title: 'Tone & Hydrate',
    desc: 'Use as a natural toner — the botanical water balances pH, tightens pores, and delivers a layer of plant-based hydration.',
  },
  {
    step: '03',
    title: 'Refresh',
    desc: 'Throughout the day, spritz on face, neck, or hair for an instant sensory reset. Keep a bottle at your desk or bedside.',
  },
]

const principles = [
  { title: 'Single-Origin Botanicals', desc: 'Each hydrosol is distilled from one plant — no blending, no shortcuts. What you smell is the plant itself.' },
  { title: 'Steam-Distilled Purity', desc: 'Traditional copper-still distillation at low temperatures preserves the full aromatic profile and active compounds.' },
  { title: 'No Synthetics, No Pretence', desc: 'Zero preservatives, zero synthetic fragrances, zero fillers. Just the water the plant leaves behind.' },
  { title: 'Designed for Hospitality', desc: 'Packaging, formulation, and pricing are built for hotels, spas, and wellness properties — not just retail shelves.' },
]

export default function LagPage() {
  return (
    <>
      <Navbar />
      <main>
        <LagShowcase showHeading={false} />
        <LagTimeline />

        {/* Brand story */}
        <section className="bg-warm-charcoal py-32 md:py-48">
          <div className="max-w-[900px] mx-auto px-6 md:px-20 text-center">
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1 }}
            >
              <LagWordmark size="md" dark tagline={false} />
            </motion.div>
            <motion.h2
              className="font-display text-[30px] md:text-[46px] font-semibold leading-[1.15] tracking-[0.02em] text-inverse-on-surface mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              A bond formed without permission.
            </motion.h2>
            <motion.p
              className="font-sans text-[15px] md:text-[17px] text-inverse-on-surface/55 leading-[1.8]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              Lăg is the quiet pull between a flower and the water it leaves behind —
              an attachment that forms on its own, without asking. Each hydrosol is
              steam-distilled from a single botanical and bottled at its most honest:
              no synthetics, no pretence, only the essence of the plant and the skin
              it was made to care for.
            </motion.p>
          </div>
        </section>

        {/* Principles */}
        <LagPrinciples />

        {/* How to Use */}
        <LagRituals />

        {/* CTA */}
        <LagCTA />
      </main>
      <Footer />
    </>
  )
}

function LagPrinciples() {
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
            Our Philosophy
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            WHAT SETS LĂG APART
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="border-t border-outline-variant/25 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-[18px] md:text-[22px] font-medium text-on-surface tracking-[0.02em] mb-3">
                {p.title}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.7]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LagRituals() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface-container py-28 md:py-40">
      <div className="max-w-[900px] mx-auto px-6 md:px-20">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            How to Use
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            THE RITUAL
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-14">
          {rituals.map((r, i) => (
            <motion.div
              key={r.step}
              className="flex gap-6 md:gap-10 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-[36px] md:text-[48px] font-medium text-brass/30 leading-none shrink-0 w-14 md:w-20">
                {r.step}
              </span>
              <div className="border-t border-outline-variant/20 pt-4 flex-1">
                <h3 className="font-display text-[20px] md:text-[24px] font-medium text-on-surface tracking-[0.02em] mb-2">
                  {r.title}
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.7]">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LagCTA() {
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
          <span className="font-sans text-[9px] font-semibold tracking-[0.3em] uppercase text-brass block mb-5">
            For Hotels & Spas
          </span>
          <h3 className="font-display text-[24px] md:text-[36px] font-medium text-inverse-on-surface tracking-[0.02em] mb-4 leading-[1.15]">
            Bring Lăg to Your Property
          </h3>
          <p className="font-sans text-[13px] md:text-[15px] text-inverse-on-surface/50 leading-[1.7] mb-10 max-w-[520px] mx-auto">
            We offer white-label and co-branded hydrosol programs for luxury hotels, wellness retreats, and spa properties. Custom formulations and private packaging available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-brass text-warm-charcoal text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-brass/85 transition-colors duration-300 cursor-pointer"
            >
              Request Samples
            </Link>
            <a
              href="mailto:business@coherenceworks.co"
              className="inline-flex items-center gap-2 px-7 py-3 border border-inverse-on-surface/20 text-inverse-on-surface/70 text-[10px] font-semibold tracking-[0.2em] uppercase hover:border-brass/50 hover:text-brass transition-colors duration-300 cursor-pointer"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
