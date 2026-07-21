import luxurySuite from '../assets/luxury-suite.png'
import consoleStyling from '../assets/console-styling.png'
import hotelExterior from '../assets/hotel-exterior.png'
import luxuryRugLounge from '../assets/luxury-rug-lounge.png'
import bedsideStyling from '../assets/bedside-styling.png'
import whoWeAre from '../assets/new/who-we-are.jpg'

export interface Project {
  img: string
  title: string
  label: string
  size: 'large' | 'medium'
  description: string
}

export const projects: Project[] = [
  {
    img: whoWeAre,
    title: 'Grand Lobby',
    label: 'Spatial Design',
    size: 'large',
    description: 'A full arrival-experience redesign — warm materials, layered lighting, and curated objects that set the tone the moment a guest steps through the door.',
  },
  {
    img: luxurySuite,
    title: 'Five-Star Suite',
    label: 'Interior Styling',
    size: 'medium',
    description: 'Layered textiles, considered lighting, and a restrained palette bring quiet luxury to a flagship suite.',
  },
  {
    img: consoleStyling,
    title: 'Console Styling',
    label: 'Arrival Experience',
    size: 'medium',
    description: 'Console and vignette styling for arrival zones — florals, objects, and lighting composed to feel effortless.',
  },
  {
    img: hotelExterior,
    title: 'Hotel Exterior',
    label: 'Hospitality Architecture',
    size: 'large',
    description: 'Exterior presence and approach design for a five-star property, balancing architectural scale with inviting warmth.',
  },
  {
    img: luxuryRugLounge,
    title: 'Luxury Lounge',
    label: 'Textile & Spatial',
    size: 'medium',
    description: 'A lounge redesign built around texture — rugs, upholstery, and soft furnishing chosen to slow guests down.',
  },
  {
    img: bedsideStyling,
    title: 'Bedside Styling',
    label: 'Guest Room Detail',
    size: 'medium',
    description: 'The small details of a guest room — bedside objects, lighting, and finishing touches that guests remember.',
  },
]
