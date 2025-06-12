import React, {useEffect, useRef } from "react";
import { motion } from "motion/react";
import PopUpFromBottom from './Components/PopUpFromBottom';
import BluePops from './Components/BluePops';
import AuraRing from './Components/AuraRing';
import Typed from "typed.js";


const HomeCard = () => {
  const typedRef = useRef(null);
    const roles = ["FULL STACK DEVELOPER", "C++ PROGRAMMER", "AI ENTHUSIAST", "COMPETITIVE PROGRAMMER"];
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: roles,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => {
        typed.destroy(); // Clean up the instance on unmount
      };
    }, []);
    
  return (
    <div className="min-h-screen w-full rounded-xl relative bg-blue-950 overflow-clip">
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 2.4,
          duration: 0.6,
        }}
        className="z-140 relative"
      >
        <h1 className="text-center font-medium text-4xl mt-45 sm:mt-24 mt-short-screen md:text-7xl sm:text-6xl">
          Hi I'm <span className="text-teal-300">Pranav Zambare</span>
        </h1>
        <div className="text-center mt-2 text-2xl font-semibold md:text-5xl sm:text-4xl">
          <span
            ref={typedRef}
            style={{ textShadow: "0 0 8px rgba(0, 0, 0, 0.8)" }}
          />
        </div>
      </motion.div>
      <div>
        <PopUpFromBottom />
        <BluePops />
        <AuraRing />
      </div>
    </div>
  );
}

export default HomeCard
