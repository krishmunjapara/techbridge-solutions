"use client";
import React from "react";

const Portfolio = () => {
  const projects = [
    { title: "E-Commerce Platform", category: "Web Development", tech: "React, Node.js, MongoDB", description: "Modern online store with payment integration" },
    { title: "Healthcare App", category: "Mobile Development", tech: "React Native, Firebase", description: "Patient management mobile application" },
    { title: "Cloud Migration", category: "Cloud Solutions", tech: "AWS, Docker, Kubernetes", description: "Enterprise cloud infrastructure setup" },
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Showcasing our successful projects and client solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-6xl">💼</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-accent font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold my-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500">Tech: {project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
