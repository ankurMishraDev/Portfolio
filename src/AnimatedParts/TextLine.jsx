
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const TextLine = ({txt, className}) => {
    const contentRef = useRef(null)
    const textLine = txt.split("\n").filter((line) => line.trim() !== "");
    const textLineRef = useRef([]);
    useGSAP(()=>{
        if(textLineRef.current.length > 0){
            gsap.from(textLineRef.current,{
                y:100,
                opacity:0,
                duration:1,
                stagger:0.3,
                ease:"back.out",
                scrollTrigger:{
                    trigger:contentRef.current,
                },
            });
        }
    })
  return (
    <div ref={contentRef} className={className}>
      {textLine.map((line, index) =>(
        <span key={index} ref={(el)=>(textLineRef.current[index]=el)} className='block leading-relaxed tracking-wide text-pretty'>{line}</span>
      ))}
    </div>
  )
}

export default TextLine

