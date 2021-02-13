import React from 'react';
import './AboutMe.scss'

const AboutMe = () => {
    return (
        <div className='aboutme' id='aboutme'>
            <div className='aboutme__content'>
                <img className='aboutme__image' src='/images/profile-image.png' alt='profile-image' />
                <div className='aboutme__box'>
                    <h1 className='aboutme__header'>jméno příjmení</h1>
                    <p className='aboutme__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse fermentum dolor nec tortor dapibus eleifend.
                        Donec malesuada ultrices neque, nec aliquam nulla suscipit non.
                        Suspendisse sollicitudin nulla et enim rutrum sodales. Curabitur
                        venenatis aliquam sagittis. Etiam a orci consectetur, dictum diam 
                        vitae, posuere leo. Suspendisse feugiat risus lorem, sed maximus
                        est efficitur hendrerit. Nullam rutrum, nisl sed hendrerit ultricies,
                        felis nisl tempus augue, vel convallis urna diam nec libero.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse fermentum dolor nec tortor dapibus eleifend.
                        Donec malesuada ultrices neque, nec aliquam nulla suscipit non.
                        lam rutrum, nisl sed hendrerit ultricies,
                        felis nisl tempus augue, vel convallis urna diam nec libero.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse fermentum dolor nec tortor dapibus eleifend.
                        Donec malesuada ultrices neque, nec aliquam nulla suscipit non </p>
                    <div className='aboutme__something'>
                        HERE CAN BE SOMETHING
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;