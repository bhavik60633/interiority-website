import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import { projects as allProjects } from '../data/projects'

interface LuxuryInteriorsProps {
  variant?: 'teaser' | 'full'
  limit?: number
  ctaHref?: string
}

export default function LuxuryInteriors({ variant = 'full', limit, ctaHref = '/projects' }: LuxuryInteriorsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const count = limit ?? (variant === 'teaser' ? 4 : allProjects.length)
  const projects = allProjects.slice(0, count)
  const showDescriptions = variant === 'full'

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
                  alt={`${project.title}, ${project.label}`}
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
                  {showDescriptions && (
                    <p className="font-sans text-[12px] md:text-[13px] text-inverse-on-surface/70 leading-[1.6] mt-2 max-w-[520px]">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {variant === 'teaser' && (
          <motion.div
            className="mt-14 md:mt-20 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 px-5 md:px-7 py-2 md:py-2.5 border border-outline-variant/40 text-on-surface text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:border-brass/50 hover:text-primary transition-colors duration-300"
            >
              View All Projects
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
