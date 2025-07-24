import React from 'react'
import { nanoid } from 'nanoid'

export const WinterAssets = [
  {
    img: 'https://e.allegroimg.com/original/033569/03ec719142de82edd4275e6f4d9e/ALAN-WALKER-BLUZA-DAMSKA-FADED-roz-S',
    name: 'Women’s Hoodie',
    price: 1299.00,
    lastPrice: 2199.00,
    id: nanoid(),
    collection: 'winter',
    availability: "outOfStock"
  },
  {
    img: 'https://m.media-amazon.com/images/I/61MeF95xggL._UY1000_.jpg',
    name: 'Men’s Winter Mask',
    price: 999.00,
    lastPrice: 1799.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  },
  {
    img: 'https://i5.walmartimages.com/asr/b7a6be4a-2481-4186-8579-f5fc35e45a53.874c0eed2c420cdac9081c298a6df76e.jpeg',
    name: 'Driving Gloves',
    price: 649.00,
    lastPrice: 1099.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  },
  {
    img: 'https://img.tatacliq.com/images/i8/658Wx734H/MP000000015490572_658Wx734H_202211291211071.jpeg',
    name: 'Urban Air Mask',
    price: 1199.00,
    lastPrice: 1799.00,
    id: nanoid(),
    collection: 'winter',
    availability: "outOfStock"
  },
  {
    img: 'https://www.fitnesstotem.com/wp-content/uploads/2023/01/NJBW_Musician_Alan_Walker_Faded_Hoodie_01_v1_01.jpg',
    name: 'Alan Walker Hoodie',
    price: 1399.00,
    lastPrice: 2299.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0102/9157/6891/products/regnjakke_533x.jpg',
    name: 'Rain Jacket',
    price: 1599.00,
    lastPrice: 2499.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  }
];

const Winter = () => {
  return (
    <div>Winter</div>
  )
}

export default Winter