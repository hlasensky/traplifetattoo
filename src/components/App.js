import React from 'react';
import Contact from './Contact/Contact';
import './App.scss'

import LandingPage from '../components/LandingPage/LandingPage';
import Galery from './Galery/Galery';

const App = () => {
    
    return (
        <div>
            <Galery/>
            <Contact />
        </div>
    );
};

export default App;