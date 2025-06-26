
import React, { useRef } from 'react'
import { socials } from '../constants/social';

const Navbar = () => {
  const navRef = useRef(null);
  const linkReference = useRef([]);
  const contactReference = useRef(null);
  return (
    <>
      <nav ref={navRef} className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
      <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-6xl">
        {["home", "service", "techStack", "about", "work", "contact" ].map((section, index) => (
          <div key={index} ref={(element)=>(linkReference.current[index] = element)}>
            <a href="" className='transition-all duration-300 cursor-pointer hover:text-white'>
              {section}
            </a>
          </div>
        ))}
      </div>
      <div ref={contactReference} className="flex flex-col flex-wrap justify-between gap-8 md:flex-row">
        <div className="font-light">
          <p className='tracking-wide text-white/60'>E-mail</p>
          <p className='text-xl tracking-widest lowercase text-pretty'>
            greninja@outlook.com
          </p>
        </div>
        <div className="font-light">
          <p className='tracking-wide text-white/50'>Connect On</p>
          <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
            {socials.map((connect, index)=>(
              <a key={index} href={connect.href} className='text-sm loading-loose tracking-wide hover:text-white cursor-pointer transition-colors duration-300'>
                {connect.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      </nav>
      
    </>
  )
}

export default Navbar
