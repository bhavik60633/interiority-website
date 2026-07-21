import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import CircularGallery from '../components/CircularGallery'
import GalleryMosaic from '../components/GalleryMosaic'

import heroImg from '../assets/floral-arrangement.png'

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="A Curated"
          subtitle="Collection"
          description="Explore the objects, textures, and spatial details that define our work — from crystal and brass to leather and stone, each piece is photographed in the setting it was designed for."
          image={heroImg}
        />
        <CircularGallery />
        <GalleryMosaic />
        <GalleryCTA />
      </main>
      <Footer />
    </>
  )
}

function GalleryCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface-container py-20 md:py-28">
      <div className="max-w-[800px] mx-auto px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 max-w-[80px] h-px bg-brass/30" />
            <span className="text-brass/50 text-[13px] select-none">&#10022;</span>
            <div className="flex-1 max-w-[80px] h-px bg-brass/30" />
          </div>
          <h3 className="font-display text-[22px] md:text-[30px] font-medium text-on-surface tracking-[0.02em] mb-4">
            Interested in a Specific Piece?
          </h3>
          <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.7] mb-8 max-w-[480px] mx-auto">
            Request our full product catalogue or speak with our team about custom pieces designed to your brand and spatial requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-primary-container transition-colors duration-300 cursor-pointer"
            >
              Request Catalogue
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-outline-variant/40 text-on-surface text-[10px] font-semibold tracking-[0.18em] uppercase hover:border-brass/50 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              View Products <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
