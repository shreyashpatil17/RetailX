import './style.css';
import React, { useState } from 'react';
import NoLoginNavbar from '../../Components/noLoginNavBar/noLoginNavBar';
import AboutImage from "../../Components/Images/AboutImage.png";
import ContactForm from "../../Components/ContactForm/ContactForm"

const About = () => {

    const [isImageMovedDown, setImageMovedDown] = useState(false);
    const handleMenuClick = () => {
        setImageMovedDown(!isImageMovedDown);
      };

    return(
        <>
        <NoLoginNavbar onMenuClick={handleMenuClick}/>

        <img className={`aboutImg ${isImageMovedDown ? 'image-moved-down' : ''}`} 
            src={AboutImage} 
            alt="Main Content"
        />

        <h1 className="aboutH1">About Us</h1>

        <h3 className='aboutH3'>Welcome to Retail X, your all-in-one solution for seamless retail management. At Retail X, we understand the challenges and intricacies of running a successful store, and we're here to empower store owners like you with the tools you need to thrive in the dynamic world of retail<br/><br/>
        Our mission at Retail X is to simplify and elevate the retail management experience. We believe that every store, regardless of its size, deserves access to advanced and user-friendly tools to streamline operations, enhance customer interactions, and boost overall efficiency<br/><br/>
        We prioritize user experience, making Retail X intuitive and easy to navigate. Whether you're a seasoned retailer or just starting, our application is designed to be accessible to all, with a minimal learning curve
        </h3>

       <ContactForm/>

        </>
    );
}

export default About;