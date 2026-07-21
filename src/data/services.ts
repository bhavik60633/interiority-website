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
    title: 'Design Consulting',
    desc: 'End-to-end design consulting for five-star hotels, luxury spas, private clubs, resorts, and fine-dining restaurants — from spatial concept to the final guest touchpoint.',
    img: furnitureMarble,
  },
  {
    num: '02',
    title: 'Amenity Boxes & Guestroom Objects',
    desc: 'Bespoke amenity boxes, trays, leather paper holders, tissue boxes, bathroom sets, and guest-use objects designed to elevate the guest experience.',
    img: tissueBoxTan,
  },
  {
    num: '03',
    title: 'Glassware, Vases & Decorative Accessories',
    desc: 'Luxury glasses, bowls, vases, trays, candleholders, sculptural accents, and tabletop products curated for hospitality excellence.',
    img: vaseCrystalSet,
  },
  {
    num: '04',
    title: 'Interior Styling & Spatial Design',
    desc: 'Warm, precise, layered interiors — styled with curated artifacts, candles, and glassware — for suites, spas, lounges, private clubs, resorts, and arrival zones.',
    img: decorativeAccents,
  },
  {
    num: '05',
    title: 'Product Development & Procurement',
    desc: 'From concept to sample to final production — refined products that match hotel standards and brand identity.',
    img: essentials,
  },
]
