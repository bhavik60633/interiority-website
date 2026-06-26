import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-surface-container-high py-32 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          className="max-w-[900px] mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-6 block">
            Trusted Partners
          </span>
          <h2 className="font-display text-[26px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.2] tracking-[0.02em] text-on-surface mb-8">
            Trusted by Hospitality Teams That Value Detail
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-on-surface-variant leading-[1.7] mb-12">
            From boutique properties to international hospitality groups,
            Interiority partners with teams that understand the power of
            precision in guest experience design.
          </p>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hilton mention — understated plaque style */}
          <div className="flex flex-col items-center gap-3 px-8 py-6 border border-outline-variant/30 rounded-[4px] bg-surface-container-lowest/50 backdrop-blur-sm">
            <span className="font-display text-[18px] md:text-[22px] font-medium text-on-surface tracking-[0.02em]">
              Hilton Hotels Group
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-outline">
              Featured Client Partnership
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 px-8 py-6 border border-outline-variant/30 rounded-[4px] bg-surface-container-lowest/50 backdrop-blur-sm">
            <span className="font-display text-[18px] md:text-[22px] font-medium text-on-surface tracking-[0.02em]">
              Pan India + Global
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-outline">
              Reach & Delivery
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 px-8 py-6 border border-outline-variant/30 rounded-[4px] bg-surface-container-lowest/50 backdrop-blur-sm">
            <span className="font-display text-[18px] md:text-[22px] font-medium text-on-surface tracking-[0.02em]">
              Five-Star Focus
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-outline">
              Hospitality Standard
            </span>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          className="max-w-[700px] mx-auto text-center mt-20 md:mt-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-display text-[18px] md:text-[22px] italic text-on-surface leading-[1.6] tracking-[0.01em]">
            "The attention to material, proportion, and guest psychology in
            every object they design is what sets Interiority apart. They
            don't just furnish spaces — they compose experiences."
          </p>
          <footer className="mt-6">
            <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-outline">
              — Hospitality Design Director
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
