import React from "react";
import { ProductCard } from "../screens/Home";
import "../App.css";

const ProductSlider = ({ data, direction = "left", setCartCount, setCartItems }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className={`slider-track ${direction === "left" ? "scroll-left" : "scroll-right"} gap-2`}>
        {[...data, ...data].map((item, index) => (
        <ProductCard
          key={index}
          item={item}
          setCartCount={setCartCount}
          setCartItems={setCartItems}
          small={true} // 👈 Add this!
        />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
