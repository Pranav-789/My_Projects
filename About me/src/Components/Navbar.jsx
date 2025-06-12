import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-4 w-[80%] h-12 rounded-3xl bg-white/10 z-1000 align-middle left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <ul className="flex justify-around items-center w-full text-lg">
          <li>
            <a href="#home">
              <span className="hidden sm:inline">Home</span>
              <span className="inline sm:hidden">
                <FontAwesomeIcon icon={faHouse} />
              </span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span className="hidden sm:inline">About</span>
              <span className="inline sm:hidden">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className="hidden sm:inline">Skills</span>
              <span className="inline sm:hidden">
                <FontAwesomeIcon icon={faCode} />
              </span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="hidden sm:inline">Projects</span>
              <span className="inline sm:hidden">
                <FontAwesomeIcon icon={faFolderOpen} />
              </span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="hidden sm:inline">Contact</span>
              <span className="inline sm:hidden">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
