import lifestylePanel from '../assets/new/category-lifestyle-4panel.jpg'

export interface LifestyleCategory {
  title: string
  description: string
}

// The four spaces Interiority designs for — shown as a single pre-composed
// panel image (already labeled) sourced from the brand deck, alongside
// individual descriptive text.
export const lifestyleImage = lifestylePanel

export const lifestyleCategories: LifestyleCategory[] = [
  {
    title: 'Residentials',
    description: 'Private homes styled with the same precision and material honesty as our hospitality work.',
  },
  {
    title: 'Luxury Hospitality',
    description: 'Five-star hotels, resorts, and hospitality groups — arrival experiences to guestroom detail.',
  },
  {
    title: 'Wellness & Spa',
    description: 'Spas and wellness retreats designed for calm — candles, textiles, and considered objects.',
  },
  {
    title: 'Retail & Commercial Spaces',
    description: 'Restaurants, lobby clubs, and commercial interiors that need to hold a room and a brand.',
  },
]
