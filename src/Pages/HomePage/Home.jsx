import NoLoginNavBar from "../../Components/noLoginNavBar/noLoginNavBar";
import HomeImage from "../../Components/Images/HomeImage.png";
import './style.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Home = () => {

    const [isImageMovedDown, setImageMovedDown] = useState(false);
    const handleMenuClick = () => {
        setImageMovedDown(!isImageMovedDown);
      };

    return(
        <>
        <NoLoginNavBar onMenuClick={handleMenuClick}/>
        <img className={`homeimg ${isImageMovedDown ? 'image-moved-down' : ''}`} 
            src={HomeImage} 
            alt="Main Content"
        />
        <h1>Your Everyday <br/>Retail Application</h1>
        <h3>Make your store management a hassle free experience</h3>
        <div className="button">
            <Link to="/">Get Started</Link>
        </div>
        </>
    );

}

export default Home;