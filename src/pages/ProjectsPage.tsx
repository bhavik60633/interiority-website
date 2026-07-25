import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import LuxuryInteriors from '../components/LuxuryInteriors'
import Trust from '../components/Trust'
import Contact from '../components/Contact'

import heroImg from '../assets/luxury-suite.png'

const capabilities = [
  'Lobby & Arrival Experience',
  'Guest Suite Styling',
  'Spa & Wellness Interiors',
  'Restaurant & Lounge Design',
  'Custom Furniture & Fixtures',
  'Art Curation & Placement',
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Projects"
          title="Spaces That Tell"
          subtitle="A Story"
          description="Every project begins with a conversation, about the brand, the guest, and the feeling the space should evoke. From grand lobbies to intimate suites, we design environments that guests remember long after checkout."
          image={heroImg}
        />
        <ProjectCapabilities />
        <LuxuryInteriors />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function ProjectCapabilities() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:gap-20"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
              What We Design
            </span>
            <h3 className="font-display text-[24px] md:text-[32px] font-semibold leading-[1.15] tracking-[0.02em] text-on-surface">
              Project Capabilities
            </h3>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                className="flex items-center gap-4 py-3 border-b border-outline-variant/15"
                initial={{ opacity: 0, x: 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="w-5 h-px bg-brass shrink-0" />
                <span className="font-sans text-[13px] md:text-[14px] text-on-surface-variant tracking-[0.02em]">
                  {cap}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
