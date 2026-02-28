"use client";
import React, { useEffect, useRef } from "react";
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('../3d/Scene3D'), { ssr: false });

const Hero3D = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import GSAP dynamically
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(titleRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0.3
        })
        .from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8
        }, "-=0.5")
        .from(ctaRef.current?.children || [], {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6
        }, "-=0.4");

        // Scroll-based parallax effect
        if (heroRef.current) {
          gsap.to(heroRef.current, {
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true
            },
            opacity: 0.3,
            y: -100
          });
        }
      });
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />
      
      <div className="relative z-10 container-custom text-center px-4">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          Transform Your Business with<br />
          <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Leading Romanian IT company delivering cutting-edge web development, mobile apps, and cloud solutions
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
          <a href="#portfolio" className="btn-outline">
            View Our Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero3D;
