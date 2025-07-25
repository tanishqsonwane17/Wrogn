import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Menu = ({ isOpen, onClose }) => {
  const panelRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(panelRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(panelRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power3.in"
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-0 left-0 w-full h-[80%] bg-white rounded-t-2xl shadow-lg p-4 z-50"
      style={{ transform: "translateY(100%)" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl border-b-1 p-1 border-black font-bold">Explore More</h2>
        <button onClick={onClose} className="text-xl font-bold h-8 w-8 bg-black rounded-full text-white font-mono">x</button>
      </div>

      <ul className="h-full w-full flex gap-1  flex-col">
        <li className="text-gray-800 text-xl font-bold active:bg-gray-200 rounded-md px-2 py-2">New Arrival's</li>
       <Link to={'/'}><li className="text-gray-800 text-xl font-bold active:bg-gray-200 rounded-md px-2 py-2">Home</li></Link>
       <Link to={'/product/winter'}><li className="text-gray-800 text-xl py-2 font-bold active:bg-gray-200 rounded-md px-2">Winter's</li></Link>
       <Link to={'/product/special-prices'}><li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Special price's</li></Link>
       <Link to={'/product/Accessories'}><li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Accessories</li></Link>
        <li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Tank's</li>
        <Link ><li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Tshirt's</li></Link>
        <Link to={'/product/shoes'}><li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Shoes</li></Link>
        <Link to={'/product/masks'}><li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Mask's</li></Link>
        <Link to={'/product/contact-us'}><li className="text-gray-800 text-xl active:bg-gray-200 rounded-md px-2 py-2 font-bold" >Contact us</li></Link>
      </ul>
    </div>
  );
};
export default Menu;
