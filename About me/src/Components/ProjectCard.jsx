import React from 'react'
import {motion} from 'motion/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  return (
    <motion.div
      className="rounded-lg bg-blue-400 w-[350px] flex flex-col items-center p-4 mt-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0 }}
    >
      <img
        src={props.image}
        alt="img"
        className="w-full rounded-lg h-[200px] "
      />
      <h1 className="font-semibold text-black text-2xl mt-2">
        {props.title || `Title`}
      </h1>
      <p className="text-white text-lg mt-2 h-[200px] overflow-y-scroll custom-scroll">
        {props.details ||
          `details: dadkjnkjfanfnsdncdscm askd kfafkd cmsdckandm foemkwenweeoid emk`}
      </p>
      <div className="flex gap-3">
        <button className="mt-3 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition">
          <a href={props.link}>
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
        </button>
        {props.viewEnabled && (
          <button className="mt-3 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            <a href={props.viewLink}>View</a>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard
