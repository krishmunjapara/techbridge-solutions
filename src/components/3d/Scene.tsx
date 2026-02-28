"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { 
  Environment, 
  Float, 
  PerspectiveCamera,
  useScroll,
  Stars,
  Sparkles,
  MeshDistortMaterial,
  MeshWobbleMaterial
} from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color }: any) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshWobbleMaterial
          color={color}
          speed={2}
          factor={0.3}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particlesCount = 5000;
  
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    
    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.6, 1, 0.5);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      const scrollOffset = scroll.offset;
      meshRef.current.position.y = -scrollOffset * 10;
      meshRef.current.scale.setScalar(1 + scrollOffset * 2);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#2563EB"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={0.8}
        emissive="#2563EB"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#2563EB" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#F59E0B"
      />
    </>
  );
}

function AnimatedCamera() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const scrollOffset = scroll.offset;
    camera.position.z = 5 - scrollOffset * 10;
    camera.position.y = scrollOffset * 5;
    camera.lookAt(0, -scrollOffset * 5, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 25]} />
      
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <AnimatedCamera />
      
      <Lights />
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <Sparkles
        count={100}
        scale={10}
        size={2}
        speed={0.4}
        opacity={0.6}
        color="#2563EB"
      />
      
      <ParticleField />
      <CentralSphere />
      
      <FloatingShape position={[-4, 2, -5]} color="#2563EB" />
      <FloatingShape position={[4, -2, -5]} color="#7C3AED" />
      <FloatingShape position={[0, 4, -8]} color="#F59E0B" />
      
      <Environment preset="night" />
    </>
  );
}
