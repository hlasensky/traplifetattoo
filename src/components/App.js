import React from 'react';
import Contact from './Contact/Contact';
import './App.scss'
import LandingPage from './LandingPage/LandingPage';
import Galery from './Galery/Galery';
import AboutMe from './AboutMe/AboutMe';
import ScrollButton from './ScrollButton/ScrollButton'

const App = () => {
    
    return (
        <div>
            <ScrollButton />
            <LandingPage />
            <AboutMe />
            <Galery />
            <Contact />
        </div>
    );
};

export default App;