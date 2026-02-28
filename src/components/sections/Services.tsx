"use client";
import React, { useEffect, useRef } from "react";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              },
              y: 100,
              opacity: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out"
            });
          }
        });
      });
    });
  }, []);

  const services = [
    { title: "Web Development", description: "Custom websites and web applications built with modern technologies", icon: "🌐" },
    { title: "Mobile Apps", description: "iOS and Android applications with cross-platform solutions", icon: "📱" },
    { title: "Cloud Solutions", description: "AWS/Azure cloud migration and infrastructure setup", icon: "☁️" },
    { title: "Digital Transformation", description: "Business process automation and legacy system modernization", icon: "🚀" },
  ];

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => addToRefs(el, index)}
              className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
