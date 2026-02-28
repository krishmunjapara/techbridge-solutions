"use client";
import React from "react";

const Technologies = () => {
  const techs = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section id="technologies" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Technologies We Use</h2>
        <p className="text-xl text-gray-400 text-center mb-16">Modern tech stack for cutting-edge solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <div key={index} className="glass-effect p-8 rounded-xl text-center hover:scale-110 transition-transform">
              <div className="text-5xl mb-4">{tech.icon}</div>
              <p className="font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
