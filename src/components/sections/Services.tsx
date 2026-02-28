"use client";
import React from "react";

const Services = () => {
  const services = [
    { title: "Web Development", description: "Custom websites and web applications built with modern technologies", icon: "🌐" },
    { title: "Mobile Apps", description: "iOS and Android applications with cross-platform solutions", icon: "📱" },
    { title: "Cloud Solutions", description: "AWS/Azure cloud migration and infrastructure setup", icon: "☁️" },
    { title: "Digital Transformation", description: "Business process automation and legacy system modernization", icon: "🚀" },
  ];

  return (
    <section id="services" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform duration-300">
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
