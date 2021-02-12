import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img className='navbar__logo-img' src='/img/logo-example.png' alt='logo' />
                <h3 className='navbar__logo-text'>company name</h3>
            </div>
                <ul className='navbar__box'>
                    <li className='navbar__item'>domů</li>
                    <li className='navbar__item'>o mně</li>
                    <li className='navbar__item'>galerie</li>
                    <li className='navbar__item'>kontakt</li>
                </ul>
        </div>
    );
};

export default Navbar;