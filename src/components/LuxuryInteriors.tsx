import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

import grandLobby from '../assets/grand-lobby.png'
import luxurySuite from '../assets/luxury-suite.png'
import consoleStyling from '../assets/console-styling.png'
import hotelExterior from '../assets/hotel-exterior.png'
import luxuryRugLounge from '../assets/luxury-rug-lounge.png'
import bedsideStyling from '../assets/bedside-styling.png'

const projects = [
  { img: grandLobby, title: 'Grand Lobby', label: 'Spatial Design', size: 'large' },
  { img: luxurySuite, title: 'Five-Star Suite', label: 'Interior Styling', size: 'medium' },
  { img: consoleStyling, title: 'Console Styling', label: 'Arrival Experience', size: 'medium' },
  { img: hotelExterior, title: 'Hotel Exterior', label: 'Hospitality Architecture', size: 'large' },
  { img: luxuryRugLounge, title: 'Luxury Lounge', label: 'Textile & Spatial', size: 'medium' },
  { img: bedsideStyling, title: 'Bedside Styling', label: 'Guest Room Detail', size: 'medium' },
]

export default function LuxuryInteriors() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={sectionRef} className="bg-surface-container py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Our Projects
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            LUXURY INTERIORS
          </h2>
        </motion.div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`relative rounded-[4px] overflow-hidden group cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={`relative overflow-hidden ${
                  project.size === 'large' ? 'aspect-[16/7]' : 'aspect-[4/5] md:aspect-[3/4]'
                }`}
              >
                <img
                  src={project.img}
                  alt={`${project.title} — ${project.label}`}
                  className="w-full h-full object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-inverse-on-surface/50 block mb-2">
                    {project.label}
                  </span>
                  <h3 className="font-display text-[22px] md:text-[28px] font-medium text-inverse-on-surface leading-[1.2] tracking-[0.02em]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
