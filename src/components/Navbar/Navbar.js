import React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.scss'

const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      }
  
        window.addEventListener("resize", handleWindowResize);
    }, []);

    const checkIsActive = () => {
        if(isActive === true) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }

    const renderList = () => {
        if(isActive === true) {
            return(
                    <ul>
                        <li className='hamburger__list-item'>home</li>
                        <li className='hamburger__list-item'>o mně</li>
                        <li className='hamburger__list-item'>galerie</li>
                        <li className='hamburger__list-item'>kontaktuj mě</li>
                    </ul>
            )
        }
    }
    
  
    const renderNavbar = () => {
        if(width < 1000) {
            return (
                <div>
                <div className='hamburger'>
                    <div className='hamburger__logo'>
                        <img className='hamburger__logo-img' src='/images/logo-example.png' alt='logo' />
                        <h3 className='hamburger__logo-text'>company name</h3>
                    </div>
                        <div className='hamburger__box' onClick={() => checkIsActive()}>
                            <div className='hamburger__line'></div>
                            <div className='hamburger__line'></div>
                            <div className='hamburger__line'></div>
                        </div>
                </div>
                    <div className='hamburger__list'>
                        {renderList()}
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