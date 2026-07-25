import crystalLamp from '../assets/crystal-lamp.png'
import leatherHolder from '../assets/leather-holder.png'
import bathroomAmenities from '../assets/bathroom-amenities.png'
import leatherTray from '../assets/leather-tray.png'
import hotelLobby from '../assets/hotel-lobby.png'
import glassware from '../assets/glassware.png'
import floralArrangement from '../assets/floral-arrangement.png'
import bathroomSet from '../assets/bathroom-set.png'
import coverTablescape from '../assets/new/cover-tablescape.jpg'
import vaseAmberGold from '../assets/new/vase-amber-gold.jpg'
import vaseGreenGlass from '../assets/new/vase-green-glass.jpg'
import wallArtBirds from '../assets/new/wall-art-birds.jpg'
import candleStandFlower from '../assets/new/candle-stand-flower.jpg'
import vasePinkCrystalPair from '../assets/new/vase-pink-crystal-pair.jpg'
import vignetteAmberJars from '../assets/new/vignette-amber-jars.jpg'
import traySilverBowlMug from '../assets/new/tray-silver-bowl-mug.jpg'
import organizerJewelryBox from '../assets/new/organizer-jewelry-box.jpg'
import bowlGlassPotpourri from '../assets/new/bowl-glass-potpourri.jpg'

export interface GalleryItem {
  title: string
  category: string
  material: string
  photo: string
}

export const galleryItems: GalleryItem[] = [
  { title: 'Crystal Lamp', category: 'Guest Suite Lighting', material: 'GLASS', photo: crystalLamp },
  { title: 'Leather Paper Holder', category: 'Room Desk Accessory', material: 'LEATHER', photo: leatherHolder },
  { title: 'Amber Amenities', category: 'Bathroom Ritual Set', material: 'STONE', photo: bathroomAmenities },
  { title: 'Serving Tray', category: 'Lounge Accessory', material: 'LEATHER', photo: leatherTray },
  { title: 'Hotel Lobby', category: 'Spatial Design', material: 'MARBLE', photo: hotelLobby },
  { title: 'Glassware Set', category: 'Tabletop Styling', material: 'CRYSTAL', photo: glassware },
  { title: 'Floral Console', category: 'Arrival Experience', material: 'BRASS', photo: floralArrangement },
  { title: 'Bathroom Set', category: 'Vanity Accessories', material: 'STONE', photo: bathroomSet },
  { title: 'Five-Star Suite', category: 'Interior Styling', material: 'LINEN', photo: coverTablescape },
  { title: 'Artisan Vase', category: 'Decorative Object', material: 'GLASS AND METAL', photo: vaseAmberGold },
  { title: 'Emerald Vase', category: 'Decorative Object', material: 'GLASS', photo: vaseGreenGlass },
  { title: 'Swallows Wall Mural', category: 'Metal Wall Décor', material: 'BRASS', photo: wallArtBirds },
  { title: 'Bloom Candle Stand', category: 'Tabletop Accent', material: 'BRASS', photo: candleStandFlower },
  { title: 'Crystal Vase Pair', category: 'Arrival Styling', material: 'CRYSTAL', photo: vasePinkCrystalPair },
  { title: 'Amber Storage Jars', category: 'Vanity Vignette', material: 'GLASS', photo: vignetteAmberJars },
  { title: 'Serving Ensemble', category: 'Lounge Accessory', material: 'LEATHER', photo: traySilverBowlMug },
  { title: 'Vanity Organiser', category: 'Bedside Essential', material: 'LEATHER', photo: organizerJewelryBox },
  { title: 'Potpourri Bowl', category: 'Fragrance Accent', material: 'GLASS', photo: bowlGlassPotpourri },
]
