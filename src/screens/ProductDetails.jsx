import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { essentials } from '../data/Essential';
import { PoloAssets } from '../data/Polo';
import { WinterAssets } from '../data/Winter';
import { UpperSliderAssets } from '../data/UpperSlider';
import CartDrawer from '../components/CartDrawer';
import { accessoriesAssets, } from '../data/AccessoriesData';
import { specialPricesAssets } from '../data/SpecialAssets';
import { NewArrivalsAssets } from '../data/NewArrivalData';
import { MaskAssets } from '../data/Masks';
import Slider from 'react-slick';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import MagnetButtons from '../components/MagnetButtons';
import '../App.css'
import { LowerSliderAssets } from '../data/LowerSlider';

const ProductDetails = ({ setCartCount, cartCount, cartItems, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);  // ✅ local state
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(() => {
    return localStorage.getItem(`selectedSize-${id}`) || 'S';
  });
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const allProducts = [...essentials, ...PoloAssets, ...WinterAssets, ...UpperSliderAssets, ...accessoriesAssets, ...specialPricesAssets, ...LowerSliderAssets, ...NewArrivalsAssets, ...MaskAssets];
  const product = allProducts.find((item) => item.id === id);

  useEffect(() => {
    if (!product) navigate('/');
    setAnimateIn(true);
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product) return null;

  const toggleDescription = () => setIsOpen(!isOpen);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="group absolute right-[65%] md:right-[75%] rotate-180 -bottom-18 transform -translate-y-1/2 z-10 cursor-pointer p-4 scale-125"
  >
<svg 
  width="60"
  height="24"
  viewBox="0 0 37 14"
  fill="none"
  className="transition-all duration-300 group-hover:scale-110 w-[40px] md:w-[60px]"
>
      <path
        d="M16.4075 6.70996L5.02014 6.70996C2.72077 6.70996 0.859376 4.84857 0.859376 2.54921C0.859376 0.789845"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8398 1.12561L16.4084 6.70978L10.8398 12.2783"
        className="tail-path-prev"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="group absolute -bottom-18 left-[65%] md:left-[65%] transform -translate-y-1/2 z-10 cursor-pointer p-4 scale-125"
  >
    <svg
      width="40"
      height="20"
      viewBox="0 0 37 14"
      strokeWidth=".4"
      fill="none"
      className="transition-all duration-300 group-hover:scale-110 rotate-180 md:w-60"
    >
      <path
        d="M20.5925 6.70996H31.9799C34.2792 6.70996 36.1406 4.84857 36.1406 2.54921C36.1406 0.789845"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.1602 1.12561L19.5916 6.70978L25.1602 12.2783"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

  return (
    <>
<Nav
  cartCount={cartCount}
  setCartCount={setCartCount}
  setIsCartOpen={setIsCartOpen} // ✅ ADD THIS
/>

      <div
        className={`transition-all duration-700 transform ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="p-4 pt-20 flex flex-col md:flex-row gap-6 justify-center items-start">
          <div className="w-full md:w-1/2">
            <Slider {...sliderSettings}>
              <div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg mx-auto"
                />
              </div>
              <div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg mx-auto"
                />
              </div>
            </Slider>
          </div>

          {/* Info Section */}
          <div className="w-full px-2 md:w-[35vw] md:px-12 md:shadow-2xl rounded-xl md:py-1">
            <h1 className="text-4xl md:text-5xl font-semibold mt-16">{product.name}</h1>

            <div className="flex gap-2 items-center">
              <span>⭐️⭐️⭐️⭐️</span>
              <div className="flex items-center gap-1">
                <span className="text-gray-400 text-md">4</span>
                <span className="text-gray-400 text-sm">(5)</span>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-lg mt-3 md:mt-8 md:text-[4vh] md:font-extralight font-mono md:tracking-wider">
                ₹{product.price}
              </p>
              <p className="text-sm line-through text-gray-500 md:mt-8 font-mono md:text-xl">
                ₹{product.lastPrice}
              </p>
            </div>

            <p className="text-gray-400 text-xs font-mono md:text-md md:text-black">
              Tax included. Shipping calculated at checkout.
            </p>
            <p className="text-[10px] text-gray-500 font-mono mt-1 md:text-[2vh] md:text-black">
              PAY NOW & Get 10% Extra Off + Fast shipping (On Orders Above ₹1200)
            </p>

            <div className="flex gap-1 h-12 w-full items-center">
              <i className="ri-send-plane-line text-black text-sm"></i>
              <Link to="/product/sizeChart" className="text-xs underline md:text-md">
                Size Chart
              </Link>
            </div>

            {/* Sizes */}
            <div className="mt-4">
              <h6 className="font-bold mb-2">Size</h6>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <MagnetButtons
                    key={size}
                    id={id}
                    size={size}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    disabled={false} // Change to true for out-of-stock sizes
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="quantity mt-6">
              <h5>Quantity</h5>
              <div className="py-3 w-32 border rounded-md flex justify-evenly items-center">
                <i
                  onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                  className="ri-subtract-line cursor-pointer"
                ></i>
                <span>{count}</span>
                <i
                  onClick={() => setCount((prev) => prev + 1)}
                  className="ri-add-line cursor-pointer"
                ></i>
              </div>
            </div>

            {/* Add to Cart + Buy Now */}
            <div className="flex justify-between mt-6">
                 <button
onClick={() => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Please login to add items to cart!");
    navigate("/users/login");
    return;
  }

  setLoading(true);
  setTimeout(() => {
    setCartCount((prev) => {
      const updatedCount = prev + count;
      localStorage.setItem(`cartCount-${userId}`, updatedCount);
      return updatedCount;
    });

    setCartItems((prevItems) => {
      const updatedItems = [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          img: product.img,
          price: product.price,
          size: selectedSize,
          quantity: count,
        },
      ];
      localStorage.setItem(`cartItems-${userId}`, JSON.stringify(updatedItems));
      return updatedItems;
    });

    setIsClicked(true);
    setIsCartOpen(true);
    setLoading(false);

    if (window.innerWidth < 768) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    setTimeout(() => setIsClicked(false), 200);
  }, 1000);
}}
                   disabled={loading}
                   className={`py-4 px-4 md:px-14 cursor-pointer hover:bg-[#dbe112] md:hover:text-black hover:border-amber-200 md:h-14 md:text-base md:rounded-4xl rounded-lg text-xs font-bold font-mono border transition-all duration-500 ease-in-out ${
                     isClicked ? 'bg-black text-white' : 'bg-white text-black'
                   } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                 >
                   {loading ? (
                     <div className="flex items-center gap-2">
                       <i className="ri-loader-4-line animate-spin"></i> Adding...
                     </div>
                   ) : (
                     'Add to Cart'
                   )}
                 </button>
                  
                  <Link to={'/users/login'}>
                                <button
              className="py-4 px-4 md:px-10 active:scale-40 bg-black text-white flex items-center cursor-pointer md:h-14 md:text-base md:rounded-4xl rounded-lg text-xs font-bold font-mono border transition-all duration-500 ease-in-out">
                Buy Now
                <div className="flex gap-[1px] mx-2">
                  <img className="h-3 w-3  rounded-full object-cover" src="https://i.pinimg.com/736x/b2/e1/af/b2e1af76fbbe9bc446544b8fa71b37b1.jpg" alt="" />
                  <img className="h-3 w-3 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVO9LUWF81Ov6LZR50eDNu5rNFCpkn0LwYQ&s" alt="" />
                  <img className="h-3 w-3 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzgoGnOSSiaow6ecaZ7aUUVU6BcIIAW4p3Q&s" alt="" />
                </div>
              </button></Link>
            </div>
            {/* Description */}
            <div className="mt-4 border border-gray-200 rounded-md overflow-hidden">
              <div
                onClick={toggleDescription}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-white"
              >
                <h4 className="font-semibold">Description</h4>
                <i
                  className={`ri-arrow-down-wide-fill text-xl transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                ></i>
              </div>

              <div
                className={`transition-all duration-300 px-4 bg-white ${
                  isOpen ? 'max-h-[800px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                } overflow-hidden`}
              >
                <h1 className="text-md uppercase font-semibold tracking-wider mb-2">
                  Product Details
                </h1>
                <ul className="text-xs leading-5 list-disc pl-4">
                  <li>Country of Origin: INDIA</li>
                  <li>Composition: 100% Terry Cotton</li>
                  <li>GSM: 240</li>
                  <li>Color: {product.color}</li>
                  <li>Type: {product.type}</li>
                  <li>Neckline: {product.neckline}</li>
                  <li>Fit: {product.fit}</li>
                </ul>
                <h1 className="text-sm font-semibold tracking-wider mt-4 mb-2">
                  LITTLE THINGS THAT MATTER MUCH
                </h1>
                <ul className="text-xs leading-5 list-disc pl-4">
                  <li>Colours may slightly vary due to photographic lighting sources.</li>
                  <li>Product specifications may vary by +/- 10%.</li>
                  <li>Refer to the size chart before purchase.</li>
                  <li>Size variance: maximum +/- 0.5 inches.</li>
                  <li>See the return and exchange policy page for details.</li>
                  <li>
                    For help, email <b>Bixi@gmail.com</b> or WhatsApp <b>+91 8641069313</b>.
                  </li>
                  <li>NOTE: Machine wash only. Do not iron directly on print.</li>
                </ul>
              </div>
              <hr className="border-t border-gray-300" />
            </div>
          </div>
        </div>
        <Footer />
        
    {/* 👇 YAHI USE KARNA HAI CartDrawer */}
    <CartDrawer
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setCartCount={setCartCount}
    />
      </div>
    </>
  );
};

export default ProductDetails;
