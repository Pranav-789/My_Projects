import React from 'react'
import {motion} from 'motion/react'

const BluePops = () => {
  return (
    <div>
      <motion.div
        className="h-80 w-160 bg-sky-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-full z-50 flex justify-center items-center"
        initial={{
          y: "100%",
          scale: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
      </motion.div>

      <motion.div
        className="h-100 w-200 bg-sky-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-full z-40 flex justify-center items-center"
        initial={{
          y: "100%",
          scale: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
      </motion.div>

      <motion.div
        className="h-120 w-240 bg-sky-200 absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-full z-30 flex justify-center items-center"
        initial={{
          y: "100%",
          scale: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
      </motion.div>
    </div>
  );
}

export default BluePops
