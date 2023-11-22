import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import Model from "./model";
import Overlay from "./overlay";


export default function CustomScroll() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

  useEffect(() => {
    const eventSource = document.getElementById("root");
    if (eventSource) {
      // Do something with eventSource if needed
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <>
      <Canvas
        shadows
        eventPrefix="client"
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
      <div style={{ height: "100vh", color: "white"}}>
=</div>
    </>
  );
}
