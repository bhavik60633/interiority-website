// LĂG — botanical hydrosols & body mists.
// Names/types/sizes are taken from the product labels; benefit copy is written
// from the well-known properties of each botanical hydrosol.

export interface LagProduct {
  id: string
  name: string
  type: string
  size: string
  essence: string        // short evocative line
  benefits: string[]     // 3 benefit bullets shown on the left
  image: string          // public path
  accent: string         // label / heading colour
  tint: string           // soft background wash for the pinned panel
}

export const lagProducts: LagProduct[] = [
  {
    id: 'mogra',
    name: 'Mogra Water',
    type: 'Body Mist',
    size: '100 ml',
    essence: 'The night-blooming jasmine of Indian gardens, captured as a mist.',
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
    type: 'Hydrosol',
    size: '100 ml',
    essence: 'Steam-distilled petals — the most forgiving water for the skin.',
    benefits: [
      'Hydrates and tones for a dewy finish',
      'Soothes redness and balances the complexion',
      'Sets makeup and revives skin any time of day',
    ],
    image: '/lag/rose.png',
    accent: '#c76b74',
    tint: '#f0d9db',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    type: 'Hydrosol',
    size: '30 ml',
    essence: 'A quiet field at dusk, distilled into a single calming note.',
    benefits: [
      'Calms the mind and eases tension before rest',
      'Soothes irritation and post-sun warmth',
      'Balances oil for clearer, settled skin',
    ],
    image: '/lag/lavender.png',
    accent: '#8b7bb0',
    tint: '#e3ddf0',
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    type: 'Hydrosol',
    size: '100 ml',
    essence: 'Grounding chandan — warmth, stillness, and old ceremony.',
    benefits: [
      'Grounds the senses with a soft, woody calm',
      'Cools and comforts sensitive skin',
      'Refines and mattifies a shine-prone complexion',
    ],
    image: '/lag/sandalwood.png',
    accent: '#a97c4e',
    tint: '#e9d9c1',
  },
  {
    id: 'helichrysum',
    name: 'Helichrysum',
    type: 'Hydrosol',
    size: '100 ml',
    essence: 'The “everlasting” flower — restorative and rare.',
    benefits: [
      'Supports the skin’s natural renewal',
      'Soothes and comforts stressed skin',
      'Revives tired, dull-looking complexions',
    ],
    image: '/lag/helichrysum.png',
    accent: '#bd9a3f',
    tint: '#ece0bd',
  },
  {
    id: 'neroli',
    name: 'Neroli',
    type: 'Hydrosol',
    size: '100 ml',
    essence: 'Orange blossom at first light — bright and lifting.',
    benefits: [
      'Brightens and refreshes a dull complexion',
      'Tones and tightens the look of pores',
      'Lifts the mood with a delicate citrus-floral',
    ],
    image: '/lag/neroli.png',
    accent: '#4f9a86',
    tint: '#cfe7de',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    type: 'Hydrosol',
    size: '100 ml',
    essence: 'Roasted warmth — an unexpected, energising ritual.',
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
    type: 'Hydrosol',
    size: '30 ml',
    essence: 'The fruit after the flower — nourishing and reviving.',
    benefits: [
      'Nourishes and revitalises the skin',
      'Supports suppleness and elasticity',
      'Brightens for a healthy, lit-from-within glow',
    ],
    image: '/lag/rosehip.png',
    accent: '#c97a70',
    tint: '#eecfc9',
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    type: 'Hydrosol',
    size: '50 ml',
    essence: 'Queen of the night — sensuous, comforting, unmistakable.',
    benefits: [
      'Hydrates while it softly scents the skin',
      'Comforts and balances the complexion',
      'Wraps the senses in a warm floral calm',
    ],
    image: '/lag/jasmine.png',
    accent: '#b0913f',
    tint: '#ece2cd',
  },
  {
    id: 'calendula',
    name: 'Calendula',
    type: 'Hydrosol',
    size: '30 ml',
    essence: 'Marigold water — the gentlest care for delicate skin.',
    benefits: [
      'Calms sensitive and reactive skin',
      'Soothes and comforts minor irritation',
      'Supports the skin’s natural recovery',
    ],
    image: '/lag/calendula.png',
    accent: '#d59a3f',
    tint: '#f0dcb2',
  },
]
