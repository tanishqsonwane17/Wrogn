import React, {useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiDeleteBin6Line } from "react-icons/ri";
const CartDrawer = ({ isOpen, onClose, cartItems, setCartItems, setCartCount }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const removeFromCart = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    setCartCount(updated.length);
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 30, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ✅ BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ✅ CART DRAWER */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-12 md:top-20 md:right-5 max-h-screen  w-full md:w-[40%] bg-white z-[9999] shadow-lg rounded-xl"
          >
            <div className="flex flex-col max-h-screen overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center p-4">
                <h2 className="text-3xl font-bold uppercase" >Your Cart</h2>
                <button onClick={onClose}><IoMdClose size={24} /></button>
              </div>
              {/* Cart Items */}
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-4"
              >
                {cartItems.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.size}-${index}`}
                    variants={itemVariants}
                    className="flex gap-3 items-center hover:border rounded-lg p-3"
                  >
                    <img src={item.img} alt={item.name} className="w-26 h-26 
                    md:h-36 md:w-26 object-contain" />
                    <div className="flex-1">
                      <div className='md:flex items-center gap-8'>
                       <h3 className="font-semibold text-sm  md:text-2xl">{item.name}</h3>
                       <p className="md:text-md">Rs. {item.price}</p>
                      </div>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                   <div className="quantity mt-6">
                     <div className="py-3 w-32 md:w-28 border rounded-md flex justify-evenly items-center">
                       <i
                         onClick={() => {
                           const updatedItems = [...cartItems];
                           if (updatedItems[index].quantity > 1) {
                             updatedItems[index].quantity -= 1;
                             setCartItems(updatedItems);
                           }
                         }}
                         className="ri-subtract-line cursor-pointer"
                       ></i>
                       <span>{item.quantity}</span>
                       <i
                         onClick={() => {
                           const updatedItems = [...cartItems];
                           updatedItems[index].quantity += 1;
                           setCartItems(updatedItems);
                         }}
                         className="ri-add-line cursor-pointer"
                       ></i>
                     </div>
                   </div>

                    </div>  
                    <button
                      onClick={() => removeFromCart(index)}
                        className="group text-sm md:h-10 md:w-10 cursor-pointer hover:bg-black transition-all ease-in-out flex items-center justify-center rounded-full" > 
                    <RiDeleteBin6Line className="text-lg text-gray-800 group-hover:text-white" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <div className="p-4 flex flex-col gap-1 ">
              ---------------------------------------------------------------------------------------
                <div className='flex justify-between font-mono font-extralight text-sm px-4'>
                 <p className=" mb-2">subtotal</p>
                <p className='text-md text-neutral-700'>Rs. {total}.00</p>
                </div>
                <div className='px-5 flex justify-between text-2xl'>
                  <p className='text-black font-bold text- font-sans'>Total:</p>
                  <p className='text-black font-bold font-sans'>Rs. {total}.00</p>
                </div>
                <div className='flex justify-center items-center h-full w-full'>
               <Link
              to={'/users/login'}
              className="py-4 px-4 md:px-10 active:scale-40 bg-black text-white flex items-center cursor-pointer md:h-16 md:text-xl md:flex md:justify-center md:items-center md:w-[20vw] md:rounded-4xl rounded-lg text-xs font-bold font-mono border transition-all duration-500 ease-in-out">
                Buy Now
                <div className="flex gap-[1px] mx-2">
                  <img className="h-3 w-3  rounded-full object-cover" src="https://i.pinimg.com/736x/b2/e1/af/b2e1af76fbbe9bc446544b8fa71b37b1.jpg" alt="" />
                  <img className="h-3 w-3 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVO9LUWF81Ov6LZR50eDNu5rNFCpkn0LwYQ&s" alt="" />
                  <img className="h-3 w-3 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzgoGnOSSiaow6ecaZ7aUUVU6BcIIAW4p3Q&s" alt="" />
                </div>
              </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
