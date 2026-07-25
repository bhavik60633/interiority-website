import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-warm-charcoal pt-32 md:pt-44 pb-16 md:pb-20">
          <div className="max-w-[800px] mx-auto px-6 md:px-20">
            <span className="font-sans text-[9px] font-semibold tracking-[0.3em] uppercase text-brass block mb-5">
              Legal
            </span>
            <h1 className="font-display text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-[0.02em] text-inverse-on-surface">
              Terms of Service
            </h1>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6 md:px-20">
            <p className="text-on-surface-variant/50 font-sans text-[12px] tracking-[0.1em] uppercase mb-10">
              Last updated: July 2026
            </p>

            <Block title="1. Acceptance of Terms">
              By accessing and using the Interiority website (www.interiority.in), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of this website.
            </Block>

            <Block title="2. Services">
              Interiority, operated by Coherence Works, provides luxury hospitality design services including interior design consulting, product development, Amenities System design, and spatial styling. All engagements are subject to separate written agreements between Interiority and the client.
            </Block>

            <Block title="3. Intellectual Property">
              All content on this website, including text, images, photographs, designs, logos, and layouts, is the property of Interiority / Coherence Works and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.
            </Block>

            <Block title="4. Product & Service Information">
              While we make every effort to present accurate information about our products and services, specifications, availability, and pricing may change without notice. Product images are representative and actual items may vary slightly in colour, texture, or finish.
            </Block>

            <Block title="5. Limitation of Liability">
              Interiority provides this website on an &quot;as is&quot; basis. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on the information provided herein.
            </Block>

            <Block title="6. External Links">
              This website may contain links to third-party websites. Interiority is not responsible for the content, privacy practices, or availability of any linked external sites.
            </Block>

            <Block title="7. Governing Law">
              These terms are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
            </Block>

            <Block title="8. Contact">
              For questions regarding these terms, please contact us at{' '}
              <a href="mailto:business@coherenceworks.co" className="text-primary hover:text-brass transition-colors">
                business@coherenceworks.co
              </a>.
            </Block>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-[20px] md:text-[24px] font-medium text-on-surface tracking-[0.02em] mb-4">
        {title}
      </h2>
      <p className="font-sans text-[14px] md:text-[15px] text-on-surface-variant leading-[1.8]">
        {children}
      </p>
    </div>
  )
}
