import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const faqs = [
  {
    q: 'What tech platform would you recommend for our needs?',
    a: 'We recommend a modern, performance-first stack tailored to luxury hospitality — fast-loading pages, mobile-optimized layouts, and a CMS that lets your team update products and projects without developer support. Every detail is designed to reflect the five-star standard your brand demands.',
  },
  {
    q: 'What is the estimated cost for building this B2B website?',
    a: 'Project costs depend on scope, number of pages, custom features, and integrations. We provide a detailed proposal after understanding your brand, goals, and catalogue requirements — ensuring complete transparency before any work begins.',
  },
  {
    q: 'Are there different packages available?',
    a: 'Yes. We offer tiered engagement models — from a focused product showcase site to a full-spectrum digital presence with catalogue, lookbooks, inquiry systems, and hospitality-specific features. Each package is customized to your scale and ambitions.',
  },
  {
    q: 'Are there any hidden or additional costs we should be aware of?',
    a: 'Absolutely not. We believe in complete cost transparency. Domain, hosting, third-party integrations, and post-launch support are outlined upfront. Any additions during the project are discussed and approved before proceeding.',
  },
  {
    q: 'How would you promote the website to reach 5-star hotels specifically?',
    a: 'We combine targeted SEO for hospitality procurement keywords, curated LinkedIn and industry outreach, partnerships with hotel design consultants, and presence on luxury hospitality directories — ensuring your brand reaches the right decision-makers at premium properties.',
  },
  {
    q: 'What are your creative ideas to make our website stand out in the B2B space?',
    a: 'Cinematic scroll experiences, immersive product galleries with zoom-parallax, editorial storytelling layouts, and spatial design showcases that let hotel buyers feel the quality before they inquire. We design for emotional impact, not just information delivery.',
  },
  {
    q: 'Would you recommend any special features?',
    a: 'Interactive product catalogues with filtering by hotel category, downloadable spec sheets, virtual room mockups showing your products in situ, inquiry-to-quote workflows, and a private client portal for repeat orders and custom requests.',
  },
  {
    q: 'Do you also offer reel shoots as part of your services?',
    a: 'Yes. We provide end-to-end visual content services including product photography, lifestyle reel shoots, behind-the-scenes craftsmanship stories, and cinematic brand films — all produced to the aesthetic standard that luxury hospitality demands.',
  },
  {
    q: 'For shoots in general, what all is included in the package?',
    a: 'Our shoot packages include creative direction, professional photography and videography, styling and props, location scouting, post-production editing, color grading, and delivery of web-optimized and print-ready assets — everything needed for a cohesive brand presence.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section ref={sectionRef} className="bg-surface py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:gap-20 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lg:w-[400px] shrink-0 mb-8 lg:mb-0">
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-dusty-rose mb-4 block">
              Questions & Answers
            </span>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-[0.02em] text-on-surface">
              Frequently
              <br />
              Asked
            </h2>
          </div>
          <p className="font-sans text-[14px] md:text-[15px] text-on-surface-variant leading-[1.8] max-w-[520px] lg:pt-12">
            Everything you need to know about working with Interiority —
            from project scope and pricing to creative direction and
            hospitality-specific digital strategy.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="max-w-[900px]">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  index,
  isInView,
}: {
  question: string
  answer: string
  index: number
  isInView: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border-t border-outline-variant/25 last:border-b"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <button
        className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left group cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans text-[14px] md:text-[16px] font-medium text-on-surface leading-[1.5] group-hover:text-primary transition-colors duration-300">
          {question}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center transition-all duration-500 group-hover:border-brass/50 mt-0.5"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-outline transition-colors duration-300 group-hover:text-brass">
            <path d="M7 3V11M3 7H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: open ? '300px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-[1.8] pb-7 pr-14 max-w-[700px]">
          {answer}
        </p>
      </div>
    </motion.div>
  )
}
