import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const AuraRing = () => {
  return (
    <motion.div
      className="mt-8"
      initial={{ y: "100%", scale: 0 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ delay: 0, duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full flex gap-6">
        <div className="h-12 w-12 rounded-full flex justify-center items-center">
          <a
            href="https://github.com/Pranav-789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white text-4xl hover:scale-105 hover:text-blue-500 transition-transform duration-200"
            />
          </a>
        </div>
        <div className="h-12 w-12 rounded-full flex justify-center items-center">
          <a
            href="https://www.instagram.com/pranav_z1_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-4xl hover:scale-105 hover:text-blue-500 transition-transform duration-200"
            />
          </a>
        </div>
        <div className="h-12 w-12 rounded-full flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/pranav-zambare-41917a310/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-4xl hover:scale-105 hover:text-blue-500 transition-transform duration-200"
            />
          </a>
        </div>
        <div className="h-12 w-12 rounded-full flex justify-center items-center">
          <a
            href="https://codolio.com/profile/Pr2JIQmR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="text-white text-3xl hover:scale-105 hover:text-blue-500 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AuraRing;
