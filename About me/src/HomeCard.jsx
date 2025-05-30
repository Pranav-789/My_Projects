import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import PopUpFromBottom from './PopUpFromBottom';
import BluePops from './BluePops';
import AuraRing from './AuraRing';
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
      >
        <h1 className="text-center font-medium text-4xl mt-45 sm:mt-24 mt-short-screen">
          Hi I'm <span className="text-teal-300">Pranav Zambare</span>
        </h1>
        <div className="text-center mt-2 text-2xl">
          <span ref={typedRef} />
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
