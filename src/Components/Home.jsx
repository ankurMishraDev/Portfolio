import React from 'react'
import { useRef } from 'react'
import TextLine from '../AnimatedParts/TextLine';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import { ThreeDModel } from '../constants/ThreeDModel';
import { Environment, Float, Lightformer } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
const Home = () => {
  const mobile = useMediaQuery({maxWidth: 800})
  const ctxRef = useRef(null);
  const headRef = useRef(null);
  const introLine = `Architecting and developing robust web applications
   ensuring high efficiency and scalability with modern tech.`
   useGSAP(()=>{
    const timeLine = gsap.timeline();

    timeLine.from(ctxRef.current,{
      y:"50vh",
      duration:1,
      ease:"circ.out",
    })
    timeLine.from(headRef.current,{
      opacity:0,
      y:200,
      duration:1,
      ease:"circ.out",
    },
    "<+0.2");
   });
  return (
    <section id='home' className='flex flex-col justify-end min-h-screen'>
        <div ref={ctxRef}>
          <div style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
            <div ref={headRef} className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
              {/* <p className='text-sm font-light tracking-[0.5rem] uppercase px-10 text-black'>404</p> */}
              <div className="px-10">
                <h1 className='flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block'>Ankur Mishra</h1>
              </div>
            </div>
          </div>
          <div className="relative px-10 text-black">
            <div className="absolute inset-x-0 border-t-2"/>
            <div className="py-12 sm:py-16 text-end">
              <TextLine txt={introLine} className="font-light uppercase value-text-responsive"/>
            </div>
          </div>
        </div>
        <figure className='absolute inset-0 -z-50' style={{width:"100vw",height:"100vh"}}>
          <Canvas shadows camera={{position:[0,0,-10], fov:17.5, near:1, far:20}}>
            <ambientLight intensity={.5}/>
            <Float speed={1}>
            <ThreeDModel scale={mobile? .6:1}/>
            </Float>
            <Environment resolution={256}>
              <group rotation={[-Math.PI/3,4,2]}>
              <Lightformer form={"circle"} intensity={2} position={[0,5,-9]} scale={10}/>
              <Lightformer form={"circle"} intensity={2} position={[0,3,1]} scale={10}/>
              <Lightformer form={"circle"} intensity={2} position={[-5,-1,-1]} scale={10}/>
              <Lightformer form={"circle"} intensity={2} position={[10,1,0]} scale={16}/>
              </group>
            </Environment>
          </Canvas>
        </figure>
    </section>
  )
}

export default Home
