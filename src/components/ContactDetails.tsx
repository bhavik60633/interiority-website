import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const details = [
  { label: 'Studio', value: 'Delhi, India' },
  { label: 'Reach', value: 'Pan India + Global' },
  { label: 'Phone', value: '+91 77290 844250', href: 'tel:+9177290844250' },
  { label: 'Email', value: 'business@coherenceworks.co', href: 'mailto:business@coherenceworks.co' },
  { label: 'Website', value: 'www.interiority.in', href: 'https://www.interiority.in' },
]

export default function ContactDetails() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 text-center">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-on-surface-variant/50 mb-2 block">
                {d.label}
              </span>
              {d.href ? (
                <a
                  href={d.href}
                  className="font-display text-[15px] md:text-[17px] text-on-surface hover:text-primary transition-colors duration-300"
                >
                  {d.value}
                </a>
              ) : (
                <span className="font-display text-[15px] md:text-[17px] text-on-surface">{d.value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
