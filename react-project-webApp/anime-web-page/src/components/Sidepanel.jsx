import React from 'react'
import './Sidepanel.css'
import { useEffect } from 'react';
import sd1 from '../assets/sd-img1.jpg'
import sd2 from '../assets/sd-img2.jpg'
import sd3 from '../assets/sd-img3.jpg'
import sd4 from '../assets/sd-img4.jpg'
import sd5 from '../assets/sd-img5.jpg'


const Sidepanel = ({ className }) => {

  useEffect(() => {
    const bgMod = () => {
      const sleeves = document.querySelectorAll(".sid-panel-contents .content-sleeve .gradfill");
      let index = 0;
  
      const interval = setInterval(() => {
        sleeves.forEach((sleeve, i) => {
          sleeve.classList.remove('filling'); // Remove animation class from all
        });
        
        sleeves[index].classList.add('filling'); // Add animation class to the current one
        
        index = (index + 1) % sleeves.length;
      }, 5000);
  
      return () => clearInterval(interval);
    };
    bgMod();
  }, []);

  return (
      <div className={className}>
        <div className="sid-panel-contents">
          <div className='content-sleeve'>
          <div className="gradfill"></div>
            <div className="content-img-sleeve">
              <div className="content-title">Blue Box</div>
              <img src={sd1} alt="" />
            </div>
          </div>

          <div className='content-sleeve'>
          <div className="gradfill"></div>
            <div className="content-img-sleeve">
            <div className="content-title">Demon Slayer</div>
              <img src={sd3} alt="" />
            </div>
          </div>

          <div className='content-sleeve'>
          <div className="gradfill"></div>
            <div className="content-img-sleeve">
            <div className="content-title">Your Name</div>
              <img src={sd4} alt="" />
            </div>
          </div>
          
          <div className='content-sleeve'>
          <div className="gradfill"></div>
          <div className="content-img-sleeve">
            <div className="content-title">Jujutsu Kaisen</div>
              <img src={sd5} alt="" />
            </div>
          </div>

          <div className='content-sleeve'>
          <div className="gradfill"></div>
            <div className="content-img-sleeve">
            <div className="content-title">Naruto</div>
              <img src={sd2} alt="" />
            </div>
          </div>
        </div>

        <div className="slider-nav">
            <a href="#BBX"></a>
            <a href="#DS"></a>
            <a href="#YN"></a>
            <a href="#JJK"></a>
            <a href="#Naruto"></a>
        </div>
      </div>
  )
}

export default Sidepanel
