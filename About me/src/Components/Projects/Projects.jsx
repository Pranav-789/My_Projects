import React from 'react'
import {motion} from 'motion/react'
import ProjectCard from '../ProjectCard';
import summarizerAI from '../../assets/summarizerAi.png'
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
      <div className="flex gap-8 flex-col md:flex-row">
        <ProjectCard
          image={focusPng}
          title={"FocusFLow"}
          details={
            "A full-stack productivity app featuring a Chrome extension that tracks time spent on websites, a React + Tailwind dashboard to visualize user activity, and a Node.js + MongoDB backend managing authentication and data flow."
          }
          link={`https://github.com/Pranav-789/FocusFlow`}
          viewEnabled={false}
          viewLink={`#`}
        />
        <ProjectCard
          image={summarizerAI}
          title={"Summarizer AI"}
          details={
            "Summarizer AI is an AI-powered web app that extracts and summarizes content from PDFs, DOCX, PPTX, and TXT files. Users can upload study material and instantly receive clear, concise summaries. It also allows refining summaries for better clarity and context. Built with Next.js, MongoDB, and Tailwind, it features secure JWT auth, a history dashboard, and file parsing support — making it a perfect study companion for students and working proffesionals"
          }
          link={`https://github.com/Pranav-789/StudyBuddy-AI`}
          viewLink={`https://study-buddy-ai-pink.vercel.app/dashboard`}
          viewEnabled={true}
        />
      </div>
    </div>
  );
}

export default Projects
