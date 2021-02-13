import React from 'react';
import './Contact.scss'

const Contact = () => {

    return (
        <div className='contact' id='contact'>
            <h1 className='contact__header'>JAK MĚ KONTAKTOVAT?</h1>

            <div className='contact__main'>
                <iframe className='contact__main-container contact__main-map' src="https://maps.google.com/maps?q=Brno&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <div className='contact__main-container'>
                    <img className='contact__main-polygon' src='/images/polygon.png' alt='polygon'/>
                    <form className='contact__main-form' action='POST' data-netlify='true' netlify>
                        <div className='contact__main-form-header'>EMAIL</div>
                        <div className='contact__main-form-inputs'>
                            <input className='contact__main-form-input' name='name' placeholder='CELÉ JMÉNO' type='text' /><br />
                            <input className='contact__main-form-input' name='email' type='email' placeholder='EMAIL' /><br />
                            <textarea className='contact__main-form-textarea' name='message' placeholder='ZPRÁVA' style={{resize: 'none'}}></textarea><br />
                            <div className='contact__main-form-submit'>ODESLAT</div>
                        </div>
                    </form>
                </div>


            </div>
    



            <div className='contact__socials'>
                <div className='contact__socials-container'>
                    <a href='https://www.instagram.com/traplifetattoo/' className='contact__socials-content'>
                        <img className='contact__socials-content-icon' src='/images/ig-icon.png' alt='ig-icon'/>
                        <div className='contact__socials-content-link'>traplifetattoo</div>
                    </a>
                </div>
                <div className='contact__socials-container contact__socials-container-last'>
                    <a href='https://www.facebook.com/traphousetattoobrno' className='contact__socials-content'>
                        <img className='contact__socials-content-icon' src='/images/fb-icon.png' alt='fb-icon'/>
                        <div className='contact__socials-content-link'>traplifetattoo</div>
                    </a>
                </div>

            </div>
            <div className='contact__others'>
                <div className='contact__others-container'>
                    <img className='contact__others-icon' src='/images/email-icon.png' />
                    <div className='contact__others-text'>lorem@gmail.com</div>
                </div>
                <div className='contact__others-container'>
                    <img className='contact__others-icon' src='/images/phone-icon.png' />
                    <div className='contact__others-text'>637587254</div>
                    
                </div>
                <div className='contact__others-container'>
                    <img className='contact__others-icon' src='/images/gps-icon.png' />
                    <div className='contact__others-text'>Urbanova 37</div>
                </div>
            </div>
            <div className='contact__copyright'>© Copyright 2021</div>
        </div>
    );
};

export default Contact;
