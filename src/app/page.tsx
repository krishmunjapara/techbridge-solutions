"use client";

import React, { useEffect, useRef } from "react";
import Hero3D from "@/components/sections/Hero3D";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Technologies from "@/components/sections/Technologies";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
