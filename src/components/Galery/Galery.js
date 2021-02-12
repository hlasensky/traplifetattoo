import './Galery.scss'
import React from "react";
import first from "./imges/1.jpg"
import second from "./imges/2.jpg"
import third from "./imges/3.jpg"
import fourth from "./imges/4.jpg"
import fift from "./imges/5.jpg"
import sixth from "./imges/6.jpg"
import seventh from "./imges/7.jpg"
import eighth from "./imges/8.jpg"
import ningth from "./imges/9.jpg"
import twlwth from "./imges/12.jpg"


const Galery = () => {
    return (
        <div className="foto_container">
            <div className="fotolist">
                <div className="foto bg_foto1">
                    <img src={first} alt="chest"/>
                </div>
                <div className="foto bg_foto2">
                    <img src={second} alt="chest"/>
                </div>
                <div className="foto bg_foto3">
                    <img src={fourth} alt="chest"/>
                </div>
                <div className="foto bg_foto4">
                    <img src={sixth} alt="chest"/>
                </div>
                <div className="second_row bg_foto5">
                    <img src={ningth} alt="chest"/>
                </div>
                <div className="second_row bg_foto6">
                    <img src={seventh} alt="chest"/>
                </div>
                <div className="second_row bg_foto7">
                    <img src={fift} alt="chest"/>
                </div>
                <div className="foto bg_foto8">
                    <img src={twlwth} alt="chest"/>
                </div>
                <div className="foto bg_foto9">
                    <img src={third} alt="chest"/>
                </div>
                <div className="foto bg_foto10">
                    <img src={eighth} alt="chest"/>
                </div>
            </div>
        </div>
        
    );
}

export default Galery;