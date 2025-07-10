import { useState } from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import Popup from "./Popup";
import productData from "../assets/product.json";
import { GiSeaStar } from "react-icons/gi";
import { FaDisease } from "react-icons/fa";

const Productt = () => {
    const [isOpen1,setIsOpen1] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    const [isOpen3,setIsOpen3] = useState(false);
    const [isOpen4,setIsOpen4] = useState(false);

    return (
        <div className='product'>
            {/* <h2>Seasonal Picks<GiSeaStar /></h2> */}
            <h2><FaDisease /> Seasonal Picks </h2>
            <img src={`${process.env.PUBLIC_URL}/images/product-2.jpg `}/>
            <div className='product-icon-1'>
            <button onClick={()=>{setIsOpen1(!isOpen1)}}><AiTwotonePlusCircle /></button>
            {
                isOpen1 &&
                <Popup>
                    <img src={`${process.env.PUBLIC_URL}/${productData[0].img}`}
                                alt={productData[0].title}/>
                    <h2>{productData[0].title}</h2>
                    <p>{productData[0].description}</p>
                </Popup>
            }
            </div>
            <div className='product-icon-2'>
            <button onClick={()=>{setIsOpen2(!isOpen2)}}><AiTwotonePlusCircle /></button>
            {
                isOpen2 &&
                <Popup>
                    <img src={`${process.env.PUBLIC_URL}/${productData[1].img}`}
                                alt={productData[1].title}/>
                    <h2>{productData[1].title}</h2>
                    <p>{productData[1].description}</p>
                </Popup>
            }
            </div>
            <div className='product-icon-3'>
            <button onClick={()=>{setIsOpen3(!isOpen3)}}><AiTwotonePlusCircle /></button>
            {
                isOpen3 &&
                <Popup>
                    <img src={`${process.env.PUBLIC_URL}/${productData[2].img}`}
                                alt={productData[2].title}/>
                    <h2>{productData[2].title}</h2>
                    <p>{productData[2].description}</p>
                </Popup>
            }
            </div>
            <div className='product-icon-4'>
            <button onClick={()=>{setIsOpen4(!isOpen4)}}><AiTwotonePlusCircle /></button>
            {
                isOpen4 &&
                <Popup>
                    <img src={`${process.env.PUBLIC_URL}/${productData[3].img}`}
                                alt={productData[3].title}/>
                    <h2>{productData[3].title}</h2>
                    <p>{productData[3].description}</p>
                </Popup>
            }
            </div>
        </div>
    );
};

export default Productt;