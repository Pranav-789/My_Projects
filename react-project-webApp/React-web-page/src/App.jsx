import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='main'>
      <NavBar id='item-nav'/>
      <Hero id='id-hero'/>
    </div>
  )
}

export default App
