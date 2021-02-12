import React from 'react';
import Contact from './Contact/Contact';
import './App.scss'
import LandingPage from '../components/LandingPage/LandingPage';
import Galery from './Galery/Galery';
import AboutMe from '../components/AboutMe/AboutMe';

const App = () => {
    
    return (
        <div>
            <Galery />
            <LandingPage />
            <AboutMe />
            <Contact />
        </div>
    );
};

export default App;