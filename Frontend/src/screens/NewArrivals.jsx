import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { WinterAssets } from '../data/Winter';
import { ProductCard } from './Home';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { essentials } from '../data/Essential';
import { PoloAssets } from '../data/Polo';
import { UpperSliderAssets } from '../data/UpperSlider';
import FilterDrawer from '../components/FilterDrawer';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { NewArrivalsAssets } from '../data/NewArrivalData';
gsap.registerPlugin(ScrollTrigger);

// Animation Variants
const headingParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    }
  }
};

const letterVariant = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

const WinterPage = ({ cartCount, setCartCount, setCartItems }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  const options = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old"
  ];

  const allProducts = [...essentials, ...PoloAssets, ...WinterAssets, ...UpperSliderAssets];

let filteredProducts = NewArrivalsAssets.slice();

if (inStock && !outOfStock) {
  filteredProducts = filteredProducts.filter(item => item.availability === "inStock");
} else if (!inStock && outOfStock) {
  filteredProducts = filteredProducts.filter(item => item.availability === "outOfStock");
}

switch (selectedOption) {
  case "Alphabetically, A-Z":
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    break;
  case "Alphabetically, Z-A":
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    break;
  case "Price, low to high":
    filteredProducts.sort((a, b) => a.price - b.price);
    break;
  case "Price, high to low":
    filteredProducts.sort((a, b) => b.price - a.price);
    break;
  case "Date, old to new":
    filteredProducts.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    break;
  case "Date, new to old":
    filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    break;
  default:
    break;
}

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, duration: 1.2 });
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <motion.main
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

      {/* Heading - only visible when filter is closed */}
      {!showFilter && (
        <div className="w-full px-3 mb-4 mt-20 flex justify-center items-center overflow-hidden">
          <motion.h1
            variants={headingParent}
            initial="hidden"
            animate="visible"
            className="text-4xl tracking-wide mt-12 md:text-[4vw] font-semibold uppercase text-gray-800 flex flex-wrap"
            style={{ fontFamily: 'walkerBold' }}
          >
            {"New - Arrival's".split('').map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      )}

      {/* Filter Button */}
      <div className="h-full w-full px-24">
        <button
          onClick={() => setShowFilter(prev => !prev)}
          className="px-8 text-sm py-2 cursor-pointer border rounded-4xl flex gap-2 items-center"
        >
          <span className="text-xs text-gray-800">
            <FaArrowRightArrowLeft />
          </span>
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Drawer */}
      <FilterDrawer isOpen={showFilter} onClose={() => setShowFilter(false)}>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-lg text-gray-800">Sort By</h3>
          <div className="flex flex-col gap-3 font-extralight text-sm font-mono">
            {options.map((option, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sortOption"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="appearance-none h-4 w-4 border border-black rounded-sm transition-all duration-300 checked:bg-black"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-lg text-gray-800">Availability</h3>
          <div className="flex flex-col gap-2 textm-md font-semibold">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
                className="accent-black"
              />
              In Stock
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={outOfStock}
                onChange={(e) => setOutOfStock(e.target.checked)}
                className="accent-black"
              />
              Out of Stock
            </label>
          </div>
        </div>
      </FilterDrawer>

      {/* Product Grid */}
<motion.div
className="px-3 py-6 mb-16 flex flex-wrap justify-center gap-x-4 gap-y-6 transition-all duration-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            setCartCount={setCartCount}
            setCartItems={setCartItems}
          />
        ))}
      </motion.div>

      <Footer />
    </motion.main>
  );
};

export default WinterPage;
