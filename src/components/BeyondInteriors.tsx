import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import hotelLobby from '../assets/hotel-lobby.png'

const stats = [
  { value: '200', suffix: '+', label: 'Hospitality Objects & Spatial Details' },
  { value: '30', suffix: '+', label: 'Product & Design Categories' },
  { value: '12', suffix: '+', label: 'Years Shaping Refined Guest Experiences' },
  { text: 'Pan India + Global', label: 'Reach & Presence' },
]

export default function BeyondInteriors() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  /* Scroll-zoom entrance: content scales up as section enters viewport */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 0.2'],
  })

  const zoomScale = useTransform(scrollYProgress, [0, 1], [0.82, 1])
  const zoomOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  /* Parallax on background */
  const { scrollYProgress: bgProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(bgProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-warm-charcoal"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={hotelLobby}
          alt="Luxury hotel lobby interior"
          className="w-full h-[120%] object-cover object-center opacity-30"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-warm-charcoal/60 via-transparent to-warm-charcoal/80" />

      {/* Scroll-zoom wrapper — entire content zooms in on scroll */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 py-32 md:py-48"
        style={{ scale: zoomScale, opacity: zoomOpacity }}
      >
        {/* Editorial heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-24 md:mb-32">
          {/* BEYOND INTERIORS — slides from left */}
          <motion.h2
            className="font-display text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.05] tracking-[0.02em] text-inverse-on-surface/90"
            initial={{ opacity: 0, x: -120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            BEYOND
            <br />
            INTERIORS
          </motion.h2>

          {/* INTO EXPERIENCE — slides from right */}
          <motion.h2
            className="font-display text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.05] tracking-[0.02em] text-dusty-rose/80 md:text-right"
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            INTO
            <br />
            EXPERIENCE
          </motion.h2>
        </div>

        {/* Stats grid with slot machine numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="border-t border-inverse-on-surface/10 pt-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="font-display text-[32px] md:text-[48px] font-medium text-inverse-on-surface/90 leading-[1.1]">
                {'value' in stat && stat.value ? (
                  <SlotNumber
                    value={stat.value}
                    suffix={stat.suffix || ''}
                    isInView={isInView}
                    delay={0.6 + i * 0.15}
                  />
                ) : (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {stat.text}
                  </motion.span>
                )}
              </div>
              <motion.div
                className="font-sans text-[11px] tracking-[0.15em] uppercase text-inverse-on-surface/60 mt-3 leading-[1.5]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function SlotNumber({
  value,
  suffix,
  isInView,
  delay,
}: {
  value: string
  suffix: string
  isInView: boolean
  delay: number
}) {
  const digits = value.split('')

  return (
    <span className="inline-flex items-baseline">
      {digits.map((char, i) => (
        <SlotDigit
          key={i}
          target={parseInt(char)}
          isInView={isInView}
          delay={delay + i * 0.08}
        />
      ))}
      {suffix && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + digits.length * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {suffix}
        </motion.span>
      )}
    </span>
  )
}

function SlotDigit({
  target,
  isInView,
  delay,
}: {
  target: number
  isInView: boolean
  delay: number
}) {
  const spins = 2
  const totalSteps = spins * 10 + target
  const steps = Array.from({ length: totalSteps + 1 }, (_, i) => i % 10)

  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: '1.1em' }}
    >
      <motion.span
        className="inline-flex flex-col"
        initial={{ y: 0 }}
        animate={isInView ? { y: `calc(-${totalSteps} * 1.1em)` } : {}}
        transition={{
          duration: 1.4 + target * 0.04,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {steps.map((d, i) => (
          <span
            key={i}
            className="block text-center"
            style={{ height: '1.1em', lineHeight: '1.1' }}
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}
