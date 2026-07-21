import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import ContactDetails from '../components/ContactDetails'

import heroImg from '../assets/hotel-lobby.png'

const faqs = [
  {
    q: 'What is the typical project timeline?',
    a: 'Most projects run 8\u201316 weeks from initial brief to delivery, depending on scope and customization. Rush timelines are available on request.',
  },
  {
    q: 'Do you work with hotels outside India?',
    a: 'Yes — we serve luxury properties across the Middle East, Southeast Asia, and Europe. Our logistics network handles international shipping and installation.',
  },
  {
    q: 'Can we order samples before committing?',
    a: 'Absolutely. We provide material swatches, finish samples, and prototype units so you can assess quality and fit before a full production run.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'There is no fixed MOQ. We work with boutique properties ordering a handful of pieces as well as chains requiring hundreds of units.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let’s Build Something"
          subtitle="Together"
          description="Whether you are planning a new property, refreshing guest rooms, or sourcing bespoke amenities — our team is ready to help. Reach out and we will respond within 24 hours."
          image={heroImg}
        />
        <ContactDetails />
        <Contact />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  )
}

function ContactFAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-surface py-24 md:py-36">
      <div className="max-w-[860px] mx-auto px-6 md:px-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary mb-4 block">
            Common Questions
          </span>
          <h2 className="font-display text-[28px] md:text-[40px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
            BEFORE YOU REACH OUT
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-outline-variant/15 pb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-[17px] md:text-[19px] font-medium text-on-surface tracking-[0.01em] mb-2">
                {faq.q}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.7]">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
