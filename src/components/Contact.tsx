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
    <section id="contact" ref={sectionRef} className="bg-warm-charcoal py-32 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-dusty-rose mb-6 block">
              Get In Touch
            </span>
            <h2 className="font-display text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-[0.02em] text-inverse-on-surface mb-6">
              Let's Design the Details Your Guests Will Remember
            </h2>
            <p className="font-sans text-[14px] md:text-[16px] text-inverse-on-surface/50 leading-[1.7] mb-10">
              Tell us about your hotel, suite, lounge, guestroom, or product
              requirement. We'll help you shape a refined hospitality
              experience from concept to detail.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.15em] uppercase text-brass"
              >
                <span className="w-8 h-[0.5px] bg-brass" />
                Book Design Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.15em] uppercase text-brass"
              >
                <span className="w-8 h-[0.5px] bg-brass" />
                Request Catalogue
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-12 h-12 rounded-full bg-brass/20 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="var(--color-brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-[22px] font-medium text-inverse-on-surface mb-3 tracking-[0.02em]">
                  Thank You
                </h3>
                <p className="font-sans text-[14px] text-inverse-on-surface/50">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <FormField label="Name" type="text" required />
                <FormField label="Hotel / Company" type="text" required />
                <FormField label="Location" type="text" />
                <div>
                  <label className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/40 block mb-3">
                    Requirement Type
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[15px] py-2 outline-none focus:border-brass transition-colors duration-300 rounded-none appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-on-surface">Select...</option>
                    <option value="interiors" className="text-on-surface">Interior Design</option>
                    <option value="amenities" className="text-on-surface">Amenity Systems</option>
                    <option value="products" className="text-on-surface">Product Development</option>
                    <option value="consulting" className="text-on-surface">Design Consulting</option>
                    <option value="other" className="text-on-surface">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/40 block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[15px] py-2 outline-none focus:border-brass transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField label="Email" type="email" required />
                  <FormField label="Phone" type="tel" />
                </div>

                <button
                  type="submit"
                  className="mt-4 self-start px-5 md:px-7 py-2 md:py-2.5 bg-brass text-warm-charcoal text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase hover:bg-brass/80 transition-colors duration-300"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  type,
  required,
}: {
  label: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-inverse-on-surface/40 block mb-3">
        {label}
        {required && <span className="text-dusty-rose ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[15px] py-2 outline-none focus:border-brass transition-colors duration-300"
      />
    </div>
  )
}
