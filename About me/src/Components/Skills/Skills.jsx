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
import motionLogo from "../../assets/motion.png";
import tailwindLogo from "../../assets/tailwind.svg";
import restAPILogo from "../../assets/restapi.png"
import pythonLogo from "../../assets/python-icon.png"

const Skills = () => {
  return (
    <div className="w-full min-h-screen mt-6 flex flex-col justify-center items-center">
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-bold text-center justify-center mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        SKILLS
      </motion.h1>

      <motion.div
        className="bg-blue-200 flex justify-center flex-col items-center mt-6 p-4 rounded-xl w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        <h1 className="text-3xl text-black mb-4 font-semibold">
          Tech Stacks and Frameworks
        </h1>
        <div className="flex gap-6 flex-wrap justify-center px-4 w-full">
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
              <img src={motionLogo} className="rounded-3xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">motion</p>
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
              <img src={tailwindLogo} className="rounded-3xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">tailwindCSS</p>
          </div>
          <div>
            <motion.div
              className="h-20 w-20 flex justify-center items-center rounded-2xl cursor-pointer bg-white"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                className="h-12 w-12"
              />
            </motion.div>
            <p className="text-center text-lg text-black">Next.js</p>
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
              <img src={restAPILogo} className="rounded-xl h-20 w-20" />
            </motion.div>
            <p className="text-center text-lg text-black">REST API</p>
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
        className="bg-blue-400 flex flex-col justify-center items-center mt-6 p-4 rounded-xl w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        <h1 className="text-3xl text-black mb-4 font-semibold">Languages</h1>
        <div className="flex gap-6 justify-center px-4 md:justify-center w-full">
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
              <img src={pythonLogo} className="rounded-xl h-18 w-18" />
            </motion.div>
            <p className="text-center text-lg text-black">Python</p>
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
