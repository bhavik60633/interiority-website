import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'

import luxurySuite from '../assets/luxury-suite.png'
import leatherHolder from '../assets/leather-holder.png'
import bathroomSet from '../assets/bathroom-set.png'
import crystalLamp from '../assets/crystal-lamp.png'
import consoleStyling from '../assets/console-styling.png'

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the property, brand standard, guest profile, and spatial requirements.',
    img: luxurySuite,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Create visual direction, material language, object concepts, room styling, and product specifications.',
    img: leatherHolder,
  },
  {
    num: '03',
    title: 'Prototype',
    desc: 'Develop samples, mockups, finishes, proportions, and tactile product details.',
    img: bathroomSet,
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Coordinate execution, production, procurement, and final installation-ready design packages.',
    img: crystalLamp,
  },
  {
    num: '05',
    title: 'Refine',
    desc: 'Ensure every guest-facing object and space meets luxury hospitality standards.',
    img: consoleStyling,
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={sectionRef} className="bg-surface py-32 md:py-48">
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

        {/* Stepper layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Steps list */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.button
                key={step.num}
                className={`text-left flex gap-5 py-6 border-t transition-colors duration-500 ${
                  i === activeStep
                    ? 'border-dusty-rose/40'
                    : 'border-outline-variant/20'
                }`}
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Number indicator */}
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all duration-500 ${
                      i === activeStep
                        ? 'bg-dusty-rose text-white'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[0.5px] h-full min-h-[40px] bg-outline-variant/30 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3
                    className={`font-display text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[0.02em] transition-colors duration-300 ${
                      i === activeStep ? 'text-on-surface' : 'text-on-surface-variant'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`font-sans text-[13px] md:text-[14px] leading-[1.6] mt-2 transition-all duration-500 ${
                      i === activeStep
                        ? 'text-on-surface-variant opacity-100 max-h-[200px]'
                        : 'text-outline opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Changing image */}
          <motion.div
            className="relative aspect-[4/5] lg:aspect-auto rounded-[4px] overflow-hidden hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {steps.map((step, i) => (
              <img
                key={step.num}
                src={step.img}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out"
                style={{ opacity: i === activeStep ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
