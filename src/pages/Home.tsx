import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BeyondInteriors from '../components/BeyondInteriors'
import Services from '../components/Services'
import FeaturedVisual from '../components/FeaturedVisual'
import CircularGallery from '../components/CircularGallery'
import ProductCollection from '../components/ProductCollection'
import LuxuryInteriors from '../components/LuxuryInteriors'
import LagShowcase from '../components/LagShowcase'
import Process from '../components/Process'
import Trust from '../components/Trust'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import QueryPopup from '../components/QueryPopup'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeyondInteriors />
        <Services variant="teaser" limit={3} ctaHref="/services" />
        <FeaturedVisual />
        <CircularGallery />
        <ProductCollection variant="teaser" limit={6} ctaHref="/products" />
        <LuxuryInteriors variant="teaser" limit={4} ctaHref="/projects" />
        <LagShowcase />
        <Process />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <QueryPopup />
    </>
  )
}
