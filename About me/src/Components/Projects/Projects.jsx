import React from 'react'
import {motion} from 'motion/react'
import ProjectCard from '../ProjectCard';
import focusPng from '../../assets/focusFlow.png'

const Projects = () => {
  return (
    <div className="w-full min-h-screen mt-6 flex flex-col justify-center items-center">
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-bold text-center justify-center mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        PROJECTS
      </motion.h1>
      <div className='flex gap-8 flex-col md:flex-row'>
        <ProjectCard
          image={focusPng}
          title={"FocusFLow"}
          details={
            "A full-stack productivity app featuring a Chrome extension that tracks time spent on websites, a React + Tailwind dashboard to visualize user activity, and a Node.js + MongoDB backend managing authentication and data flow."
          }
        />
      </div>
    </div>
  );
}

export default Projects
