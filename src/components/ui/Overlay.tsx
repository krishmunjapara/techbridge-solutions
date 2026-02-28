"use client";

import React from "react";

export default function Overlay() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center px-6 md:px-12 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              TechBridge
            </span>
            <span className="block text-white mt-4">Solutions</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-12 font-light">
            Transforming businesses through immersive digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
              Start Your Journey
            </button>
            <button className="px-12 py-5 border-2 border-white text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-black">
              Explore Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">
            Our <span className="text-blue-500">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Web Development",
                desc: "Cutting-edge web applications with immersive 3D experiences",
                icon: "🌐"
              },
              {
                title: "Mobile Innovation",
                desc: "Native and cross-platform apps that users love",
                icon: "📱"
              },
              {
                title: "Cloud Architecture",
                desc: "Scalable, secure, and high-performance cloud solutions",
                icon: "☁️"
              },
              {
                title: "Digital Transformation",
                desc: "Revolutionary solutions that redefine industries",
                icon: "🚀"
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">
            Featured <span className="text-purple-500">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "E-Commerce Platform", tech: "React, Node.js, AWS" },
              { name: "Healthcare Portal", tech: "Next.js, Three.js" },
              { name: "FinTech Dashboard", tech: "Vue, Python, ML" }
            ].map((project, i) => (
              <div
                key={i}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 text-lg">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">
            Our <span className="text-orange-500">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Adrian Popescu", role: "CEO & Founder", emoji: "👨‍💼" },
              { name: "Elena Ionescu", role: "CTO", emoji: "👩‍💻" },
              { name: "Mihai Stanescu", role: "Lead Developer", emoji: "👨‍💻" },
              { name: "Ana Gheorghe", role: "UI/UX Designer", emoji: "👩‍🎨" }
            ].map((member, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-7xl mb-6">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            Let&apos;s Build <span className="text-blue-500">Together</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-16">
            Ready to transform your vision into reality?
          </p>
          <div className="space-y-6 mb-12">
            <p className="text-xl text-gray-400">
              📍 Bd. Unirii 45, Bucharest 030167, Romania
            </p>
            <p className="text-xl text-gray-400">
              📧 contact@techbridge-solutions.ro
            </p>
            <p className="text-xl text-gray-400">
              📞 +40 21 555 0123
            </p>
          </div>
          <button className="px-16 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500">
        <p>© 2024 TechBridge Solutions SRL. All rights reserved.</p>
      </footer>
    </div>
  );
}
