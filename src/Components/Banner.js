import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";

const Banner = ({isOpen,setIsOpen}) => {
    return (
        <div className="banner">
            <div className="nav">
            <button className="menu-bar" onClick={()=>{setIsOpen(!isOpen)}}><FaBars /></button>
            <h1>Sodam Shop</h1>
            {/* <img src='./image/head-logo.png' alt="로고 이미지"/> */}
            <div className="nav-icon">
            <button><PiUserCircleFill /></button>
            <button><MdOutlineShoppingBag /></button>
            </div>
            </div>
            <div className="nav2" >
            <ul>
                <li>New</li>
                <li>Living</li>
                <li>Dinig</li>
                <li>Bedroom</li>
                <li>Decor</li>
                </ul>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="흰색 커튼에 햇살이 비추는 배너 이미지"/>
        </div>
    );
};

export default Banner;