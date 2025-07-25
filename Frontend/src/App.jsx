import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import SizeChart from './components/SizeChart';
import WinterPage from './screens/WinterPage';
import Nav from './components/Nav';
import CartDrawer from './components/CartDrawer';
import Accessories from './screens/Accessories';
import Signup from './screens/signup';
import Login from './screens/Login';
import SpecialPrize from './screens/SpecialPrize';
import Mask from './screens/MaskPage';
import ContactUs from './screens/ContactUs';
import NewArrivals from './screens/NewArrivals';
import ShoesPage from './screens/ShoesPage';
import Delivery from './screens/Delivery';

const App = () => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Get userId (fallback to guest if not logged in)
  const userId = localStorage.getItem('userId') || 'guest';

  // ✅ Load cartCount and cartItems from localStorage
  const [cartCount, setCartCount] = useState(() => {
    const storedCount = localStorage.getItem(`cartCount-${userId}`);
    return storedCount ? parseInt(storedCount) : 0;
  });

  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem(`cartItems-${userId}`);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // ✅ Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(`cartCount-${userId}`, cartCount);
    localStorage.setItem(`cartItems-${userId}`, JSON.stringify(cartItems));
  }, [cartCount, cartItems, userId]);

  // ✅ Close cart on route change
  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname]);

  // Optional: Global search handler
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (term) => {
    // You can use global search logic here if needed
  };

  return (
    <>
      <Nav
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
        handleSearch={handleSearch}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setCartCount={setCartCount}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setIsCartOpen={setIsCartOpen}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setIsCartOpen={setIsCartOpen}
            />
          }
        />
        <Route
          path="/product/winter"
          element={
            <WinterPage
              cartCount={cartCount}
              setCartCount={setCartCount}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/product/sizeChart" element={<SizeChart />} />
        <Route path="/product/Accessories" element={<Accessories />} />
        <Route path="/product/special-prices" element={<SpecialPrize />} />
        <Route path="/product/masks" element={<Mask/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/product/new-arrivals" element={<NewArrivals/>} />
        <Route path="/product/shoes" element={<ShoesPage/>} />
        <Route path="/product/delivery" element={<Delivery/>} />
      </Routes>
    </>
  );
};

export default App;
