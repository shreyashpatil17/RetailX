import './style.css';
import React, { useState } from 'react';
import NoLoginNavbar from '../../Components/noLoginNavBar/noLoginNavBar';

const About = () => {

    const [isImageMovedDown, setImageMovedDown] = useState(false);
    const handleMenuClick = () => {
        setImageMovedDown(!isImageMovedDown);
      };

    return(
        <>
        <NoLoginNavbar onMenuClick={handleMenuClick}/>
        </>
    );
}

export default About;