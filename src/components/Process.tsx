import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'

import categoryHospitality from '../assets/new/category-hospitality.jpg'
import categoryMirrors from '../assets/new/category-mirrors.jpg'
import tissueBoxSmall from '../assets/new/tissue-box-small.jpg'
import categoryAccessories from '../assets/new/category-accessories.jpg'
import categoryLamps from '../assets/new/category-lamps.jpg'

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the property, brand standard, guest profile, and spatial requirements.',
    img: categoryHospitality,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Create visual direction, material language, object concepts, room styling, and product specifications.',
    img: categoryMirrors,
  },
  {
    num: '03',
    title: 'Prototype',
    desc: 'Develop samples, mockups, finishes, proportions, and tactile product details.',
    img: tissueBoxSmall,
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Coordinate execution, production, procurement, and final installation-ready design packages.',
    img: categoryAccessories,
  },
  {
    num: '05',
    title: 'Refine',
    desc: 'Ensure every guest-facing object and space meets luxury hospitality standards.',
    img: categoryLamps,
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<Array<HTMLDivElement | null>>([])

  /* Scroll-driven: the step crossing the centre band of the viewport is active. */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index)
            if (!Number.isNaN(idx)) setActiveStep(idx)
          }
        })
      },
      { rootMargin: '-49% 0px -49% 0px', threshold: 0 },
    )
    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const jumpTo = (i: number) => {
    stepRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section ref={sectionRef} id="process" className="bg-surface py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            FROM CONCEPT TO
            <br />
            <span className="text-primary-container">GUEST EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Steps, tall blocks so scrolling advances them */}
          <div className="flex flex-col order-2 lg:order-1">
            {steps.map((step, i) => {
              const active = i === activeStep
              return (
                <div
                  key={step.num}
                  ref={(el) => { stepRefs.current[i] = el }}
                  data-index={i}
                  className="lg:min-h-[62vh] flex items-center py-8 lg:py-0 border-t border-outline-variant/15 first:border-t-0"
                >
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    className="text-left flex gap-5 w-full group"
                  >
                    {/* Number badge */}
                    <div className="shrink-0">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-semibold transition-all duration-500 ${
                          active
                            ? 'bg-dusty-rose text-white scale-100'
                            : 'bg-surface-container-high text-on-surface-variant scale-90'
                        }`}
                      >
                        {step.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5 flex-1">
                      <h3
                        className={`font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.1] tracking-[0.02em] transition-colors duration-400 ${
                          active ? 'text-on-surface' : 'text-on-surface-variant/40'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="font-sans text-[14px] md:text-[15px] leading-[1.7] mt-3 max-w-[420px] transition-all duration-500"
                        style={{
                          color: 'var(--color-on-surface-variant)',
                          opacity: active ? 1 : 0.35,
                          maxHeight: active ? '160px' : '0px',
                          overflow: 'hidden',
                        }}
                      >
                        {step.desc}
                      </p>

                      {/* Mobile image (shown under active step only) */}
                      <div className="lg:hidden mt-5" style={{ maxHeight: active ? '420px' : '0px', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
                        <div className="relative aspect-[4/5] rounded-[8px] overflow-hidden">
                          <img src={step.img} alt={step.title} className="w-full h-full object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Sticky image, stays while steps scroll, crossfades to active */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="sticky top-28 h-[72vh] rounded-[8px] overflow-hidden ring-1 ring-black/[0.05] shadow-[0_30px_70px_-24px_rgba(42,40,38,0.4)]">
              {steps.map((step, i) => (
                <img
                  key={step.num}
                  src={step.img}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out"
                  style={{ opacity: i === activeStep ? 1 : 0 }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/25 to-transparent" />

              {/* Active step caption + progress dots */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/60 block mb-1">
                    Step {steps[activeStep].num}
                  </span>
                  <span className="font-display text-[24px] text-white leading-none">
                    {steps[activeStep].title}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {steps.map((s, i) => (
                    <span
                      key={s.num}
                      className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: i === activeStep ? 'var(--color-dusty-rose)' : 'rgba(255,255,255,0.35)',
                        transform: i === activeStep ? 'scale(1.7)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
