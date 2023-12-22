import "./style.css";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import menuIcon from "../Images/menu.png"
import React, { useState } from 'react';

const NoLoginNavbar = ({ onMenuClick }) => {

    //Drop Down Menu Button
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
      };

    const menuBtnClick = () => {
        toggleDropdown();
        onMenuClick();
    }

    return(

        <>
            <div className="nav">
                    <img className="logoimg" src={Logo} alt="Logo"/>
                    <button className="menuBtn" onClick={menuBtnClick}><img className="menuIcon" src={menuIcon} /></button>
                    {isDropdownVisible && (
                        <div className="dropdown-menu">
                            <Link to="/">Home</Link><br/>
                            <Link to="/">Login</Link><br/>
                            <Link to="/">Register</Link><br/>
                            <Link to="/about">About</Link>
                        </div>
                    )}
                    <div className="navItem">
                        <Link to="/">Home</Link>
		                <Link to="/">Login</Link>
		                <Link to="/">Register</Link>
		                <Link to="/about">About</Link>
                    </div>
            </div>
        </>       

    );

}

export default NoLoginNavbar;