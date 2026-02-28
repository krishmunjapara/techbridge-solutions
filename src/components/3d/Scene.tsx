"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { 
  Environment, 
  PerspectiveCamera,
  useScroll,
  Stars,
  Sphere,
  MeshDistortMaterial,
  Trail,
  Line
} from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      const scrollOffset = scroll.offset;
      meshRef.current.position.y = -scrollOffset * 8;
      meshRef.current.scale.setScalar(1.5 + Math.sin(scrollOffset * 3) * 0.3);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <MeshDistortMaterial
        color="#2563EB"
        attach="material"
        distort={0.6}
        speed={3}
        roughness={0.2}
        metalness={0.9}
        emissive="#1E40AF"
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  );
}

function DNAHelix() {
  const scroll = useScroll();
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 100; i++) {
      const t = (i / 100) * Math.PI * 4;
      pts.push(new THREE.Vector3(
        Math.cos(t) * 2,
        (i / 100) * 10 - 5,
        Math.sin(t) * 2
      ));
    }
    return pts;
  }, []);

  const points2 = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 100; i++) {
      const t = (i / 100) * Math.PI * 4 + Math.PI;
      pts.push(new THREE.Vector3(
        Math.cos(t) * 2,
        (i / 100) * 10 - 5,
        Math.sin(t) * 2
      ));
    }
    return pts;
  }, []);

  const helixRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      helixRef.current.position.y = -scroll.offset * 10;
    }
  });

  return (
    <group ref={helixRef} position={[0, 0, -5]}>
      <Line points={points} color="#7C3AED" lineWidth={2} />
      <Line points={points2} color="#F59E0B" lineWidth={2} />
    </group>
  );
}

function ParticleRing() {
  const particlesRef = useRef<THREE.Points>(null);
  const scroll = useScroll();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 5;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 1, 0.5 + Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      particlesRef.current.position.z = -scroll.offset * 5;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#2563EB" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7C3AED" />
      <pointLight position={[0, 0, 10]} intensity={1} color="#F59E0B" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.4}
        penumbra={1}
        intensity={2}
        castShadow
        color="#60A5FA"
      />
    </>
  );
}

function AnimatedCamera() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const scrollOffset = scroll.offset;
    camera.position.z = 8 - scrollOffset * 15;
    camera.position.y = scrollOffset * 8;
    camera.position.x = Math.sin(scrollOffset * Math.PI) * 3;
    camera.lookAt(0, -scrollOffset * 5, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000814", 10, 40]} />
      
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <AnimatedCamera />
      
      <Lights />
      
      <Stars
        radius={150}
        depth={80}
        count={8000}
        factor={6}
        saturation={0}
        fade
        speed={1.5}
      />
      
      <ParticleRing />
      <Globe />
      <DNAHelix />
      
      <Environment preset="night" />
    </>
  );
}
