import { ZoomParallax } from './ui/zoom-parallax'

import hotelLobby from '../assets/hotel-lobby.png'
import crystalLamp from '../assets/crystal-lamp.png'
import hotelExterior from '../assets/hotel-exterior.png'
import luxurySuite from '../assets/luxury-suite.png'
import glassware from '../assets/glassware.png'
import bedsideStyling from '../assets/bedside-styling.png'
import artisanVase from '../assets/artisan-vase.png'

const images = [
  { src: hotelLobby, alt: 'Luxury hotel lobby with warm ambient lighting' },
  { src: crystalLamp, alt: 'Handcrafted crystal lamp detail' },
  { src: hotelExterior, alt: 'Five-star hotel exterior at dusk' },
  { src: luxurySuite, alt: 'Premium hotel suite interior' },
  { src: glassware, alt: 'Curated luxury glassware collection' },
  { src: bedsideStyling, alt: 'Refined bedside styling arrangement' },
  { src: artisanVase, alt: 'Artisan decorative vase' },
]

export default function FeaturedVisual() {
  return (
    <section className="bg-surface">
      <ZoomParallax images={images} />
    </section>
  )
}
