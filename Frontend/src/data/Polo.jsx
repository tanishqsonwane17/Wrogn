import React from 'react'
import { nanoid } from 'nanoid'

export const PoloAssets = [
  {
    img: 'https://www.ubuy.cr/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxMDJWUElNMUtMLl9TUzQwMF8uanBn.jpg',
    name: 'Dark Flux Hoodie for Girls',
    price: 799.00,
    lastPrice: 1899.00,
    id: nanoid(),
    color: 'black',
    type: 'tshirt',
    fit: 'oversized'
  },
  {
    id: nanoid(),
    img: 'https://m.media-amazon.com/images/I/71Yfrny-KiL._UY1000_.jpg',
    name: '	Obsidian Steel watch',
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
    img: 'https://www.thedota2store.com/wp-content/uploads/2023/12/Alan-Walker-Faded-Luminous-Pullover-Hoodie_1.webp',
    name: 'Mens Black Hoodie',
    price: 849.00,
    lastPrice: 1999.00,
    id: nanoid(),
    color: 'black',
    type: 'tshirt',
    fit: 'oversized'
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
    img: 'https://m.media-amazon.com/images/I/717zJ6Q805L._SL1500_.jpg',
    name: 'Black Oversized t-shirt',
    price: 749.00,
    lastPrice: 1699.00,
    id: nanoid(),
    color: 'black',
    type: 'tshirt',
    fit: 'oversized'
  },
  {
    img: 'https://img.joomcdn.net/d8e6d741626a2ca4912200a61851037d1ff03a3d_original.jpeg',
    name: 'Shadow Fade Hoode',
    price: 679.00,
    lastPrice: 1599.00,
    id: nanoid(),
    color: 'black',
    type: 'tshirt',
    fit: 'oversized'
  }
];

const Polo = () => {
  return <div>Polo</div>;
};

export default Polo;
