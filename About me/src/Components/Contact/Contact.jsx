import React from 'react'
import { motion } from "motion/react";

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
    </div>
  );
}

export default Contact
