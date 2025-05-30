import React from 'react'
import HomeCard from './HomeCard';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar/>
      <HomeCard/>
    </div>
  );
}

export default App
