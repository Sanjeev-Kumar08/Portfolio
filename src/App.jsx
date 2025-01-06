import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
    
  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
