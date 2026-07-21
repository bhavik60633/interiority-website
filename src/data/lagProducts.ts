// LĂG — botanical hydrosols & body mists.
// Names/types/sizes are taken from the product labels; description, storage and
// benefit copy are from the brand's product sheet for each botanical water.

export interface LagProduct {
  id: string
  name: string
  type: string
  sizes: string[]        // every water is offered in all of these sizes
  essence: string        // short evocative line
  description: string     // factual product description
  storage: string         // storage guidance
  benefits: string[]     // key benefit bullets shown on the left
  image: string          // public path
  accent: string         // label / heading colour
  tint: string           // soft background wash for the pinned panel
}

const STORAGE = 'Store in a cool & dry place.'

// Every water is offered in all of these sizes.
const SIZES = ['100 ml', '50 ml', '30 ml', '10 ml', '8 ml']

export const lagProducts: LagProduct[] = [
  {
    id: 'mogra',
    name: 'Mogra Water',
    type: 'Face & Body Mist',
    sizes: SIZES,
    essence: 'The night-blooming jasmine of Indian gardens, captured as a mist.',
    description:
      'Steam-distilled floral water from night-blooming mogra (Arabian jasmine). 100% pure and natural, alcohol-free, and gentle enough for daily use.',
    storage: STORAGE,
    benefits: [
      'Envelops skin in a soft, uplifting mogra aroma',
      'Refreshes and cools through warm afternoons',
      'Calms the senses and settles the mind',
    ],
    image: '/lag/mogra.png',
    accent: '#b08b3e',
    tint: '#efe7d2',
  },
  {
    id: 'rose',
    name: 'Rose',
    type: 'Face & Body Mist',
    sizes: SIZES,
    essence: 'Steam-distilled petals — the most forgiving water for the skin.',
    description:
      'Steam-distilled floral water obtained from rose petals. 100% pure and natural hydrosol, alcohol-free and suitable for everyday skincare.',
    storage: STORAGE,
    benefits: [
      'Hydrates and refreshes the skin',
      'Helps tone and tighten pores',
      'Balances excess oil (sebum)',
      'Soothes irritated and sensitive skin',
    ],
    image: '/lag/rose.png',
    accent: '#c76b74',
    tint: '#f0d9db',
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    type: 'Body Mist',
    sizes: SIZES,
    essence: 'Grounding chandan — warmth, stillness, and old ceremony.',
    description:
      'Steam-distilled floral water obtained from sandalwood bark. 100% pure and natural hydrosol — alcohol-free, vegan, and cruelty-free.',
    storage: STORAGE,
    benefits: [
      'Moisturizes and hydrates the skin',
      'Soothes irritated and inflamed skin',
      'Reduces redness and skin sensitivity',
      'Helps treat acne and blemishes',
    ],
    image: '/lag/sandalwood.png',
    accent: '#a97c4e',
    tint: '#e9d9c1',
  },
  {
    id: 'helichrysum',
    name: 'Helichrysum',
    type: 'Body & Face Mist',
    sizes: SIZES,
    essence: 'The “everlasting” flower — restorative and rare.',
    description:
      'Steam-distilled botanical water from the flowering tops of the helichrysum plant. 100% pure and natural hydrosol, gentle enough for direct application.',
    storage: STORAGE,
    benefits: [
      'Soothes sunburns and minor skin irritation',
      'Helps calm redness and inflammation',
      'Supports skin regeneration and elasticity',
      'Helps reduce the appearance of fine lines',
    ],
    image: '/lag/helichrysum.png',
    accent: '#bd9a3f',
    tint: '#ece0bd',
  },
  {
    id: 'neroli',
    name: 'Neroli',
    type: 'Body Mist',
    sizes: SIZES,
    essence: 'Orange blossom at first light — bright and lifting.',
    description:
      'Steam-distilled floral water from neroli (bitter orange blossom). 100% pure and natural hydrosol — alcohol-free, vegan, and cruelty-free.',
    storage: STORAGE,
    benefits: [
      'Deeply cleanses and refreshes the skin',
      'Helps regulate excess sebum (oil)',
      'Soothes redness and inflammation',
      'Helps improve skin elasticity',
    ],
    image: '/lag/neroli.png',
    accent: '#4f9a86',
    tint: '#cfe7de',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    type: 'Face & Body Mist',
    sizes: SIZES,
    essence: 'Roasted warmth — an unexpected, energising ritual.',
    description:
      'Botanical water infused with roasted coffee. 100% pure and natural, alcohol-free, and rich in naturally occurring antioxidants.',
    storage: STORAGE,
    benefits: [
      'Awakens and energises the skin',
      'Refreshes with an antioxidant-rich veil',
      'Revives the senses through a slow morning',
    ],
    image: '/lag/coffee.png',
    accent: '#8a5a3b',
    tint: '#dcc6b2',
  },
  {
    id: 'rosehip',
    name: 'Rose Hip',
    type: 'Face & Body Mist',
    sizes: SIZES,
    essence: 'The fruit after the flower — nourishing and reviving.',
    description:
      'Steam-distilled botanical water obtained from rose hips. 100% pure and natural hydrosol, rich in naturally occurring vitamins A, C, and essential fatty acids.',
    storage: STORAGE,
    benefits: [
      'Helps tone and tighten the skin',
      'Hydrates and refreshes the complexion',
      'Supports collagen production for firmer skin',
      'Helps reduce the look of fine lines and wrinkles',
    ],
    image: '/lag/rosehip.png',
    accent: '#c97a70',
    tint: '#eecfc9',
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    type: 'Hydrosol',
    sizes: SIZES,
    essence: 'Queen of the night — sensuous, comforting, unmistakable.',
    description:
      'Steam-distilled floral water obtained from jasmine flowers. 100% pure and natural hydrosol, free from preservatives or emulsifiers.',
    storage: STORAGE,
    benefits: [
      'Hydrates and moisturizes the skin',
      'Soothes irritated, dry, and sensitive skin',
      'Acts as a gentle facial toner',
      'Helps cleanse excess oil and impurities',
    ],
    image: '/lag/jasmine.png',
    accent: '#b0913f',
    tint: '#ece2cd',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    type: 'Hydrosol',
    sizes: SIZES,
    essence: 'A quiet field at dusk, distilled into a single calming note.',
    description:
      'Steam-distilled floral water from lavender flowers. 100% pure and natural hydrosol, alcohol-free and gentle enough for daily use.',
    storage: STORAGE,
    benefits: [
      'Soothes irritated and sensitive skin',
      'Hydrates and refreshes the skin',
      'Helps tone skin and minimize the look of pores',
      'Helps calm redness and inflammation',
    ],
    image: '/lag/lavender.png',
    accent: '#8b7bb0',
    tint: '#e3ddf0',
  },
  {
    id: 'calendula',
    name: 'Calendula',
    type: 'Hydrosol',
    sizes: SIZES,
    essence: 'Marigold water — the gentlest care for delicate skin.',
    description:
      'Steam-distilled floral water from fresh calendula flowers. 100% pure and natural hydrosol, gentle enough for direct application to the skin.',
    storage: STORAGE,
    benefits: [
      'Helps soothe acne-prone skin',
      'Reduces skin redness and irritation',
      'Naturally hydrates and cools the skin',
      'Assists in refining the appearance of pores',
    ],
    image: '/lag/calendula.png',
    accent: '#d59a3f',
    tint: '#f0dcb2',
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    type: 'Face & Body Mist',
    sizes: SIZES,
    essence: 'Crimson petals — a natural tonic that brightens and firms.',
    description:
      'Steam-distilled floral water from fresh hibiscus flowers. 100% pure and natural hydrosol, rich in naturally occurring alpha hydroxy acids (AHAs).',
    storage: STORAGE,
    benefits: [
      'Hydrates and nourishes dry skin',
      'Naturally tones and tightens pores',
      'Helps balance the skin’s pH',
      'Supports brighter, more even-looking skin',
    ],
    image: '/lag/hibiscus.png',
    accent: '#b8496a',
    tint: '#f0d4dd',
  },
  {
    id: 'chamomile',
    name: 'Chamomile',
    type: 'Face & Body Mist',
    sizes: SIZES,
    essence: 'Golden calm — the gentlest water for reactive skin.',
    description:
      'Steam-distilled floral water from fresh chamomile flowers. 100% pure and natural hydrosol — alcohol-free, vegan, and gentle for everyday use.',
    storage: STORAGE,
    benefits: [
      'Helps soothe acne-prone skin',
      'Relieves skin redness and itchiness',
      'Hydrates and refreshes the skin',
      'Acts as a gentle facial toner',
    ],
    image: '/lag/chamomile.png',
    accent: '#c9a83f',
    tint: '#f0e8c8',
  },
]
