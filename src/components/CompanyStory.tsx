import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import companyStoryImg from '../assets/new/category-metal-furniture.jpg'

export default function CompanyStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-warm-charcoal py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          className="relative aspect-[4/5] rounded-[8px] overflow-hidden order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={companyStoryImg} alt="Sculptural gold-accented furniture styled in a refined interior" className="w-full h-full object-cover object-center" />
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-brass mb-6 block">
            Who We Are
          </span>
          <h2 className="font-display text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-[0.02em] text-inverse-on-surface mb-6">
            Elegance is found in attention to detail.
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-inverse-on-surface/60 leading-[1.8]">
            At Interiority, our methodology integrates soulful expression with refined
            aesthetics. We curate decor pieces that unite artisanal craftsmanship,
            sophistication, and contemporary design to establish distinctive
            environments — for hotels, spas, private clubs, resorts, restaurants, and
            the residences of those who notice the difference.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
