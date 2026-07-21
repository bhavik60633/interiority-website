import { ZoomParallax } from './ui/zoom-parallax'

import vignetteAmberJars from '../assets/new/vignette-amber-jars.jpg'
import sculptureGiraffe from '../assets/new/sculpture-giraffe.jpg'
import retailCabinetRound from '../assets/new/retail-cabinet-round.jpg'
import tissueBoxRattan from '../assets/new/tissue-box-rattan.jpg'
import vasePinkCrystalPair from '../assets/new/vase-pink-crystal-pair.jpg'
import bowlGlassPotpourri from '../assets/new/bowl-glass-potpourri.jpg'
import wallArtBirds from '../assets/new/wall-art-birds.jpg'

const images = [
  { src: vignetteAmberJars, alt: 'Amber glass jar and vase vignette on a sideboard' },
  { src: sculptureGiraffe, alt: 'Gilded giraffe sculpture on a marble base' },
  { src: retailCabinetRound, alt: 'Curved brass retail display cabinet' },
  { src: tissueBoxRattan, alt: 'Leather tissue box styled on a rattan table' },
  { src: vasePinkCrystalPair, alt: 'Pair of blush crystal vases with florals' },
  { src: bowlGlassPotpourri, alt: 'Hand-blown glass bowl with dried botanicals' },
  { src: wallArtBirds, alt: 'Gilded metal bird mural on a dark wall' },
]

export default function FeaturedVisual() {
  return (
    <section className="bg-surface">
      <ZoomParallax images={images} />
    </section>
  )
}
