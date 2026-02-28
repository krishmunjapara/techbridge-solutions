"use client";
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About TechBridge Solutions</h2>
            <p className="text-xl text-gray-300 mb-6">
              Founded in 2020, TechBridge Solutions is a dynamic Romanian IT company based in Bucharest, specializing in delivering cutting-edge digital solutions.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              With a team of 8-12 highly skilled professionals, we combine technical expertise with agile methodologies to deliver exceptional results for our clients across Europe.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-secondary mb-2">30+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              To bridge the gap between technology and business success by delivering innovative, cost-effective solutions that drive growth and transformation.
            </p>
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Agile development methodology with quick turnaround</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Competitive Eastern European pricing (30-40% cost savings)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Direct communication with founders and technical team</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Modern tech stack and best development practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
