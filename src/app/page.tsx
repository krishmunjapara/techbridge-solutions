"use client";

import React from "react";
import dynamic from 'next/dynamic';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dynamically import components to avoid SSR issues
const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), { ssr: false });
const Technologies = dynamic(() => import("@/components/sections/Technologies"), { ssr: false });
const Team = dynamic(() => import("@/components/sections/Team"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero3D />
      <Services />
      <About />
      <Portfolio />
      <Technologies />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
