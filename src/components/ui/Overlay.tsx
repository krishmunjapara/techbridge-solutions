"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Overlay() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web applications with cutting-edge 3D experiences, progressive web apps, and e-commerce solutions",
      icon: "🌐",
      tech: ["React", "Next.js", "Three.js", "WebGL"]
    },
    {
      title: "Mobile Innovation",
      desc: "Native iOS and Android applications, cross-platform solutions with React Native and Flutter for seamless experiences",
      icon: "📱",
      tech: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "Cloud Architecture",
      desc: "Scalable, secure cloud infrastructure on AWS, Azure, and GCP with Docker, Kubernetes, and microservices",
      icon: "☁️",
      tech: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "AI & Machine Learning",
      desc: "Intelligent solutions powered by machine learning, natural language processing, and computer vision",
      icon: "🤖",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenAI"]
    },
    {
      title: "DevOps & CI/CD",
      desc: "Automated deployment pipelines, infrastructure as code, and continuous integration for rapid delivery",
      icon: "⚙️",
      tech: ["GitHub Actions", "Jenkins", "Terraform", "Ansible"]
    },
    {
      title: "Digital Transformation",
      desc: "End-to-end business modernization, legacy system migration, and process automation",
      icon: "🚀",
      tech: ["Microservices", "API Gateway", "Event-Driven", "Serverless"]
    }
  ];

  const projects = [
    { 
      name: "FinanceFlow Platform", 
      tech: "React, Node.js, PostgreSQL, AWS",
      desc: "Real-time financial analytics dashboard processing 1M+ transactions daily",
      metrics: "99.9% uptime, 200ms avg response"
    },
    { 
      name: "HealthSync Portal", 
      tech: "Next.js, Three.js, MongoDB",
      desc: "Patient management system with 3D medical visualization",
      metrics: "50K+ active users, HIPAA compliant"
    },
    { 
      name: "SmartCity Dashboard", 
      tech: "Vue, Python, TensorFlow, Azure",
      desc: "IoT-powered city management with AI predictions",
      metrics: "10M+ data points/day, 85% efficiency gain"
    }
  ];

  const team = [
    { name: "Adrian Popescu", role: "CEO & Founder", emoji: "👨‍💼", bio: "15+ years in software architecture, former CTO at tech unicorn" },
    { name: "Elena Ionescu", role: "CTO", emoji: "👩‍💻", bio: "PhD in Computer Science, ML expert, 50+ patents" },
    { name: "Mihai Stanescu", role: "Lead Developer", emoji: "👨‍💻", bio: "Full-stack wizard, open-source contributor, 10+ years" },
    { name: "Ana Gheorghe", role: "UI/UX Designer", emoji: "👩‍🎨", bio: "Award-winning designer, UX psychology specialist" }
  ];

  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <div className="text-center px-6 md:px-12 max-w-6xl mx-auto relative z-10">
          <div className="mb-6 inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-blue-400 text-sm font-semibold">🇷🇴 Proudly Based in Bucharest, Romania</p>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              TechBridge
            </span>
            <span className="block text-white mt-4">Solutions</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through <span className="text-blue-400 font-semibold">immersive digital experiences</span> and cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="#contact"
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Start Your Journey
            </a>
            <a
              href="#portfolio"
              className="px-12 py-5 border-2 border-white text-white text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              Explore Our Work
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">50+</p>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">30+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-400 mb-2">4+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center">
            About <span className="text-blue-500">TechBridge</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded in 2020 in Bucharest, Romania, <span className="text-white font-semibold">TechBridge Solutions</span> has rapidly become a leading force in the European IT landscape.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                We combine <span className="text-blue-400">technical excellence</span> with <span className="text-purple-400">creative innovation</span> to deliver solutions that don&apos;t just meet expectations — they exceed them.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our team of 8-12 highly skilled professionals brings expertise in web development, mobile apps, cloud architecture, and AI/ML to every project.
              </p>
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Work With Us →
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "💡", title: "Innovation First", desc: "Cutting-edge tech stack" },
                { icon: "⚡", title: "Agile Process", desc: "Fast, iterative delivery" },
                { icon: "🎯", title: "Client Focus", desc: "Your success is ours" },
                { icon: "🌍", title: "Global Reach", desc: "European & beyond" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
            Our <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Comprehensive technology solutions powered by modern frameworks and cloud infrastructure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
            Featured <span className="text-purple-500">Work</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Real results for real businesses across healthcare, finance, and public sectors
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.desc}</p>
                  <p className="text-blue-400 text-sm mb-3">{project.tech}</p>
                  <p className="text-gray-400 text-xs">{project.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
            Our <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Meet the experts driving innovation at TechBridge Solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-7xl mb-6">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 text-lg mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            Let&apos;s Build <span className="text-blue-500">Together</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-16">
            Ready to transform your vision into reality?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl mb-4">📍</p>
              <p className="text-white font-semibold mb-2">Visit Us</p>
              <p className="text-gray-400 text-sm">Bd. Unirii 45, Bucharest 030167, Romania</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl mb-4">📧</p>
              <p className="text-white font-semibold mb-2">Email</p>
              <p className="text-gray-400 text-sm">contact@techbridge-solutions.ro</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-4xl mb-4">📞</p>
              <p className="text-white font-semibold mb-2">Call</p>
              <p className="text-gray-400 text-sm">+40 21 555 0123</p>
            </div>
          </div>
          <button className="px-16 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
