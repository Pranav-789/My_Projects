import React from 'react'
import { motion } from "motion/react";
import linkedInpng from '../../assets/linkedin.png'
import gmailPng from '../../assets/gmail.jpg'

const Contact = () => {
  return (
    <div className="w-full min-h-screen mt-6 flex flex-col justify-center items-center">
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-bold text-center justify-center mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        CONTACT ME
      </motion.h1>
      <motion.div
        className="bg-blue-300 flex items-center mt-6 p-4 rounded-xl sm:w-[450px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        <img
          src={linkedInpng}
          alt=""
          className="rounded-xl max-w-[100px] ml-4"
        />
        <div className="ml-8">
          <h1 className="text-2xl font-semibold text-black">Pranav Zambare</h1>
          <button className="bg-blue-600 p-2 rounded-xl hover:bg-blue-500 active:scale-[0.9] mt-2 ">
            Connect Here
          </button>
        </div>
      </motion.div>
      <motion.div
        className="bg-blue-300 flex items-center mt-6 p-4 rounded-xl sm:w-[450px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        <img src={gmailPng} alt="" className="rounded-xl max-w-[100px] ml-4" />
        <div className="ml-8">
          <h1 className="sm:text-lg text-[12px] font-semibold text-black">
            pranavzambare.work@gmail.com
          </h1>
          <button
            onClick={() => {
              navigator.clipboard.writeText("pranavzambare.work@gmail.com");
              alert("Email copied!");
            }}
            className="bg-blue-600 p-2 text-lg mt-2 text-white rounded-md hover:bg-blue-500 active:scale-[0.9]"
          >
            copy
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact
