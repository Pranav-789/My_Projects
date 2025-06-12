import React from 'react'
import {motion} from 'motion/react'
import cssLogo from "../../assets/css.png";
import htmlLogo from "../../assets/html.png";
import reactLogo from "../../assets/react.png";
import mdbLogo from "../../assets/mongoDb.png";
import expLogo from "../../assets/expressJS.png";
import nodeLogo from "../../assets/nodeJS.png";
import cppLogo from "../../assets/cpp_logo.png";
import cLogo from "../../assets/C_logo.png";

const Skills = () => {
  return (
    <div className="w-full min-h-screen mt-6 flex flex-col justify-center items-center">
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-bold text-center justify-center mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        SKILLS
      </motion.h1>

      <motion.div
        className="bg-blue-200 flex justify-center items-center mt-6 p-4 rounded-xl w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="flex gap-6 overflow-x-auto flex-nowrap px-4 md:justify-center md:overflow-x-visible w-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mr-6 text-black">FRONTEND</h1>
            <h1 className="md:hidden text-lg font-medium text-gray-700 animate-pulse mt-6">
              SWIPE <span className="text-lg">»»</span>
            </h1>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center bg-amber-400 rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <p className="text-4xl font-bold text-black">JS</p>
            </motion.div>
            <p className="text-center text-lg text-black">JavaScript</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={cssLogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">CSS</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={htmlLogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">HTML</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={reactLogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">React</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-blue-300 flex justify-center items-center mt-6 p-4 rounded-xl w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="flex gap-6 overflow-x-auto flex-nowrap px-4 md:justify-center md:overflow-x-visible w-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mr-6 text-black">BACKEND</h1>
            <h1 className="md:hidden text-lg font-medium text-gray-700 animate-pulse mt-6">
              SWIPE <span className="text-lg">»»</span>
            </h1>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center bg-amber-400 rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <p className="text-4xl font-bold text-black">JS</p>
            </motion.div>
            <p className="text-center text-lg text-black">JavaScript</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={nodeLogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">NodeJS</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={expLogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">Express</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={mdbLogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">MongoDB</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-blue-400 flex justify-center items-center mt-6 p-4 rounded-xl w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="flex gap-6 overflow-x-auto flex-nowrap px-4 md:justify-center md:overflow-x-visible w-full">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mr-6 text-black">LANGUAGE</h1>
            <h1 className="md:hidden text-lg font-medium text-gray-700 animate-pulse mt-6">
              SWIPE <span className="text-lg">»»</span>
            </h1>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={cLogo} className="rounded-xl h-18 w-18" />
            </motion.div>
            <p className="text-center text-lg text-black">C</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer"
              whileHover={{
                rotateX: 35,
                rotateY: -10,
                scale: 1.1,
                boxShadow: "0 20px 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <img src={cppLogo} className="rounded-xl h-18 w-18" />
            </motion.div>
            <p className="text-center text-lg text-black">CPP</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills
