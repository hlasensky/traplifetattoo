import React from 'react';
import Contact from './Contact/Contact';
import './App.scss'

import LandingPage from '../components/LandingPage/LandingPage';

const App = () => {
    return (
        <div>
            <LandingPage />
            <Contact />
        </div>
    );
};

export default App;