import furnitureMarble from '../assets/new/category-furniture-marble.jpg'
import tissueBoxTan from '../assets/new/tissue-box-tan.jpg'
import vaseCrystalSet from '../assets/new/vase-crystal-set.jpg'
import decorativeAccents from '../assets/new/category-decorative-accents.jpg'
import essentials from '../assets/new/category-essentials.jpg'

export interface Service {
  num: string
  title: string
  desc: string
  img: string
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Design Consulting and Concept Creation',
    desc: 'End-to-end design consulting and concept creation for five-star hotels, luxury spas, private clubs, resorts, and fine-dining restaurants, from spatial vision to the final guest touchpoint.',
    img: furnitureMarble,
  },
  {
    num: '02',
    title: 'Customised Essentials',
    desc: 'Bespoke amenity boxes, trays, leather paper holders, tissue boxes, bathroom sets, and guest-use essentials, customised to elevate every moment of the stay.',
    img: tissueBoxTan,
  },
  {
    num: '03',
    title: 'Decorative Accents and Artefacts',
    desc: 'Glassware, vases, bowls, candleholders, sculptural artefacts, and tabletop accents, curated for hospitality excellence.',
    img: vaseCrystalSet,
  },
  {
    num: '04',
    title: 'Interior Styling',
    desc: 'Warm, precise, layered interior styling, dressed with curated artefacts, candles, and glassware, for suites, spas, lounges, private clubs, resorts, and arrival zones.',
    img: decorativeAccents,
  },
  {
    num: '05',
    title: 'Quality Check, Installation and Aftercare',
    desc: 'Meticulous quality checks, on-site installation, and attentive aftercare, ensuring every piece is delivered and maintained to a five-star standard.',
    img: essentials,
  },
]
