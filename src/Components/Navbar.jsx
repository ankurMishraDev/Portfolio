
import React, { useRef, useState, useEffect } from 'react'
import { socials } from '../constants/social';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-scroll';
const Navbar = () => {
  const navRef = useRef(null);
  const linkReference = useRef([]);
  const contactReference = useRef(null);
  const upLineRef = useRef(null);
  const downLineRef = useRef(null);
  const timeLine = useRef(null);
  const menuIconTL = useRef(null);
  const [open, setOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowMenuIcon(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(()=>{
    gsap.set(navRef.current, {xPercent:100});
    gsap.set([linkReference.current, contactReference.current],{
      autoAlpha:0,
      x:-20,
    })
    timeLine.current = gsap.timeline({paused:true}).to(navRef.current,{
      xPercent:0,
      duration:1,
      ease:"power3.inOut",
    }).to(linkReference.current,{
      autoAlpha:1,
      x:0,
      stagger:0.1,
      duration:0.5,
      ease:"power2.inOut",
    },"<").to(contactReference.current,{
      autoAlpha:1,
      x:0,
      duration:0.5,
      ease:"power2.inOut",
    },"<+0.1")

     menuIconTL.current= gsap.timeline({paused:true}).to(upLineRef.current,{
      rotate:45,
      duration:0.5,
      y:3.3,
      ease:"power2.inOut",
    }).to(downLineRef.current,{
      rotate:-45,
      duration:0.5,
      y:-3.3,
      ease:"power2.inOut",
    },"<")
  },[])

  const handleMenu = () =>{
    if(open){
      timeLine.current.reverse();
      menuIconTL.current.reverse();
    } else{
      timeLine.current.play();
      menuIconTL.current.play();
    }
    setOpen(!open);
  }
  return (
    <>
      <nav ref={navRef} className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
      <div className="flex flex-col text-5xl gap-y-2 md:text-8xl lg:text-6xl">
        {["home", "domains","work", "techStack", "about", "contact" ].map((section, index) => (
          <div key={index} ref={(element)=>(linkReference.current[index] = element)}>
            <Link to={`${section}`} smooth offset={0} duration={1000} className='transition-all duration-300 cursor-pointer hover:text-white'>
              {section}
            </Link>
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
      <div onClick={handleMenu} style={showMenuIcon? {clipPath:"circle(50% at 50% 50%)"}: {clipPath:"circle(0% at 50% 50%)"}} className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-10 h-10 md:w-20 md:h-20 top-4 right-10">
        <span ref={upLineRef} className='block w-8 h-0.5 bg-white rounded-full origin-center'></span>
        <span ref={downLineRef} className='block w-8 h-0.5 bg-white rounded-full origin-center'></span>
      </div>
    </>
  )
}

export default Navbar
