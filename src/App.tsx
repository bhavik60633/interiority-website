import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BeyondInteriors from './components/BeyondInteriors'
import Services from './components/Services'
import FeaturedVisual from './components/FeaturedVisual'
import CircularGallery from './components/CircularGallery'
import ProductCollection from './components/ProductCollection'
import LuxuryInteriors from './components/LuxuryInteriors'
import Process from './components/Process'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeyondInteriors />
        <Services />
        <FeaturedVisual />
        <CircularGallery />
        <ProductCollection />
        <LuxuryInteriors />
        <Process />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
