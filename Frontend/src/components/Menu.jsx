import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const Menu = ({ isOpen, onClose }) => {
  const panelRef = useRef();
  const [showCollections, setShowCollections] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.to(panelRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(panelRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
      setShowCollections(false); // reset on close
    }
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-0 left-0 w-full h-[80%] bg-white rounded-t-2xl shadow-lg p-4 z-50 overflow-hidden"
      style={{ transform: "translateY(100%)" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl border-b-1 p-1 border-black font-bold">Explore More</h2>
        <button
          onClick={onClose}
          className="text-xl font-bold h-8 w-8 bg-black rounded-full text-white font-mono"
        >
          x
        </button>
      </div>

      <div className="relative w-full h-full">
        {/* Main Menu */}
        <AnimatePresence>
          {!showCollections && (
            <motion.ul
              key="main"
              initial={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col gap-2"
            >
              <li
                className="text-xl font-bold px-2 py-2 rounded-md bg-gray-100 cursor-pointer"
                onClick={() => setShowCollections(true)}
              >
                Collections
              </li>
              <Link to="/"><li className="text-xl font-bold px-2 py-2">Home</li></Link>
              <Link to="/product/new-arrivals"><li className="text-xl font-bold px-2 py-2">New Arrival's</li></Link>
              <Link to="/contact-us"><li className="text-xl font-bold px-2 py-2">Contact Us</li></Link>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Collections Submenu */}
        <AnimatePresence>
          {showCollections && (
            <motion.ul
              key="collections"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col gap-2"
            >
              <li
                className="text-md text-blue-500 cursor-pointer px-2"
                onClick={() => setShowCollections(false)}
              >
                ← Back
              </li>
              <Link to="/product/winter"><li className="text-xl font-bold px-2 py-2">Winter's</li></Link>
              <Link to="/product/special-prices"><li className="text-xl font-bold px-2 py-2">Special Prices</li></Link>
              <Link to="/product/Accessories"><li className="text-xl font-bold px-2 py-2">Accessories</li></Link>
              <Link to="/product/shoes"><li className="text-xl font-bold px-2 py-2">Shoes</li></Link>
              <Link to="/product/masks"><li className="text-xl font-bold px-2 py-2">Mask's</li></Link>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
