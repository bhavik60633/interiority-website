import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import grandLobby from '../assets/grand-lobby.png'

/*
  Typography scale (golden ratio ~1.618):
  Label:     12px  — sans, uppercase, tracked
  Subtitle:  clamp(1rem, 1.8vw, 1.5rem) — italic serif accent
  Headline:  clamp(2rem, 4.5vw, 4.2rem) — serif, semibold, the star
  Brand:     clamp(2.8rem, 6vw, 5.5rem) — "Interiority" gets more presence
  CTA:       9px   — tiny, refined, uppercase ghost buttons (luxury convention)

  Spacing follows 8px grid: 8, 16, 24, 32, 40, 48, 56, 64
  CTA sizing: small enough to feel secondary to the headline (Fitts's law —
  easy to click but not visually dominant)
*/

const headlines = [
  { top: 'Designing', bottom: 'Five‑Star Experiences' },
  { top: 'Quiet Luxury', bottom: 'Precisely Made' },
  { top: '', bottom: 'Interiority' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.35])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.75])

  return (
    <section id="home" ref={containerRef} className="relative h-[300vh] bg-on-surface">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 origin-center" style={{ scale: bgScale }}>
          <img
            src={grandLobby}
            alt="Luxury hotel grand lobby with crystal chandelier and marble floors"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-on-surface"
          style={{ opacity: overlayOpacity }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/15" />

        {/* Content — vertically centered with proper spacing hierarchy */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-20">

          {/* Thin accent line — 32px above label */}
          <motion.div
            className="w-8 h-px bg-brass/40 mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Label — small, tracked, white, clearly readable */}
          <motion.span
            className="font-sans text-[11px] md:text-[12px] font-semibold tracking-[0.25em] uppercase text-white/80 mb-5 md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Five‑Star Hospitality Design
          </motion.span>

          {/* Headlines — the visual anchor */}
          <ScrollHeadlines scrollYProgress={scrollYProgress} />

          {/* Diamond separator — 32px gap */}
          <motion.div
            className="flex items-center gap-3 mt-7 md:mt-8 mb-8 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-6 h-px bg-brass/30" />
            <div className="w-1 h-1 rotate-45 bg-brass/50" />
            <div className="w-6 h-px bg-brass/30" />
          </motion.div>

          {/* CTAs — refined, minimal, secondary to headline */}
          <motion.div
            className="flex flex-row gap-3 md:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#projects"
              className="px-5 md:px-7 py-2 md:py-2.5 bg-white/90 backdrop-blur-sm text-on-surface text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-white transition-all duration-300 text-center"
            >
              Our Work
            </a>
            <a
              href="#contact"
              className="px-5 md:px-7 py-2 md:py-2.5 border border-white/25 text-white/85 text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:border-white/50 hover:text-white transition-all duration-300 text-center"
            >
              Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ScrollHeadlines({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * headlines.length), headlines.length - 1)
    setActiveIndex(Math.max(0, idx))
  })

  return (
    <div className="relative h-[72px] sm:h-[90px] md:h-[120px] lg:h-[140px] flex items-center justify-center w-full max-w-[900px]">
      {headlines.map((headline, i) => (
        <div
          key={i}
          className="absolute w-full text-center transition-all duration-[800ms]"
          style={{
            opacity: i === activeIndex ? 1 : 0,
            transform: i === activeIndex
              ? 'translateY(0)'
              : i < activeIndex
                ? 'translateY(-24px)'
                : 'translateY(24px)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {headline.top && (
            <span
              className="block font-display italic text-white/80"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.5rem)',
                fontWeight: 400,
                letterSpacing: '0.04em',
                marginBottom: '0.2em',
              }}
            >
              {headline.top}
            </span>
          )}
          <h1
            className="font-display text-white"
            style={{
              fontSize: i === 2
                ? 'clamp(2.8rem, 6vw, 5.5rem)'
                : 'clamp(2rem, 4.5vw, 4.2rem)',
              fontWeight: i === 2 ? 600 : 600,
              letterSpacing: i === 2 ? '0.08em' : '0.015em',
              lineHeight: 1.1,
              textShadow: '0 2px 24px rgba(0,0,0,0.25)',
            }}
          >
            {headline.bottom}
          </h1>
        </div>
      ))}
    </div>
  )
}
