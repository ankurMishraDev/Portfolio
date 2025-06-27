import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";

export function ThreeDModel(props) {
  const { nodes, materials } = useGLTF("/model/Planet.glb");
  const container = useRef(null);
  const circleContainer = useRef(null);
  const ringContainer = useRef(null);
useGSAP(()=>{
    const timeLine = gsap.timeline()
timeLine.from(container.current.position,{
y:5,
duration:3,
ease:"circ.out",
});
timeLine.from(circleContainer.current.rotation,{
    x:0,
    y:Math.PI,
    z:-Math.PI,
    duration:12,
    ease:"power2.out",
},"-=15")
timeLine.from(ringContainer.current.rotation,{
    x:0.6,
    y:0,
    z:0,
    duration:12,
    ease:"power2.out",
},"<")
})
  return (
    <group ref={container} {...props} dispose={null}>
      <group ref={circleContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials["Material.001"]}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>
      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials["Material.001"]}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/model/Planet.glb");
