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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCategory from "./Components/ItemCategory";


const App = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
    <div>
    <Gnb isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
    <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
    <Banner />
    <ItemCategory/>
    <Cardsize products={sizeData.products} />
    <Product/>
    <Cardeasy products={easyData.products} />
    <Instagram products={instaData.products} /> 
    <Footer/>
    <Routes>
    {/* <Route path="/cart" element={<CartPage/>}/> */}
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;