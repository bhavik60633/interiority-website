import { useState, useEffect, useRef, useCallback } from 'react'
import { galleryItems } from '../data/galleryItems'

export default function CircularGallery({ limit = 10 }: { limit?: number } = {}) {
  const [rotation, setRotation] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useRef(false)

  const items = galleryItems.slice(0, limit)
  const autoRotateSpeed = 0.15
  const itemCount = items.length
  const angleStep = 360 / itemCount

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const getRadius = useCallback(() => {
    if (typeof window === 'undefined') return 600
    if (window.innerWidth < 640) return 280
    if (window.innerWidth < 1024) return 420
    return 600
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const containerCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const offset = (viewportCenter - containerCenter) / rect.height
      const scrollRotation = offset * 180

      setRotation(scrollRotation)

      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (isScrolling || prefersReducedMotion.current) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      return
    }

    const animate = () => {
      setRotation((prev) => prev + autoRotateSpeed)
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isScrolling])

  const radius = getRadius()

  return (
    <section id="gallery" className="bg-surface-container-low py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Gallery
          </span>
          <h2 className="font-serif text-[36px] md:text-[56px] font-normal leading-[1.1] tracking-[-0.02em] text-on-surface">
            A CURATED COLLECTION
          </h2>
        </div>

        {/* 3D Gallery */}
        <div
          ref={containerRef}
          className="relative mx-auto h-[400px] md:h-[500px]"
          style={{ perspective: '2000px' }}
          role="region"
          aria-label="Rotating gallery of hospitality design objects"
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {items.map((item, i) => {
              const itemAngle = i * angleStep + rotation
              const normalizedAngle = Math.abs(((itemAngle % 360) + 360) % 360)
              const adjustedAngle = normalizedAngle > 180 ? 360 - normalizedAngle : normalizedAngle
              const opacity = Math.max(0.15, 1 - adjustedAngle / 180)
              const scale = 0.7 + (1 - adjustedAngle / 180) * 0.3

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[260px]"
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                    opacity,
                    transition: isScrolling ? 'none' : 'opacity 0.3s ease',
                  }}
                >
                  <div className="bg-surface-container-low/70 backdrop-blur-[20px] border border-outline-variant/20 rounded-[8px] overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.photo}
                        alt={`${item.title}, ${item.category}`}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Material tag */}
                      <span className="absolute top-3 right-3 font-sans text-[8px] font-semibold tracking-[0.15em] uppercase text-inverse-on-surface/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                        {item.material}
                      </span>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-serif text-[16px] md:text-[18px] text-inverse-on-surface leading-[1.2]">
                          {item.title}
                        </h3>
                        <span className="font-sans text-[9px] tracking-[0.12em] uppercase text-inverse-on-surface/50 mt-1 block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
