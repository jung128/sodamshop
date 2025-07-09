import "./App.scss";
import Banner from "./Components/Banner";
import Cardeasy from "./Components/Cardeasy";
import Product from "./Components/Product";
import Cardsize from "./Components/Cardsize";
import Instagram from "./Components/Instagram";

import easyData from './assets/Easy.json';
import sizeData from './assets/Size.json';
import instaData from './assets/insta.json';
import { useState } from "react";
import Gnb from "./Components/Gnb";

const App = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <div>
      <Gnb isOpen={isMenuOpen} setIsOpne={setIsMenuOpen}/>
      <Banner isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
      <Cardsize products={sizeData.products} />
      <Product/>
      <Cardeasy products={easyData.products} />
      <Instagram products={instaData.products} />
    </div>
  );
};

export default App;