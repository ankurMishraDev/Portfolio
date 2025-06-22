import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
function Nav(){
    return(
        <ul className='nav-ul flex items-center gap-3'>
            <li className='nav-ul  text-neutral-300 hover:text-white'><a href="#home" className='nav-link'>Home</a></li>
            <li className='nav-ul  text-neutral-300 hover:text-white'><a href="#about" className='nav-link'>About</a></li>
            <li className='nav-ul  text-neutral-300 hover:text-white'><a href="#work" className='nav-link'>Work</a></li>
            <li className='nav-ul  text-neutral-300 hover:text-white'><a href="#contact" className='nav-link'>Contact</a></li>
        </ul>
    )
}
const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/50'>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
            <a href="/" className="text-xl font-bold transition-colors text-neutral-300 hover:text-white">Greninja</a>
            <button onClick={()=> setOpen(!open)} className='flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden'>  
                <img src={open? "/images/x.svg":"/images/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>
            <nav className='hidden sm:flex'>
                <Nav/>
            </nav>
        </div>
      </div>
      {open &&(
      <motion.div className="block overflow-hidden text-center sm:hidden" initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} style={{maxHeight: "100vh"}} transition={{duration: 1}}>
        <nav className='pb-5'>
            <Nav/>
        </nav>
      </motion.div>
      )}
    </div>
  )
}

export default Navbar
