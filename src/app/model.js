import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const color = new THREE.Color();

export default function Model({ scroll, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model.glb");
  const { actions } = useAnimations(animations, group);
  const [hovered, set] = useState();
  const extras = {
    receiveShadow: true,
    castShadow: true,
    "material-envMapIntensity": 0.2,
  };
  useEffect(() => void (actions["CameraAction.005"].play().paused = true), [actions]);
  useEffect(() => {
    if (hovered)
      group.current.getObjectByName(hovered).material.color.set("white");
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  useFrame((state) => {
    actions["CameraAction.005"].time = THREE.MathUtils.lerp(
      actions["CameraAction.005"].time,
      actions["CameraAction.005"].getClip().duration * scroll.current,
      0.05
    );
    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(
        color.set(hovered === child.name ? "tomato" : "#202020"),
        hovered ? 0.1 : 0.05
      );
      const et = state.clock.elapsedTime;
      child.position.y = Math.sin((et + index * 2000) / 2) * 1;
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 10;
      child.rotation.y = Math.cos((et + index * 2000) / 2) / 10;
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 10;
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}
      >
        {" "}
        <mesh
          name="stairs"
          geometry={nodes.stairs.geometry}
          material={materials.material}
          position={[-90, -90, -75]}
          scale={[50, 50, 50]}
          {...extras}
        />
        <mesh
          name="fullcrane"
          geometry={nodes.fullcrane.geometry}
          material={materials.fullcraneMaterial}
          position={[10, 0, -50]}
          scale={[2, 2, 2]}
          {...extras}
        />
        <mesh
          name="defaultMaterial"
          geometry={nodes.defaultMaterial.geometry}
          material={materials.BoltSteel}
          position={[-1.78, 2.04, 23.58]}
          scale={[4, 4, 4]}
        >
        </mesh>
      </group>
      <group
        name="Camera"
        position={[-1.78, 2.04, 23.58]}
        rotation={[1.62, 0.01, 0.11]}
      >
        <PerspectiveCamera
          makeDefault
          far={100}
          near={0.1}
          fov={28}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  );
  Model.displayName = 'Model';
}

useGLTF.preload("/model.glb");
