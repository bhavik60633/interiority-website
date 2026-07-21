import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import LagGallery3D from './LagGallery3D'

interface LagShowcaseProps {
  showHeading?: boolean
}

export default function LagShowcase({ showHeading = true }: LagShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Freeze on last frame when video ends
    const handleEnded = () => {
      v.pause()
      // Seek to just before the end to ensure last frame is visible
      if (v.duration) v.currentTime = v.duration - 0.01
      setEnded(true)
    }
    v.addEventListener('ended', handleEnded)

    // Autoplay once when scrolled into view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !ended) v.play().catch(() => {})
        })
      },
      { threshold: 0.3 },
    )
    io.observe(v)

    return () => {
      v.removeEventListener('ended', handleEnded)
      io.disconnect()
    }
  }, [ended])

  return (
    <section id="lag" className="relative">
      {/* ── Hero video ─────────────────────────────────────────── */}
      <div className="relative h-[100svh] w-full overflow-hidden bg-[#efe8de]">
        <video
          ref={videoRef}
          src="/lag/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
        />

        {/* Bottom tagline — fades in after video ends or on scroll */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 md:pb-20">
          <motion.span
            className="font-sans text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.35em] uppercase text-warm-charcoal/60 text-center px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A Bond Formed Without Permission
          </motion.span>
        </div>
      </div>

      {/* ── 3D scroll gallery of the collection ─────────────────── */}
      <LagGallery3D showHeading={showHeading} />
    </section>
  )
}
