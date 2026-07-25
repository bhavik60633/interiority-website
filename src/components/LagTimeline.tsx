import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { lagProducts } from '../data/lagProducts'
import LagWordmark from './LagWordmark'

/*
  LĂG timeline, a premium scroll-reveal (adapted from the Aceternity Timeline
  pattern to this Vite + Tailwind v4 + `motion` codebase, and re-themed).

  • Each product is a continuously-visible block, no crossfade, so there is no
    blank "plank" between products.
  • A sticky product name/number holds on the left while its content scrolls past.
  • An animated brass→primary progress line fills as you move through the collection.
  • Each product's own colour appears only as refined accents (node, eyebrow, rule,
    a soft wash behind the bottle), never as a jarring full-background flip.
*/

export default function LagTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 15%', 'end 60%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1])

  return (
    <div ref={containerRef} className="w-full bg-surface font-sans">
      {/* Section intro */}
      <div className="max-w-[1200px] mx-auto pt-24 md:pt-32 pb-4 px-6 md:px-12">
        <div className="mb-6">
          <LagWordmark size="sm" align="left" tagline={false} />
        </div>
        <h2 className="font-display text-[34px] md:text-[52px] font-semibold leading-[1.08] tracking-[0.02em] text-on-surface max-w-[720px]">
          Botanical waters, distilled to their most honest form.
        </h2>
        <p className="font-sans text-[14px] md:text-[16px] text-on-surface-variant leading-[1.8] max-w-[560px] mt-6">
          Each Lăg hydrosol is steam-distilled from a single flower, leaf, or root,
          no synthetics, no pretence. Scroll through the collection; every water is
          made for a mood, a ritual, and a certain kind of skin.
        </p>
      </div>

      <div ref={ref} className="relative max-w-[1200px] mx-auto pb-24 px-6 md:px-0">
        {lagProducts.map((p, i) => (
          <div key={p.id} className="flex justify-start pt-14 md:pt-32 md:gap-10">
            {/* Sticky left, node + name */}
            <div className="sticky top-32 md:top-40 self-start z-30 flex flex-col md:flex-row items-start md:items-center max-w-[80px] md:max-w-sm md:w-full">
              <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center absolute left-0 md:left-1 shadow-[0_2px_10px_rgba(42,40,38,0.08)]">
                <span
                  className="h-3.5 w-3.5 rounded-full ring-4 ring-surface"
                  style={{ backgroundColor: p.accent }}
                />
              </div>
              <div className="hidden md:block md:pl-24">
                <span
                  className="font-display text-[20px] font-medium tracking-[0.1em]"
                  style={{ color: p.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[34px] lg:text-[46px] font-semibold leading-[1.05] tracking-[0.01em] text-on-surface/85 mt-1">
                  {p.name}
                </h3>
                <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-on-surface-variant/55 mt-3 block">
                  {p.type}
                </span>
              </div>
            </div>

            {/* Right, content */}
            <div className="relative pl-16 md:pl-4 w-full">
              {/* Mobile header */}
              <div className="md:hidden mb-5">
                <span className="font-display text-[16px] font-medium mr-2" style={{ color: p.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[28px] font-semibold text-on-surface inline align-middle">
                  {p.name}
                </h3>
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-on-surface-variant/55 mt-1 block">
                  {p.type}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Bottle card */}
                <div className="lg:w-[46%] shrink-0">
                  <div
                    className="relative aspect-[4/5] rounded-[22px] overflow-hidden ring-1 ring-black/[0.06] shadow-[0_0_24px_rgba(42,40,38,0.05),0_16px_60px_-16px_rgba(42,40,38,0.35)]"
                    style={{ backgroundColor: p.tint }}
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} ${p.type}`}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-[22px] pointer-events-none shadow-[inset_0_0_40px_rgba(42,40,38,0.1)]" />
                  </div>
                </div>

                {/* Essence + benefits */}
                <div className="lg:w-[54%] lg:pt-3">
                  <span className="inline-block w-8 h-px mb-6" style={{ backgroundColor: p.accent }} />
                  <p className="font-display italic text-[19px] md:text-[23px] text-on-surface/80 leading-[1.45] mb-4">
                    {p.essence}
                  </p>
                  <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant/90 leading-[1.7] mb-7 max-w-[440px]">
                    {p.description}
                  </p>
                  <ul className="flex flex-col gap-4">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-4">
                        <span
                          className="mt-[9px] w-5 h-px shrink-0"
                          style={{ backgroundColor: p.accent }}
                        />
                        <span className="font-sans text-[14px] md:text-[15px] text-on-surface-variant leading-[1.65]">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-on-surface-variant/60 mt-7">
                    Sizes · {p.sizes.map((s) => s.replace(' ml', '')).join(' · ')} ml
                  </p>
                  <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-on-surface-variant/45 mt-2">
                    Storage · {p.storage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Animated progress line */}
        <div
          style={{ height: height + 'px' }}
          className="absolute left-[19px] md:left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,transparent_0%,var(--color-outline-variant)_8%,var(--color-outline-variant)_92%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-[linear-gradient(to_top,var(--color-primary)_0%,var(--color-brass)_45%,var(--color-dusty-rose)_100%)]"
          />
        </div>
      </div>
    </div>
  )
}
