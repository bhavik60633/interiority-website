import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative bg-warm-charcoal py-24 md:py-36 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Compact header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-[9px] font-semibold tracking-[0.3em] uppercase text-brass mb-4 block">
            Start a Project
          </span>
          <h2 className="font-display text-[28px] md:text-[42px] font-semibold leading-[1.1] tracking-[0.02em] text-inverse-on-surface">
            Let's Create Something Remarkable
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            className="flex flex-col items-center text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-brass/15 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="var(--color-brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-[24px] font-medium text-inverse-on-surface mb-3 tracking-[0.02em]">
              Thank You
            </h3>
            <p className="font-sans text-[14px] text-inverse-on-surface/50 max-w-[320px]">
              We'll be in touch within 24 hours to discuss your project.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-[860px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Row 1: Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              <InputField label="Name" type="text" placeholder="Your full name" required />
              <InputField label="Hotel / Company" type="text" placeholder="Company name" required />
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              <InputField label="Email" type="email" placeholder="you@company.com" required />
              <InputField label="Phone" type="tel" placeholder="+91 00000 00000" />
            </div>

            {/* Row 3: Service type */}
            <div className="mb-6">
              <label className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/35 block mb-2.5">
                I'm interested in
              </label>
              <div className="flex flex-wrap gap-2">
                {['Interior Design', 'Amenities System', 'Product Development', 'Design Consulting', 'Lăg Hydrosols'].map((opt) => (
                  <label key={opt} className="group cursor-pointer">
                    <input type="checkbox" name="interest" value={opt} className="peer sr-only" />
                    <span className="inline-block px-4 py-2 font-sans text-[10px] tracking-[0.12em] uppercase border border-inverse-on-surface/15 text-inverse-on-surface/50 rounded-full transition-all duration-300 peer-checked:border-brass peer-checked:text-brass peer-checked:bg-brass/10 hover:border-inverse-on-surface/30">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="mb-8">
              <label className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/35 block mb-2.5">
                Message <span className="text-inverse-on-surface/20">(optional)</span>
              </label>
              <textarea
                rows={2}
                className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[14px] py-2 outline-none focus:border-brass transition-colors duration-300 resize-none placeholder:text-inverse-on-surface/20"
                placeholder="Brief details about your project..."
              />
            </div>

            {/* Submit + contact shortcuts */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                type="submit"
                className="px-8 py-3 bg-brass text-warm-charcoal text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-brass/85 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Send Enquiry
              </button>
              <div className="flex items-center gap-6 text-inverse-on-surface/30 font-sans text-[11px]">
                <span className="hidden sm:block">or reach us at</span>
                <a href="mailto:business@coherenceworks.co" className="text-brass/70 hover:text-brass transition-colors duration-300 tracking-[0.05em]">
                  business@coherenceworks.co
                </a>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}

function InputField({
  label,
  type,
  placeholder,
  required,
}: {
  label: string
  type: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/35 block mb-2.5">
        {label}
        {required && <span className="text-dusty-rose ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[14px] py-2 outline-none focus:border-brass transition-colors duration-300 placeholder:text-inverse-on-surface/20"
      />
    </div>
  )
}
