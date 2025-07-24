import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { essentials } from '../data/Essential';
import { PoloAssets } from '../data/Polo';
import { UpperSliderAssets } from '../data/UpperSlider';
import { WinterAssets } from '../data/Winter';
import { tshiritAssets } from '../data/Tshirts';
import { specialPricesAssets } from '../data/SpecialAssets';
import ProductList from '../components/ProductList';
const allProducts = [
  ...essentials,
  ...PoloAssets,
  ...WinterAssets,
  ...UpperSliderAssets,
  ...tshiritAssets,
  ...specialPricesAssets
];

const SpecialPrize = ({ cartCount, setCartCount, setCartItems }) => {
  return (
    <main className="w-full">
      <Nav cartCount={cartCount} />
      
<ProductList
  collectionName="special prices"
  headingText="Special Prices"
  products={specialPricesAssets} // ✅ only special priced products
  cartCount={cartCount}
  setCartCount={setCartCount}
  setCartItems={setCartItems}
/>
      
      <Footer />
    </main>
  );
};

export default SpecialPrize;
