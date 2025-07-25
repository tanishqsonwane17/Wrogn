import React from 'react'
import { nanoid } from "nanoid";

export const accessoriesAssets = [
  // 🎒 Bags
  {
    id: nanoid(),
    img: 'https://www.symbios.pk/image/cache/data/impload/alan_walker_printed_keychain2-500x500.JPG',
    name: 'ShadowEdge Urban Backpack',
    price: '1199.00',
    lastPrice: '2299.00',
    collection: 'accessories',
    category: 'Bags',
    color: 'Charcoal Grey',
    type: 'Backpack',
    neckline: 'None',
    fit: 'Compact Fit',
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/71Yfrny-KiL._UY1000_.jpg',
    name: 'Watch',
    price: '1299.00',
    lastPrice: '2499.00',
    collection: 'accessories',
    category: 'Bags',
    color: 'Matte Black',
    type: 'Tote Bag',
    neckline: 'None',
    fit: 'Oversized',
  },
  {
    id: nanoid(),
    img: 'https://images-na.ssl-images-amazon.com/images/I/31gw7W0awNL.jpg',
    name: 'cosplay',
    price: '699.00',
    lastPrice: '1499.00',
    collection: 'accessories',
    category: 'Bags',
    color: 'Midnight Blue',
    type: 'Drawstring Bag',
    neckline: 'None',
    fit: 'Standard',
  },

  // 💍 Jewelry
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/51J5MlycpJL.jpg',
    name: 'Forged Steel Pendant',
    price: '499.00',
    lastPrice: '899.00',
    collection: 'accessories',
    category: 'Jewelry',
    color: 'Gunmetal Grey',
    type: 'Pendant',
    neckline: 'Round',
    fit: 'Adjustable',
  },
  {
    id: nanoid(),
    img: 'https://store.alanwalker.com/cdn/shop/products/BLUEPIN_533x.jpg?v\u003d1632486092',
    name: 'Lunar Crest Medallion',
    price: '599.00',
    lastPrice: '1099.00',
    collection: 'accessories',
    category: 'Jewelry',
    color: 'Silver',
    type: 'Medallion Necklace',
    neckline: 'Round',
    fit: 'Standard',
  },
  {
    id: nanoid(),
    img: 'https://media.karousell.com/media/photos/products/2024/3/17/_alanwalker__dj_4_1710694878_e516eeaa_progressive.jpg',
    name: 'Walker Signature Ring',
    price: '399.00',
    lastPrice: '799.00',
    collection: 'accessories',
    category: 'Jewelry',
    color: 'Black',
    type: 'Ring',
    neckline: 'None',
    fit: 'Free Size',
  },

  // 🔑 Keychains
  {
    id: nanoid(),
    img: 'https://store.alanwalker.com/cdn/shop/files/Produkt_11-2_533x.png?v=1713944246',
    name: 'W Emblem Metal Keychain',
    price: '349.00',
    lastPrice: '699.00',
    collection: 'accessories',
    category: 'Keychains',
    color: 'Silver',
    type: 'Keychain',
    neckline: 'None',
    fit: 'One Size',
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/51I2Bzms9qL._UY1000_.jpg',
    name: 'Minimal Loop Keychain',
    price: '299.00',
    lastPrice: '649.00',
    collection: 'accessories',
    category: 'Keychains',
    color: 'Black',
    type: 'Loop Keychain',
    neckline: 'None',
    fit: 'One Size',
  },

  // 😷 Face Accessories
  {
    id: nanoid(),
    img: 'https://tshop.r10s.com/294/778/efc2/923d/d095/0732/297a/1198eda7390242ac110002.jpg?_ex=486x486',
    name: 'StormShield Face Mask',
    price: '349.00',
    lastPrice: '799.00',
    collection: 'accessories',
    category: 'Face Accessories',
    color: 'Grey',
    type: 'Face Mask',
    neckline: 'Elastic',
    fit: 'Snug Fit',
  },
  {
    id: nanoid(),
    img: 'https://img.tatacliq.com/images/i8/658Wx734H/MP000000015490572_658Wx734H_202211291211071.jpeg',
    name: 'UrbanGuard Anti-Pollution Mask',
    price: '599.00',
    lastPrice: '1299.00',
    collection: 'accessories',
    category: 'Face Accessories',
    color: 'Black',
    type: 'Pollution Mask',
    neckline: 'Elastic',
    fit: 'Comfort Fit',
  },
  {
    id: nanoid(),
    img: 'https://img.joomcdn.net/a39524bd3c79af10d2d2647a36251a2208be5a45_original.jpeg',
    name: 'Black Bag Pack',
    price: '899.00',
    lastPrice: '1699.00',
    collection: 'accessories',
    category: 'Face Accessories',
    color: 'Black & White',
    type: 'Mask & Glove Combo',
    neckline: 'Elastic',
    fit: 'Adjustable',
  },

  {
    id: nanoid(),
    img: 'https://img.joomcdn.net/1a2216d3d238484b797732af28c9f05c8979456f_original.jpeg',
    name: 'Pink Bag Pack',
    price: '499.00',
    lastPrice: '999.00',
    collection: 'accessories',
    category: 'Wearables',
    color: 'Black',
    type: 'Cap',
    neckline: 'None',
    fit: 'Adjustable',
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/51OAyXhrQLL.jpg',
    name: 'ChronoMax Men\'s Watch',
    price: '1499.00',
    lastPrice: '2999.00',
    collection: 'accessories',
    category: 'Wearables',
    color: 'Black & Gold',
    type: 'Analog Watch',
    neckline: 'None',
    fit: 'Universal Fit',
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/61mtCzmFBuL._UF1000,1000_QL80_.jpg',
    name: 'Walker Pro Wrist Band',
    price: '599.00',
    lastPrice: '1199.00',
    collection: 'accessories',
    category: 'Wearables',
    color: 'Charcoal',
    type: 'Wrist Band',
    neckline: 'None',
    fit: 'Stretch Fit',
  },
  {
    id: nanoid(),
    img: 'https://ih1.redbubble.net/image.5778562155.6931/scarf,x630-pad,600x600,f8f8f8.jpg',
    name: 'VelvoWrap Designer Scarf',
    price: '699.00',
    lastPrice: '1299.00',
    collection: 'accessories',
    category: 'Wearables',
    color: 'Grey & Black',
    type: 'Scarf',
    neckline: 'Wrap',
    fit: 'Free Size',
  },
];

const AccessoriesData = () => {
  return (
    <div>AccessoriesData</div>
  )
}

export default AccessoriesData