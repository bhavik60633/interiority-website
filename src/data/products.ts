import organizerJewelryBox from '../assets/new/organizer-jewelry-box.jpg'
import leatherStorageSet from '../assets/new/leather-storage-set.jpg'
import tissueTrays from '../assets/new/category-tissue-trays.jpg'
import vaseGreenGlass from '../assets/new/vase-green-glass.jpg'
import traySilverBowlMug from '../assets/new/tray-silver-bowl-mug.jpg'
import artisanVase from '../assets/artisan-vase.png'
import candleStandFlower from '../assets/new/candle-stand-flower.jpg'
import metalMurals from '../assets/new/category-metal-murals.jpg'
import essentials from '../assets/new/category-essentials.jpg'
import leatheriteFurniture from '../assets/new/category-leatherite-furniture.jpg'
import vasesUrnsBowls from '../assets/new/category-vases-urns-bowls.jpg'

export interface Product {
  title: string
  material: string
  img: string
}

export const products: Product[] = [
  { title: 'Leather Paper Holders', material: 'LEATHER', img: organizerJewelryBox },
  { title: 'Amenity Boxes', material: 'LEATHER', img: leatherStorageSet },
  { title: 'Bathroom Accessory Sets', material: 'MARBLE & LEATHER', img: tissueTrays },
  { title: 'Glassware', material: 'CRYSTAL', img: vaseGreenGlass },
  { title: 'Trays', material: 'LEATHER', img: traySilverBowlMug },
  { title: 'Vases & Bowls', material: 'TERRACOTTA', img: artisanVase },
  { title: 'Lamps & Candle Stands', material: 'GLASS & BRASS', img: candleStandFlower },
  { title: 'Decorative Accents', material: 'BRASS', img: metalMurals },
  { title: 'Watch Box', material: 'MIXED', img: essentials },
  { title: 'Waste Bin', material: 'LEATHER', img: leatheriteFurniture },
  { title: 'Drinkware', material: 'CRYSTAL', img: vasesUrnsBowls },
]

/*
  Not yet added, no product photography supplied for these categories:
  Diffusers, Ceramic Planters, Laundry Bags. Add once photos are available.
*/
