  import React from 'react';
  import { useEffect, useRef } from 'react';
  import './Hero.css';

  import img1 from '../assets/img1.jpeg';
  import img2 from '../assets/img2.jpg';
  import img3 from '../assets/img3.jpg';
  import img4 from '../assets/img4.jpg';
  import img5 from '../assets/img5.jpg';

  const Hero = ({ className }) => {
    const heroRef = useRef(null);
    // useEffect(() => {
    //   const triggerSliderNav = () => {
    //     const navLinks = document.querySelectorAll('.slider-nav a');
    //     let currentIndex = 0;

    //     const interval = setInterval(() => {
    //       navLinks[currentIndex].click();
    //       currentIndex = (currentIndex + 1) % navLinks.length;

    //     }, 5000);
 
    //     return () => clearInterval(interval);
    //   };

    //   triggerSliderNav();
    // }, []);

    useEffect (()=>{
      let interval;
      const slideNavs = ()=>{
        const navlinks = document.querySelectorAll(".slider-nav a");
        let index = 0;

        interval = setInterval(()=>{
          navlinks[index].click();
          index = (index+1)%navlinks.length;
        }, 5000);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Start the slider when the Hero is in view
            slideNavs();
          } else {
            // Stop the slider when the Hero is out of view
            clearInterval(interval);
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the Hero is visible
      );
  
      if (heroRef.current) {
        observer.observe(heroRef.current);
      }
  
      return () => {
        clearInterval(interval);
        if (heroRef.current) {
          observer.unobserve(heroRef.current);
        }
      };
    }, [])

    return (
      <div className={`hero-section ${className}`} ref={heroRef}>
        <section>
          <div className="slider-div">
            <div className="hero-img-container" id="BBX">
              <div className="hero-img-overlay">
                <h1>Blue Box</h1>
                <h4>
                  In a quiet blend of sports and romance, a badminton player falls
                  for a basketball star, chasing both love and dreams under the
                  same gym roof.
                </h4>
              </div>
              <img src={img1} alt="" className="images" />
            </div>

            <div className="hero-img-container" id="DS">
              <div className="hero-img-overlay">
                <h1>Demon Slayer</h1>
                <h4>
                  A kind-hearted boy becomes a demon slayer to avenge his family
                  and save his sister, battling deadly demons in a visually
                  stunning world.
                </h4>
              </div>
              <img src={img2} alt="" className="images" />
            </div>

            <div className="hero-img-container" id="YN">
              <div className="hero-img-overlay">
                <h1>Kimi No Na Wa</h1>
                <h4>
                  Two teens mysteriously swap bodies across time, leading to a
                  heartfelt connection and a race to rewrite fate before it's too
                  late.
                </h4>
              </div>
              <img src={img3} alt="" className="images" />
            </div>

            <div className="hero-img-container" id="JJK">
              <div className="hero-img-overlay">
                <h1>Jujutsu Kaisen</h1>
                <h4>
                  Yuji Itadori enters a dark world of cursed spirits and sorcerers
                  after swallowing a deadly curse — action-packed, intense, and
                  full of heart.
                </h4>
              </div>
              <img src={img4} alt="" className="images" />
            </div>

            <div className="hero-img-container" id="Naruto">
              <div className="hero-img-overlay">
                <h1>Naruto</h1>
                <h4>
                  A loud, lonely ninja dreams of becoming the strongest in his
                  village, fighting through pain, friendship, and epic battles to
                  earn respect.
                </h4>
              </div>
              <img src={img5} alt="" className="images" />
            </div>
          </div>

          <div className="slider-nav">
            <a href="#BBX"></a>
            <a href="#DS"></a>
            <a href="#YN"></a>
            <a href="#JJK"></a>
            <a href="#Naruto"></a>
          </div>
        </section>
      </div>
    );
  };

  export default Hero;