import React, { useState, useEffect } from 'react'
import './Hero.css'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg' 
import bg3 from '../assets/bg3.jpg'
import bg4 from '../assets/bg4.jpg'
import bg5 from '../assets/bg5.png'

const Hero = () =>{

    return(
        <div>
            <section className='container'>
                <div className='slide-wrapper'>
                    <div className='slider'>
                        <img src={bg1} alt="" id="slide-1"/>
                        <img src={bg2} alt="" id="slide-2"/>
                        <img src={bg3} alt="" id="slide-3"/>
                        <img src={bg4} alt="" id="slide-4"/>
                        <img src={bg5} alt="" id="slide-5"/>
                    </div>
                    <div className='slider-nav'>
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                        <a href="#slide-4"></a>
                        <a href="#slide-5"></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
