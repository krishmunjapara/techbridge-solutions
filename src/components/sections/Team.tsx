"use client";
import React from "react";

const Team = () => {
  const team = [
    { name: "Adrian Popescu", role: "CEO & Founder", image: "👨‍💼" },
    { name: "Elena Ionescu", role: "CTO", image: "👩‍💻" },
    { name: "Mihai Stanescu", role: "Lead Developer", image: "👨‍💻" },
    { name: "Ana Gheorghe", role: "UI/UX Designer", image: "👩‍🎨" },
  ];

  return (
    <section id="team" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-xl text-gray-400 text-center mb-16">Meet the experts behind TechBridge Solutions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
