import React from "react";
import { useGLTF, Center } from "@react-three/drei";

export function Planet(props) {
  const { scene } = useGLTF("/models/macbook_laptop.glb");
  return (
    <Center>
      <primitive object={scene} {...props} />
    </Center>
  );
}

useGLTF.preload("/models/macbook_laptop.glb");