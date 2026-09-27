import { Canvas, useFrame } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const RotatingLaptop = ({ scale, position }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Planet scale={scale} />
    </group>
  );
};

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const laptopRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    tl.from(
      nameRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.5"
    );
    tl.from(
      contentRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
    tl.from(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
    tl.from(
      laptopRef.current,
      {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=1"
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-primary overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 py-20 gap-8">
        {/* Left - 3D Laptop Model */}
        <div
          ref={laptopRef}
          className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative"
        >
          <Canvas
            className="bg-transparent"
            shadows
            camera={{ position: [0, 2, 8], fov: 45, near: 0.1, far: 1000 }}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[15, 5, 5]} intensity={1} />
            <RotatingLaptop
              scale={isMobile ? 12 : 22}
              position={[0, 0, -6]}
            />
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>
                <Lightformer
                  form={"circle"}
                  intensity={0.5}
                  position={[0, 5, -9]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={0.5}
                  position={[0, 3, 1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={0.5}
                  position={[-5, -1, -1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={0.5}
                  position={[10, 1, 0]}
                  scale={16}
                />
              </group>
            </Environment>
          </Canvas>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mb-4 text-xs font-light tracking-[0.3em] uppercase text-black/60 md:text-sm"
          >
            Status: 200, All Good To Go
          </p>

          {/* Name */}
          <h1
            ref={nameRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black"
          >
            Ankur
            <br />
            Mishra
          </h1>

          {/* Description */}
          <div ref={contentRef} className="mt-8 max-w-lg">
            <p className="text-base md:text-lg font-light leading-relaxed text-black/70">
              Passionate{" "}
              <span className="font-medium text-black underline underline-offset-4">
                full-stack developer
              </span>
              , dedicated to crafting intuitive and visually appealing user
              interfaces.
            </p>
            <p className="mt-4 text-base md:text-lg font-light leading-relaxed text-black/70">
              Focused on translating design concepts into efficient, responsive
              web applications, made with care, purpose and production-quality
              code.
            </p>
          </div>

          {/* Buttons */}
          <div ref={buttonRef} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="work"
              smooth
              duration={1500}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white uppercase tracking-wider bg-black rounded-full cursor-pointer hover:bg-black/80 transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth
              duration={1500}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black uppercase tracking-wider border-2 border-black/30 rounded-full cursor-pointer hover:border-black hover:bg-black/5 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
