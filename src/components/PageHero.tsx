import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  description: string
  image: string
}

export default function PageHero({ eyebrow, title, subtitle, description, image }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={ref} className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden flex items-end">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/60 to-warm-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-warm-charcoal/50 to-transparent" />

      {/* Content, bottom-aligned */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-20 pb-16 md:pb-24 pt-40 md:pt-52">
        <motion.span
          className="font-sans text-[9px] font-semibold tracking-[0.3em] uppercase text-brass block mb-5"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          className="font-display text-[36px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.05] tracking-[0.02em] text-inverse-on-surface mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
          {subtitle && (
            <>
              <br />
              <span className="text-dusty-rose/80">{subtitle}</span>
            </>
          )}
        </motion.h1>
        <motion.p
          className="font-sans text-[14px] md:text-[16px] text-inverse-on-surface/60 leading-[1.8] max-w-[540px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
