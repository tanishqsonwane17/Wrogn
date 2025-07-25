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
    img: 'https://m.media-amazon.com/images/I/61GpCQ5VZoL._UY1000_.jpg',
    name: 'Men’s Winter Mask',
    price: 999.00,
    lastPrice: 1799.00,
    id: nanoid(),
    collection: 'winter',
    availability: "outOfStock"
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
    img: 'https://images-fe.ssl-images-amazon.com/images/I/51Zesf+l1SL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
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
  },{
    img: 'https://img.joomcdn.net/35ebbcdd1d7f99c1e51eca648ea24de4b1298f01_original.jpeg',
    name: 'Womens Hoodie',
    price: 649.00,
    lastPrice: 1099.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  },
  {
    img: 'https://img.joomcdn.net/1113d387d797df7080dea8d943ee1eeb51e2d7d6_original.jpeg',
    name: 'Womens Hoodie',
    price: 1199.00,
    lastPrice: 1799.00,
    id: nanoid(),
    collection: 'winter',
    availability: "outOfStock"
  },{
    img: 'https://img.joomcdn.net/eba1b797c5dfa71322d0120212a46541d4a037a9_original.jpeg',
    name: 'Womens Hoodie',
    price: 1599.00,
    lastPrice: 2499.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  },
  {
    img: 'https://img.joomcdn.net/87d0d79542d5940a2fe85df53a3ed889154349d2_original.jpeg',
    name: 'Womens Hoodie',
    price: 1599.00,
    lastPrice: 2499.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
  },
 {
    img: 'https://img.joomcdn.net/835f632cce2ba687ccdb6ea3c29df007d4773805_original.jpeg',
    name: 'Womens Hoodie',
    price: 1599.00,
    lastPrice: 2499.00,
    id: nanoid(),
    collection: 'winter',
    availability: "inStock"
},

];

const Winter = () => {
  return (
    <div>Winter</div>
  )
}
export const WinterAssetsPreview = WinterAssets.slice(0, 6);
export default Winter