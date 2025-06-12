import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'motion/react'
import pfp from '../../assets/pfp_123.jpg'

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen mt-6 flex justify-center items-center p-3 md:p-8 gap-4 flex-col">
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-bold text-center justify-center mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        ABOUT ME
      </motion.h1>
      <motion.div
        className="p-4 bg-blue-400 rounded-lg flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        <div className="flex md:flex-row gap-4 flex-col justify-center items-center">
          <img
            src={pfp}
            className="w-full max-w-[400px] rounded-xl object-cover"
          />
          <div className="p-4">
            <p className="text-lg font-semibold leading-relaxed text-justify">
              Hi, I’m Pranav — a Computer Science undergraduate at IIIT Pune
              with a strong foundation in programming and a growing passion for
              web development and problem-solving. I’m currently focused on
              building real-world applications using technologies like HTML,
              CSS, JavaScript, React.js, and the MERN stack (MongoDB,
              Express.js, React, Node.js), while also strengthening my grasp of
              Data Structures and Algorithms in C++.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe
