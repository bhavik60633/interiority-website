import { useRef, useState, useCallback } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'

import crystalLamp from '../assets/crystal-lamp.png'
import bathroomSet from '../assets/bathroom-set.png'
import glassware from '../assets/glassware.png'
import luxurySuite from '../assets/luxury-suite.png'
import leatherTray from '../assets/leather-tray.png'

const services = [
  {
    num: '01',
    title: 'Design Consulting',
    desc: 'End-to-end design consulting for five-star hotels, suites, lobbies, restaurants, and guest touchpoints.',
    img: luxurySuite,
  },
  {
    num: '02',
    title: 'Amenity Boxes & Guestroom Objects',
    desc: 'Bespoke amenity boxes, trays, leather paper holders, tissue boxes, bathroom sets, and guest-use objects designed to elevate the guest experience.',
    img: bathroomSet,
  },
  {
    num: '03',
    title: 'Glassware, Vases & Decorative Accessories',
    desc: 'Luxury glasses, bowls, vases, trays, candleholders, sculptural accents, and tabletop products curated for hospitality excellence.',
    img: glassware,
  },
  {
    num: '04',
    title: 'Interior Styling & Spatial Design',
    desc: 'Warm, precise, layered interiors for suites, lounges, lobbies, bathrooms, and arrival zones.',
    img: crystalLamp,
  },
  {
    num: '05',
    title: 'Product Development & Procurement',
    desc: 'From concept to sample to final production — refined products that match hotel standards and brand identity.',
    img: leatherTray,
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={sectionRef} className="bg-surface py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Top decorative line with diamond */}
        <motion.div
          className="flex items-center gap-4 mb-14 md:mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-brass/40 to-brass/20" />
          <span className="text-brass/60 text-[13px] leading-none select-none">&#10022;</span>
          <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-brass/40 to-brass/20" />
        </motion.div>

        {/* Header — headline left, tagline right */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:gap-16 mb-14 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex-1">
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-dusty-rose mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.05] tracking-[0.02em]">
              <span className="text-on-surface">FULL‑SPECTRUM</span>
              <br />
              <span className="text-primary">HOSPITALITY DESIGN</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-8 pb-5 shrink-0">
            <div className="w-[1px] h-14 bg-outline-variant/40" />
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-on-surface-variant/70 leading-[2.4] max-w-[210px]">
              Elevating Guest Experiences
              Through Intentional Design
            </p>
          </div>
        </motion.div>

        {/* Service rows */}
        <div className="flex flex-col gap-3 md:gap-4">
          {services.map((service, i) => (
            <ServiceRow
              key={service.num}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom tagline + diamond */}
        <motion.div
          className="mt-14 md:mt-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-full h-[1px] bg-outline-variant/15 mb-8" />
          <p className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-on-surface-variant/45 mb-3 text-center">
            Thoughtful Design.&ensp;Refined Details.&ensp;Lasting Impressions.
          </p>
          <span className="text-brass/40 text-[11px] leading-none select-none">&#10022;</span>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Individual service row ───────────────────────────────────────── */

function ServiceRow({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0]
  index: number
  isInView: boolean
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  /* Cursor-following image springs */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const imgX = useSpring(mouseX, { stiffness: 260, damping: 26, mass: 0.5 })
  const imgY = useSpring(mouseY, { stiffness: 260, damping: 26, mass: 0.5 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!rowRef.current) return
      const rect = rowRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left - 140)
      mouseY.set(e.clientY - rect.top - 200)
    },
    [mouseX, mouseY],
  )

  return (
    <motion.div
      ref={rowRef}
      className="relative rounded-[12px] border border-outline-variant/15 bg-surface-container-lowest/50 cursor-pointer group"
      style={{ overflow: 'visible' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.15 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* ── Desktop row (md+) ─────────────────────────────────── */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 px-8 lg:px-10 py-6 lg:py-7">
        {/* Number */}
        <span className="font-display text-[26px] lg:text-[32px] font-medium text-on-surface-variant/25 shrink-0 w-10 lg:w-12 transition-colors duration-500 group-hover:text-brass/50">
          {service.num}
        </span>

        {/* Thumbnail */}
        <div className="shrink-0 w-[90px] h-[65px] lg:w-[110px] lg:h-[75px] rounded-[8px] overflow-hidden transition-transform duration-500 group-hover:scale-[1.04]">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Title */}
        <h3 className="font-sans text-[12px] lg:text-[14px] font-semibold tracking-[0.14em] uppercase text-on-surface leading-[1.45] shrink-0 w-[190px] lg:w-[260px] transition-colors duration-500 group-hover:text-primary">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-[12px] lg:text-[13px] text-on-surface-variant/65 leading-[1.7] flex-1 pr-2">
          {service.desc}
        </p>

        {/* Arrow */}
        <div className="shrink-0 w-10 h-10 rounded-full border border-outline-variant/25 flex items-center justify-center transition-all duration-500 group-hover:border-brass/50 group-hover:bg-brass/5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-outline/40 transition-all duration-500 group-hover:text-brass group-hover:translate-x-[2px]"
          >
            <path
              d="M4 8H12M12 8L8.5 4.5M12 8L8.5 11.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ── Mobile row (< md) ─────────────────────────────────── */}
      <div className="md:hidden px-5 py-5">
        <div className="flex items-center gap-4">
          {/* Number */}
          <span className="font-display text-[22px] font-medium text-on-surface-variant/25 shrink-0 w-8">
            {service.num}
          </span>

          {/* Thumbnail */}
          <div className="shrink-0 w-[64px] h-[50px] rounded-[6px] overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Title + arrow */}
          <div className="flex-1 flex items-center justify-between gap-3">
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-on-surface leading-[1.4]">
              {service.title}
            </h3>
            <div className="shrink-0 w-8 h-8 rounded-full border border-outline-variant/25 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-outline/40">
                <path d="M4 8H12M12 8L8.5 4.5M12 8L8.5 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile description */}
        <p className="font-sans text-[11px] text-on-surface-variant/55 leading-[1.6] mt-3 pl-12">
          {service.desc}
        </p>
      </div>

      {/* ── Cursor-following image (lg+ only) ─────────────────── */}
      <motion.div
        className="hidden lg:block absolute pointer-events-none z-40 w-[260px] h-[340px] rounded-[10px] overflow-hidden"
        style={{
          x: imgX,
          y: imgY,
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.7,
          transition: 'opacity 0.4s cubic-bezier(0.16,1,0.3,1), scale 0.4s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: '0 30px 60px rgba(42,40,38,0.18), 0 8px 20px rgba(42,40,38,0.10)',
        }}
      >
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-inverse-on-surface/75">
            {service.num} — {service.title}
          </span>
        </div>
      </motion.div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-brass/[0.02] via-transparent to-dusty-rose/[0.02] pointer-events-none transition-opacity duration-700"
        style={{ opacity: hovered ? 1 : 0 }}
      />
    </motion.div>
  )
}
