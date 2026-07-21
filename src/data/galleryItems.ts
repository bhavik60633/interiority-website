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
]
