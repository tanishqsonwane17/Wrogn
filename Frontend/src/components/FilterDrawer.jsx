// src/components/FilterDrawer.jsx

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from "react-icons/io";

const FilterDrawer = ({ isOpen, onClose, children }) => {
  // Disable background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center md:justify-start md:px-4 items-end bg-black/30 backdrop-blur-sm md:backdrop-blur-none">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-[20vw] bg-white max-h-[100vh] rounded-t-xl p-6 overflow-y-auto relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
            >
              <IoMdClose />
            </button>

            {/* Drawer Content */}
            <div className="mt-10">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FilterDrawer;
