import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const faqs = [
  {
    q: 'Are product colors exactly as shown?',
    a: 'We reproduce colors as accurately as photography and screens allow, but natural materials like leather, glass, brass, and marble carry inherent variation — no two pieces are perfectly identical. For hospitality orders above a set volume, we can arrange physical samples before production.',
  },
  {
    q: 'How can I contact customer support?',
    a: 'Reach our team directly by phone or email — details are on our Contact page — or use the WhatsApp button in the navigation for a quicker response. We typically reply within 24 hours on business days.',
  },
  {
    q: 'Are dimensions accurate?',
    a: 'Yes. Every listed dimension is measured from the actual product or verified against manufacturer specifications. Where a piece is made to order or customized, we confirm final measurements with you before production begins.',
  },
  {
    q: 'What are your delivery timelines?',
    a: 'In-stock accessories typically ship within 7–10 business days. Custom or bulk hospitality orders (amenity sets, bespoke furniture, large installations) follow a project timeline agreed at the start, usually 3–8 weeks depending on scope.',
  },
  {
    q: 'Can I cancel or modify my order?',
    a: 'Standard orders can be modified or cancelled within 24 hours of confirmation. Custom and made-to-order pieces can be adjusted before production starts; once production begins, changes are handled case by case — reach out to our team as early as possible.',
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
