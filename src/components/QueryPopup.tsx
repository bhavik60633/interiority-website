import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FIRST_DELAY = 30_000      // 30 seconds
const RESHOW_DELAY = 120_000    // 2 minutes after dismiss
const STORAGE_KEY = 'interiority_query_submitted'

export default function QueryPopup() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const schedulePopup = useCallback((delay: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setVisible(true), delay)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    schedulePopup(FIRST_DELAY)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [schedulePopup])

  const handleClose = () => {
    setVisible(false)
    schedulePopup(RESHOW_DELAY)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    sessionStorage.setItem(STORAGE_KEY, '1')
    setTimeout(() => setVisible(false), 2500)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-[420px] bg-warm-charcoal rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative top accent */}
            <div className="h-[3px] bg-gradient-to-r from-brass/0 via-brass to-brass/0" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-inverse-on-surface/40 hover:text-inverse-on-surface transition-colors duration-300 z-10"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="px-8 pt-8 pb-10">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center text-center py-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-14 h-14 rounded-full bg-brass/15 flex items-center justify-center mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="var(--color-brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[22px] font-medium text-inverse-on-surface tracking-[0.02em] mb-2">
                    Thank You
                  </h3>
                  <p className="font-sans text-[13px] text-inverse-on-surface/50 leading-[1.6]">
                    We'll reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <span className="font-sans text-[9px] font-semibold tracking-[0.3em] uppercase text-brass block mb-3">
                      Quick Enquiry
                    </span>
                    <h3 className="font-display text-[24px] md:text-[28px] font-medium text-inverse-on-surface leading-[1.2] tracking-[0.02em] mb-2">
                      Let's Start a Conversation
                    </h3>
                    <p className="font-sans text-[12px] text-inverse-on-surface/40 leading-[1.6]">
                      Drop your details and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Email */}
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-inverse-on-surface/30">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[14px] py-2.5 pl-7 outline-none focus:border-brass transition-colors duration-300 placeholder:text-inverse-on-surface/25"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-inverse-on-surface/30">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Your phone number"
                        className="w-full bg-transparent border-b border-inverse-on-surface/15 text-inverse-on-surface/80 font-sans text-[14px] py-2.5 pl-7 outline-none focus:border-brass transition-colors duration-300 placeholder:text-inverse-on-surface/25"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-3 w-full py-3 bg-brass text-warm-charcoal text-[10px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-brass/85 active:scale-[0.98] transition-all duration-300"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
