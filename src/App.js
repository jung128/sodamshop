import "./App.scss";
import Banner from "./Components/Banner";
import Cardeasy from "./Components/Cardeasy";
import Product from "./Components/Product";
import Cardsize from "./Components/Cardsize";
import Instagram from "./Components/Instagram";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CartPage from "./Components/CartPage";

import easyData from './assets/Easy.json';
import sizeData from './assets/Size.json';
import instaData from './assets/insta.json';
import { useState } from "react";
import Gnb from "./Components/Gnb";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ItemCategory from "./Components/ItemCategory";

const AppContent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.product_id === item.product_id);
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.product_id === item.product_id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const handleDelete = (itemId) => {
    setCart(cart.filter(item => item.product_id !== itemId));
  };

  const handleUpdateCount = (itemId, newCount) => {
    if (newCount <= 0) {
      handleDelete(itemId);
      return;
    }
    setCart(cart.map(item => 
      item.product_id === itemId 
        ? { ...item, count: newCount }
        : item
    ));
  };

  return (
    <div>
      {location.pathname !== '/cart' && (
        <>
          <Gnb isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
          <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
        </>
      )}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <ItemCategory/>
              <Cardsize products={sizeData.products} onAddToCart={handleAddToCart} />
              <Product/>
              <Cardeasy onAddToCart={handleAddToCart} />
              <Instagram products={instaData.products} />
              <Footer/>
            </>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              onDelete={handleDelete} 
              onUpdateCount={handleUpdateCount} 
            />
          } 
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;