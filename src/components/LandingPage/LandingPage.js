import React from 'react';
import './LandingPage.scss'

import Navbar from '../Navbar/Navbar';


const LandingPage = () => {

    return (
        <div className='landingpage' style={{ backgroundImage: "url('/images/landing-bg.jfif')"}}>
            <Navbar className='landingpage__navbar' />
            <div className='landingpage__box'>
                <h1 className='landingpage__header landingpage__header-primary'>best tattoo</h1>
                <h2 className='landingpage__header landingpage__header-secondary'>hello i am guy and i make the best tattoo in this country</h2>
            </div>
            <div className='landingpage__arrow'>
                <img className='landingpage__btn' src='/images/arrow-icon.png' />
            </div>
        </div>
    );
};

export default LandingPage;