import React from 'react';
import { nanoid } from 'nanoid';

export const tshiritAssets = [
  {
    img: 'https://tshop.r10s.com/3a4/c55/8ea8/b4c4/00bb/cae0/fdf5/119becac9d0242ac110006.jpg?_ex=486x486',
     name: 'Snow White Tee',
    price: '749.00',
    lastPrice: '1499.00',
    id: nanoid(),
    collection: 'tshirt',
    availability: 'inStock',
    dateAdded: '2024-05-12',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThd1B9E4EfC5jV5Wsh0igK2M2tXdLLOi1TLRNQhOhHi_qgJWvHRvGZCauCws6x_D_SVqg&usqp=CAU',
      name: 'Sunset Orange Tee',
    price: '699.00',
    lastPrice: '1399.00',
    id: nanoid(),
    collection: 'tshirt',
    availability: 'outOfStock',
    dateAdded: '2024-04-28',
  },
  {
    img: 'https://tshop.r10s.com/dc4/ed6/f23f/46a4/8052/ca15/fde8/11ffecb3a50242ac110003.jpg?_ex=486x486',
 name: 'Faded AW Tee',
    price: '799.00',
    lastPrice: '1599.00',
    id: nanoid(),
    collection: 'tshirt',
    availability: 'inStock',
    dateAdded: '2024-05-10',
  },
  {
    img: 'https://tshop.r10s.com/294/778/efc2/923d/d095/0732/297a/1198eda7390242ac110002.jpg?_ex=486x486',
    name: 'Shadow Black Tee',
    price: '869.00',
    lastPrice: '1799.00',
    collection: 'tshirt',
    dateAdded: '2024-04-30',
    availability: 'inStock',
    id: nanoid(),
  },
  {
    img: 'https://tshop.r10s.com/294/778/efc2/923d/d095/0732/297a/1198eda7390242ac110002.jpg?_ex=486x486',
    name: 'Urban Black Tee',
    price: '759.00',
    lastPrice: '1499.00',
    collection: 'tshirt',
    dateAdded: '2024-05-08',
    availability: 'inStock',
    id: nanoid(),
  },
  {
    img: 'https://m.media-amazon.com/images/I/613FBfLWPLL._SX425_.jpg',
    name: 'Beige Vibe Tee',
    price: '899.00',
    lastPrice: '1899.00',
    collection: 'tshirt',
    dateAdded: '2024-05-07',
    availability: 'outOfStock',
    id: nanoid(),
  },
  {
    img: 'https://images.meesho.com/images/products/120199209/kqqkl_512.webp',
    name: 'Graphite Grey Tee',
    price: '709.00',
    lastPrice: '1399.00',
    collection: 'tshirt',
    dateAdded: '2024-05-06',
    availability: 'inStock',
    id: nanoid(),
  },
  {
    img: 'https://images.meesho.com/images/products/120199208/zsh5u_512.webp',
    name: 'Sky Blue Cool Tee', 
    price: '759.00',
    lastPrice: '1449.00',
    collection: 'tshirt',
    dateAdded: '2024-05-03',
    availability: 'inStock',
    id: nanoid(),
  },
  {
    img: 'https://chcekoszulki.pl/hpeciai/e91a6be19211b16ff1652078e9731b31/pol_pl_MESKI-T-SHIRT-KOSZULKA-ALAN-WALKER-FADED-1862_1.jpg',
    name: 'Nightshade Tee',
    price: '999.00',
    lastPrice: '1999.00',
    collection: 'tshirt',
    dateAdded: '2024-05-09',
    availability: 'outOfStock',
    id: nanoid(),
  },
];

const Tshirts = () => {
  return <div>Tshirts</div>;
};

export default Tshirts;
