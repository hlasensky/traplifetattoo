import React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.scss'

const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      }
  
        window.addEventListener("resize", handleWindowResize);
    }, []);
    
  
    const renderNavbar = () => {
        if(width < 1000) {
            return (
                <div className='hamburger'>
                    <div className='hamburger__logo'>
                        <img className='hamburger__logo-img' src='/images/logo-example.png' alt='logo' />
                        <h3 className='hamburger__logo-text'>company name</h3>
                    </div>
                        <div className='hamburger__box'>
                            <div className='hamburger__line'></div>
                            <div className='hamburger__line'></div>
                            <div className='hamburger__line'></div>
                        </div>
                </div>
            )
        } else {
            return(
                <div className='navbar'>
            <div className='navbar__logo'>
                <img className='navbar__logo-img' src='/images/logo-example.png' alt='logo' />
                <h3 className='navbar__logo-text'>company name</h3>
            </div>
                <ul className='navbar__box'>
                    <li className='navbar__item'>domů</li>
                    <li className='navbar__item'>o mně</li>
                    <li className='navbar__item'>galerie</li>
                    <li className='navbar__item'>kontakt</li>
                </ul>
            </div>
            )
        }
    }
    
    return (
        <div>
        {renderNavbar()}
        </div>
    );
    
};


export default Navbar;