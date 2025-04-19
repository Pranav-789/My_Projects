import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Sidepanel from './components/Sidepanel'
import Contents from './components/Contents'
import { useEffect } from 'react'



function App() {

  useEffect(() => {
    console.log("reloaded");
  }, []);

  return (
    <div>
      <div className='container'>
        <Nav className='item-nav'></Nav>
        <Hero className='item-hero'></Hero>
        <Sidepanel className='item-sidepanel'></Sidepanel>
        <Contents className='item-contents'/>
      </div>
    </div>
  )
}

export default App
