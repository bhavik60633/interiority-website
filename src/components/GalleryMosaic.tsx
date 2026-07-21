import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import { galleryItems } from '../data/galleryItems'

interface GalleryMosaicProps {
  variant?: 'teaser' | 'full'
  limit?: number
  ctaHref?: string
}

// Editorial packed mosaic — mixed tile sizes, dense auto-flow, so the section
// is full of pictures instead of the empty space a rotating carousel leaves.
const spanPattern = [
  'md:col-span-2 md:row-span-2', // 0 — hero tile
  '',
  'md:row-span-2', // 2 — tall
  '',
  'md:col-span-2', // 4 — wide
  '',
  'md:row-span-2', // 6 — tall
  '',
  'md:col-span-2', // 8 — wide
  '',
]

export default function GalleryMosaic({ variant = 'full', limit, ctaHref = '/gallery' }: GalleryMosaicProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const count = limit ?? (variant === 'teaser' ? 7 : galleryItems.length)
  const items = galleryItems.slice(0, count)

  return (
    <section id="gallery" ref={sectionRef} className="bg-surface-container-low py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Gallery
          </span>
          <h2 className="font-serif text-[36px] md:text-[56px] font-normal leading-[1.1] tracking-[-0.02em] text-on-surface">
            A CURATED COLLECTION
          </h2>
        </motion.div>

        {/* Packed mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense auto-rows-[160px] sm:auto-rows-[190px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={`group relative overflow-hidden rounded-[6px] ${spanPattern[i % spanPattern.length]}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={item.photo}
                alt={`${item.title} — ${item.category}`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Material tag */}
              <span className="absolute top-3 right-3 font-sans text-[7px] md:text-[8px] font-semibold tracking-[0.15em] uppercase text-white/85 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                {item.material}
              </span>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-serif text-[16px] md:text-[20px] text-white leading-[1.15]">
                  {item.title}
                </h3>
                <span className="font-sans text-[8px] md:text-[9px] tracking-[0.15em] uppercase text-white/60 mt-1 block">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {variant === 'teaser' && (
          <div className="mt-14 md:mt-16 flex flex-col items-center">
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 px-5 md:px-7 py-2 md:py-2.5 border border-outline-variant/40 text-on-surface text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:border-brass/50 hover:text-primary transition-colors duration-300"
            >
              View Full Gallery
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
