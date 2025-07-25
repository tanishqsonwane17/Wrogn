import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { UpperSliderAssets } from "../data/UpperSlider";
import { essentials } from "../data/Essential";
import { PoloAssets } from "../data/Polo";
import { WinterAssets } from "../data/Winter";
import { specialPricesAssets } from "../data/SpecialAssets";
import { LowerSliderAssets } from "../data/LowerSlider";
import { MaskAssets } from "../data/Masks";
import { NewArrivalsAssets } from "../data/NewArrivalData";
import Drag from "../components/Drag";
import ProductSlider from "../components/ProductSlider";
import BottomPanel from "../components/Menu";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import MagnetButtons from "../components/MagnetButtons";
gsap.registerPlugin(ScrollTrigger);
const Aw1 = "/images/walker2.png";
const Aw2 = "/images/walker1.png";
const walkerMask = "/images/walkerMask1.png";
const blue1 = "/images/blue1.png";
const red1 = "/images/red1.png";
const red2 = "/images/red2.png";
const bgvideo = "/videos/bgvideo.mp4";
export const ProductCard = ({ item, setCartCount, setCartItems, small }) => {
  const cardRef = useRef(null);

  const [selectedSize, setSelectedSize] = useState(() => {
    return localStorage.getItem(`selectedSize-${item.id}`) || "S";
  });
  const navigate = useNavigate();
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const unavailableSizes = ["XL", "XXL"];

  useEffect(() => {
    const element = cardRef.current;

    const anim = gsap.fromTo(
      element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    return () => {
      anim.scrollTrigger && anim.scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(`/product/${item.id}`)}
      className={`card group rounded-lg border overflow-hidden border-gray-500 shadow-md cursor-pointer relative transition-all duration-300 ${
        small ? "w-[150px] md:w-[230px]" : "w-[44.4vw] md:w-[50vw] lg:w-[28vw]"
      }`}
    >
      <div
        className={`relative w-full flex justify-center items-center overflow-hidden ${
          small ? "h-[180px]" : "md:h-[55vh] lg:h-[70vh]"
        }`}
      >
        <img
          className={`object-contain transition-transform duration-500 ease-in-out ${
            small ? "h-[150px]" : "h-full md:group-hover:scale-110"
          }`}
          src={item.img}
          alt={item.name}
        />
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-[#ffffffec] px-4 py-6 rounded-t-md z-20">
          <h5 className="text-md font-bold">Size</h5>
          <div className="flex gap-2 flex-wrap mt-2 overflow-hidden">
            {sizes.map((size) => (
              <MagnetButtons
                key={size}
                id={item.id}
                size={size}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                disabled={unavailableSizes.includes(size)}
                className="pointer-events-auto"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bottomText flex justify-center gap-1 flex-col px-4 py-2 z-10">
        <h5 className="font-mono text-sm tracking-wider">{item.name}</h5>
        <div className="h-full w-full md:flex items-center gap-2">
          <h6 className="font-mono text-sm font-bold">Rs.{item.price}</h6>
          <h6 className="text-sm text-gray-500 font-mono line-through">
            Rs.{item.lastPrice}
          </h6>
          <div className="flex h-full w-full justify-end relative">
            <div className="h-11 w-11 bottom-2.5 absolute z-50 bg-black flex justify-center items-center rounded-full   -right-16 group-hover:right-2 transition-all duration-500 ease-in-out">
              <IoBagOutline
                onClick={(e) => {
                  e.stopPropagation();

                  const userId = localStorage.getItem("userId"); // ✅ check login

                  if (!userId) {
                    alert("Please login to add items to cart!");
                    navigate("/users/login"); // ✅ navigate to login
                    return;
                  }
                  setCartCount((prev) => {
                    const updatedCount = prev + 1;
                    localStorage.setItem(`cartCount-${userId}`, updatedCount);
                    return updatedCount;
                  });

                  setCartItems((prev) => {
                    const updatedCart = [
                      ...prev,
                      {
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        price: item.price,
                        size: selectedSize,
                        quantity: 1,
                      },
                    ];

                    localStorage.setItem(
                      `cartItems-${userId}`,
                      JSON.stringify(updatedCart)
                    );
                    return updatedCart;
                  });
                }}
                className="text-white text-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, data, highlight, setCartCount, setCartItems }) => (
  <>
    <div className="heading w-full flex justify-center items-center">
      <h1
        className="text-[8.5vw] md:text-[3.5vw] font-semibold text-center"
        style={{ fontFamily: "walkerBold" }}
      >
        {highlight ? (
          <>
            <span
              className="font-bold font-mono uppercase "
              style={{ fontFamily: "walkerBold" }}
            >
              {highlight}
            </span>
            <span
              className="text-yellow-500 tracking-wide"
              style={{ fontFamily: "walkerBold" }}
            >
              {" "}
              Exclusive
            </span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </h1>
    </div>

    <div className="w-full flex flex-wrap justify-center gap-x-4 gap-y-6 px-3 py-6 mb-16">
      {data.map((item, index) => (
        <ProductCard
          key={index}
          item={item}
          setCartCount={setCartCount}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  </>
);

const Home = ({ cartCount, setCartCount, setCartItems, setIsCartOpen }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
const previewWinter = WinterAssets.slice(0, 6); // ✅ only 6 items
  const handleSearch = (term) => {
    setSearchTerm(term);

    const allProducts = [
      ...PoloAssets,
      ...WinterAssets,
      ...essentials,
      ...specialPricesAssets,
      ...LowerSliderAssets,
      ...MaskAssets,
      ...NewArrivalsAssets,
    ];
    const lowerTerm = term.toLowerCase().trim();

    const priceMatch = lowerTerm.match(/(under|below)\s*₹?\s*(\d+)/);
    if (priceMatch) {
      const priceLimit = parseInt(priceMatch[2]);
      const results = allProducts.filter((item) => item.price <= priceLimit);
      setFilteredProducts(results);
      return;
    }

    const results = allProducts.filter((item) =>
      item.name.toLowerCase().includes(lowerTerm)
    );
    setFilteredProducts(results);
  };
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
    <main className="w-full">
      <Nav
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
        handleSearch={handleSearch}
      />

      <BottomPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />

      <div className="imageSlider w-full">
        <video
          className="w-full h-[80vh] md:mt-16 md:h-[85vh] object-cover"
          muted
          autoPlay
          loop
          src={bgvideo}
        ></video>
      </div>

      {searchTerm !== "" ? (
        filteredProducts.length > 0 ? (
          <Section
            title={`Search Results for "${searchTerm}"`}
            data={filteredProducts}
            setCartCount={setCartCount}
            setCartItems={setCartItems}
          />
        ) : (
          <p className="text-center text-gray-500 text-lg mt-12">
            No products found for "{searchTerm}".
          </p>
        )
      ) : (
        <>
          <Section
            title="New | Arrivals"
            data={PoloAssets}
            setCartCount={setCartCount}
            setCartItems={setCartItems}
          />
           <Section
             highlight="Winter"
             data={previewWinter}
             setCartCount={setCartCount}
             setCartItems={setCartItems}
           />
          <Section
            title={
              <span
                className="text-blue-400"
                style={{ fontFamily: "walkerBold" }}
              >
                SOFT-
                <span
                  className="text-[#050505d8]"
                  style={{ fontFamily: "walkerLight", fontWeight: "bold" }}>
                  Core
                </span>
              </span>
            }
            data={essentials}
            setCartCount={setCartCount}
            setCartItems={setCartItems}
          />
        </>
      )}

      {/* 🔥 Sliders + Drags */}
      <div className="heading w-full flex justify-center items-center mb-4">
        <h1
          className="text-[7vw] md:text-[3vw] font-semibold uppercase"
          style={{ fontFamily: "walkerBold" }}
        >
          Beige | Oak
        </h1>
      </div>
      <div className="h-full w-full mb-16">
        <Drag leftImage={Aw1} rightImage={Aw2} />
      </div>

      <div className="heading w-full flex justify-center items-center mb-4">
        <h1
          className="text-[7vw] md:text-[3vw] font-semibold"
          style={{ fontFamily: "walkerBold" }}
        >
          INDIGO | CORE
        </h1>
      </div>
      <div className="w-full mb-16">
        <Drag leftImage={blue1} rightImage={walkerMask} />
      </div>

      <div className="heading w-full flex justify-center items-center mb-4">
        <h1
          className="text-[7vw] md:text-[3vw] font-semibold"
          style={{ fontFamily: "walkerBold" }}
        >
          BLOOD | LUXE
        </h1>
      </div>
      <div className="w-full mb-16">
        <Drag leftImage={red1} rightImage={red2} />
      </div>
      <ProductSlider
        data={UpperSliderAssets}
        direction="left"
        setCartCount={setCartCount}
        setCartItems={setCartItems}
      />
      <div className="mb-6"></div>
      <ProductSlider
        data={LowerSliderAssets}
        direction="right"
        setCartCount={setCartCount}
        setCartItems={setCartItems}
      />
      <Footer />
    </main>
  );
};

export default Home;
