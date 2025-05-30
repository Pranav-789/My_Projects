import React from 'react'
import {motion} from 'motion/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";


const AuraRing = () => {
  return (
    // ...existing code...
    <motion.div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-105 h-105 z-100"
      initial={{
        y: "100%",
        scale: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: 2.4,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="w-full h-full rounded-full border-4 border-gray-800 relative">
        <div className="absolute h-20 w-20 bg-white rounded-full left-8 bottom-80 flex justify-center items-center">
          <a href="https://github.com/Pranav-789">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-black text-6xl hover:scale-125 hover:text-blue-500"
            />
          </a>
        </div>
        <div className="absolute h-20 w-20 bg-amber-50 rounded-full left-[-14px] bottom-15 flex justify-center items-center">
          <a href="https://www.instagram.com/pranav_z1_/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-black text-6xl hover:scale-125 hover:text-blue-500"
            />
          </a>
        </div>
        <div className="absolute h-20 w-20 bg-amber-50 rounded-full right-[-14px] bottom-15 flex justify-center items-center">
          <a href="https://www.linkedin.com/in/pranav-zambare-41917a310/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-black text-5xl hover:scale-125 hover:text-blue-500"
            />
          </a>
        </div>
        <div className="absolute h-20 w-20 bg-amber-50 rounded-full right-8 bottom-80 flex justify-center items-center">
          <a href="https://codolio.com/profile/Pr2JIQmR">
            <FontAwesomeIcon
              icon={faCode}
              className="text-black text-4xl hover:scale-125 hover:text-blue-500"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default AuraRing
