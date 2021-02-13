import './Galery.scss'
import React from "react";

let intViewportWidth = window.innerWidth;



const Galery = () => {
    return (
        <div className="foto_container" style={{ backgroundImage: "url('/images/bg_img_2.png')"}}>
            <h1 class="h1_galery"><bold>GALERIE</bold></h1>
            <div className="fotolist">
                <div className="img_fade  bg_foto1">
                    <a href = "/images/full_images/full_1.jpg"><img className="foto" src="/images/1.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto2">
                    <a href = "/images/full_images/full_2.jpg"><img className="foto"  src="/images/2.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto3">
                    <a href = "/images/full_images/full_4.jpg"><img className="foto"  src="/images/4.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto4">
                    <a href = "/images/full_images/full_6.jpg"><img className="foto"  src="/images/6.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto5">
                    <a href = "/images/full_images/full_9.jpg"><img className="foto"  src="/images/9.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto6">
                    <a href = "/images/full_images/full_7.jpg"><img className="foto"  src="/images/7.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto7">
                    <a href = "/images/full_images/full_5.jpg"><img className="foto"  src="/images/5.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto8">
                    <a href = "/images/full_images/full_12.jpg"><img className="foto"  src="/images/12.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto9">
                    <a href = "/images/full_images/full_3.jpg"><img className="foto"  src="/images/3.jpg" alt="error"/></a>
                </div>
                <div className="img_fade  bg_foto10">
                    <a href = "/images/full_images/full_8.jpg"><img className="foto"  src="/images/8.jpg" alt="error"/></a>
                </div>
                
            </div>
            <div className='btn_galery'>DALŠÍ</div>
        </div>
        
    );
}

export default Galery;