import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { lifestyleImage, lifestyleCategories } from '../data/lifestyleCategories'

export default function LifestyleCategories() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-surface py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          className="mb-14 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Where We Work
          </span>
          <h2 className="font-display text-[30px] md:text-[44px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            Four Kinds of Space, One Standard
          </h2>
        </motion.div>

        <motion.div
          className="rounded-[8px] overflow-hidden mb-14 md:mb-16 max-w-[1100px] mx-auto"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={lifestyleImage}
            alt="Residentials, Luxury Hospitality, Wellness & Spa, and Retail & Commercial Spaces"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-[1100px] mx-auto">
          {lifestyleCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-[18px] font-medium text-on-surface mb-2">{cat.title}</h3>
              <p className="font-sans text-[13px] text-on-surface-variant leading-[1.7]">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
