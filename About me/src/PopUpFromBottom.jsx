import React from "react";
import { motion } from "framer-motion";
import chatImage from './assets/ChatGPT Image May 28, 2025, 10_38_26 AM.png'; // adjust path as needed


const PopUpFromBottom = () => {
  return (
    <motion.div
      initial={{ y: "100%", scale: 0 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 2.4 }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md h-100 flex items-center justify-center overflow-hidden z-100"
    >
      <img src={chatImage} className="h-100 rounded-xl" />
    </motion.div>
  );
};

export default PopUpFromBottom;
