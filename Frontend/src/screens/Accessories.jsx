import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { essentials } from '../data/Essential';
import { PoloAssets } from '../data/Polo';
import { UpperSliderAssets } from '../data/UpperSlider';
import { WinterAssets } from '../data/Winter';
import {accessoriesAssets } from '../data/AccessoriesData';
import ProductList from '../components/ProductList';

const Accessories = ({ cartCount, setCartCount, setCartItems }) => {
    const allProducts = [
  ...essentials,
  ...PoloAssets,
  ...WinterAssets,
  ...UpperSliderAssets,
  ...accessoriesAssets
];

  return (
    <main className="w-full">
      <Nav cartCount={cartCount} />
      
<ProductList
  collectionName="accessories"
  headingText="Accessories"
  products={allProducts}
  cartCount={cartCount}
  setCartCount={setCartCount}
  setCartItems={setCartItems}
/>
      <Footer />
    </main>
  );
}

export default Accessories