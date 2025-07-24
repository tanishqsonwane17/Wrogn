import React, { useState, useRef, useEffect } from 'react';
import { BsBag } from 'react-icons/bs';
import { CiMenuBurger, CiSearch } from 'react-icons/ci';
import { PiUserLight } from "react-icons/pi";
import Menu from './Menu';
import Magnet from '../components/Magnet';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ cartCount, setIsCartOpen, handleSearch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Black background overlay when dropdown is active */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className="fixed inset-0 bg-black opacity-30 z-40"
            onClick={() => setShowDropdown(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Menu blur overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-black opacity-40 z-40 pointer-events-none"></div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white z-50">
        <ul className="icon-nav h-12 md:h-10 flex justify-between items-end px-4 md:px-0 py-1 w-full">
          {/* Burger menu */}
          <li onClick={() => setShowMenu(true)} className="text-2xl cursor-pointer md:hidden">
            <CiMenuBurger />
          </li>

          {/* Logo */}
          <li className="h-full">
            <img
              className="h-11 w-10 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGR5Mu4e2bD3IfC5r0wT_olS2mh2fYFfLYtA&s"
              alt="Logo"
            />
          </li>

          {/* Center Nav */}
          <ul className="hidden md:flex gap-12 font-semibold text-md relative items-center">
            <li className="cursor-pointer relative text-sm" ref={dropdownRef}>
              <div
                id="collections-button"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                Collections <i className="ri-arrow-drop-down-line text-xl"></i>
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-14 left-0 bg-white shadow-md rounded-md py-4 px-4 z-50 space-y-2 w-50"
                  >
                    <Link to={'/product/new-arrivals'}><li className="hover:bg-gray-100 rounded-md py-1.5 cursor-pointer">New Arrivals</li></Link>
                    <li className="hover:bg-gray-100 rounded-md py-1.5 cursor-pointer">Tanks</li>
                    <li className="hover:bg-gray-100 rounded-md py-1.5 cursor-pointer">T-Shirt's</li>
                    <Link to={'/product/shoes'}><li className="hover:bg-gray-100 rounded-md py-1.5 cursor-pointer">Shoes</li></Link>
                    <Link to={'/product/masks'}><li className="hover:bg-gray-100 rounded-md py-1.5 cursor-pointer">Mask's</li></Link>
                    <Link to={'/product/shopAll'}><li className="hover:bg-gray-100 rounded-md py-1.5 cursor-pointer">Shop All</li></Link>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Links */}
            <Link to={'/'}><li className="cursor-pointer text-sm">Home</li></Link>
            <Link to={'/product/winter'}><li className="cursor-pointer text-sm">Winters</li></Link>
            <Link to={'/product/special-prices'}><li className="cursor-pointer text-sm">Special Prices</li></Link>
            <Link to={'/product/Accessories'}><li className="cursor-pointer text-sm">Accessories</li></Link>
            <Link to={'/contact-us'}><li className="cursor-pointer text-sm">Contact Us</li></Link>
          </ul>

          {/* Right Icons */}
          <div className="flex gap-4 md:gap-8 items-center">
            {/* Search Input */}
            <Magnet padding={50} magnetStrength={20} wrapperClassName="relative" innerClassName="transition-transform duration-300">
              <AnimatePresence>
                {showSearch ? (
                  <motion.li
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '200px', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden hidden md:block"
                  >
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch(searchTerm);
                          setShowSearch(false);
                          setSearchTerm('');
                        }
                      }}
                      autoFocus
                      placeholder="Search..."
                      className="px-4 py-1 border border-black rounded-md outline-none text-sm w-full"
                    />
                  </motion.li>
                ) : (
                  <li className="text-2xl cursor-pointer hidden md:block" onClick={() => setShowSearch(true)}>
                    <CiSearch className="text-[2.8vh]" />
                  </li>
                )}
              </AnimatePresence>
            </Magnet>

            {/* User Icon */}
            <Magnet padding={50} magnetStrength={20} wrapperClassName="relative" innerClassName="transition-transform duration-300">
              <li className="text-2xl cursor-pointer hidden md:block">
                <PiUserLight className="text-[2.8vh]" />
              </li>
            </Magnet>

            {/* Cart Icon */}
            <Magnet padding={50} magnetStrength={20} wrapperClassName="relative" innerClassName="transition-transform duration-300">
              <li
                className="text-2xl cursor-pointer relative"
                onClick={() => setIsCartOpen(true)}
              >
                <BsBag className="text-[2.8vh]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full px-1 text-xs">
                    {cartCount}
                  </span>
                )}
              </li>
            </Magnet>
          </div>
        </ul>
      </nav>

      {/* Slide Menu */}
      <Menu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Nav;
