import React from "react";
import { ProductCard } from "../screens/Home";
import "../App.css";

const ProductSlider = ({ data, direction = "left" }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`slider-track ${direction === "left" ? "scroll-left" : "scroll-right"} gap-3`}
      >
        {[...data, ...data].map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
