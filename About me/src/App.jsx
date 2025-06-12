import React from 'react'
import HomeCard from './HomeCard';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <div className="flex flex-col justify-center bg-blue-950">
      <Navbar />
      <section id='home'>
        <HomeCard />
      </section>

      <section id='about'>
        <AboutMe />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <section id='contact'>
        <Contact />
      </section>    
    </div>
  );
}

export default App
