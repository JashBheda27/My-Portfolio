
  import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';


const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
  window.addEventListener('mousemove', handleMouseMove);
  return () => 
    window.removeEventListener('mousemove', handleMouseMove);
  },[])
  
  return (
    <div className='bg-zinc-950 relative min-h-screen text-white overflow-x-hidden 
    selection:bg-yellow-400 selection:text-zinc-900 font-ubuntu'>

      <motion.div className=' flex md:hidden  top-0 left-0 w-6 h-6 rounded-full border border-yellow-400/80 fixed pointer-events-none z-50 items-center justify-center '
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 , mass: 0.5}}>
          <div className='w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_2px_rgba(255,255,0,0.5)]'>
          </div>

      </motion.div>
      <Navbar />
      <HeroSection />
      <About/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Contact/>
    </div>
  )
}

export default App
