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
    
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
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
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#home">domů</a></li>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#aboutme">o mně</a></li>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#galery">galerie</a></li>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#contact">kontakt</a></li>
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