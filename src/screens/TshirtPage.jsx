import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { essentials } from '../data/Essential';
import { PoloAssets } from '../data/Polo';
import { UpperSliderAssets } from '../data/UpperSlider';
import { WinterAssets } from '../data/Winter';
import { tshiritAssets } from '../data/Tshirts';
import ProductList from '../components/ProductList';
const allProducts = [
  ...essentials,
  ...PoloAssets,
  ...WinterAssets,
  ...UpperSliderAssets,
  ...tshiritAssets
];

const TShirtPage = ({ cartCount, setCartCount, setCartItems }) => {
  return (
    <main className="w-full">
      <Nav cartCount={cartCount} />
      
      <ProductList
        collectionName="tshirt"
        headingText="T-Shirt"
        products={allProducts}
        cartCount={cartCount}
        setCartCount={setCartCount}
        setCartItems={setCartItems}
      />
      
      <Footer />
    </main>
  );
};

export default TShirtPage;
