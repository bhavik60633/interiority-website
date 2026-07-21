import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6 md:px-20 prose-interiority">
            <p className="text-on-surface-variant/50 font-sans text-[12px] tracking-[0.1em] uppercase mb-10">
              Last updated: July 2026
            </p>

            <Block title="1. Information We Collect">
              When you submit a contact form, request a catalogue, or send us an enquiry, we may collect your name, email address, phone number, company name, and project details. We do not collect data automatically through cookies or tracking scripts beyond essential analytics.
            </Block>

            <Block title="2. How We Use Your Information">
              We use the information you provide solely to respond to your enquiry, share relevant product catalogues, provide design consultation, and communicate about our services. We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </Block>

            <Block title="3. Data Storage & Security">
              Your data is stored securely and access is limited to authorized personnel at Interiority and Coherence Works. We use industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.
            </Block>

            <Block title="4. Third-Party Services">
              Our website may use essential third-party services for hosting, email delivery, and basic analytics. These services process data in accordance with their own privacy policies and are limited to what is necessary for the operation of our website.
            </Block>

            <Block title="5. Your Rights">
              You may request access to, correction of, or deletion of your personal data at any time by contacting us at business@coherenceworks.co. We will respond to your request within 30 business days.
            </Block>

            <Block title="6. Updates to This Policy">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the revised policy.
            </Block>

            <Block title="7. Contact">
              For questions about this privacy policy or your personal data, contact us at{' '}
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
