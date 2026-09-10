import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Navlinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='fixed  sm:top-4 top-6 left-0 w-full z-50 flex justify-center px-4'>
      <motion.nav className="bg-zinc-900/80 backdrop-blur-md rounded-full w-full max-w-7xl flex items-center justify-between px-6 sm:px-8 py-2 sm:py-4 gap-4 sm:gap-8 shadow-2xl shadow-black/50 sm:w-auto"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <a href="#home" className="text-purple-600 font-bold text-lg sm:text-xl tracking-widest shrink-0">
          Jash <span className="text-blue-500">Bheda</span></a>
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {Navlinks.map((link, index) => (
            <a key={index} href={link.href} className="text-white hover:text-yellow-600 transition-colors duration-300 tracking-widest">{link.name}</a>
          ))}
        </div>
        <motion.a href="#contact" className="hidden md:inline-block px-5 lg:px-7 py-2 lg:py-3 rounded-full bg-yellow-400 text-zinc-950 font-semibold shadow-lg text-sm hover:bg-yellow-500 transition-colors duration-300 shadow-yellow-400/50 shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Contact Me
        </motion.a>
        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1.5 rounded-lg hover:bg-white/10 transition-colors " aria-label="Toggle Menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} `}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''} `}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} `}></span>
        </button>
      </motion.nav>

      <AnimatePresence>
  {isOpen && (
    <motion.div
      className="absolute top-20 sm:top-24 left-4 right-4 bg-zinc-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-black/50 md:hidden"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
    >
      <div className="flex flex-col gap-4 items-center">

        {Navlinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="w-full mt-2 rounded-lg py-2 text-center text-white text-base font-semibold tracking-wide hover:text-yellow-600 active:text-yellow-600 hover:bg-white/5 transition-colors duration-300"
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}

        <motion.a
          href="#contact"
          className="w-full px-7 py-3 rounded-full bg-yellow-400 text-zinc-950 font-semibold shadow-lg text-sm hover:bg-yellow-500 transition-colors duration-300 shadow-yellow-400/50 text-center mt-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeMenu}
        >
          Contact Me
        </motion.a>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  )
}

export default Navbar

