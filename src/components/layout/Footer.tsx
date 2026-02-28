"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-darker border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechBridge Solutions</h3>
            <p className="text-gray-400">Leading Romanian IT company specializing in web development and digital solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-primary">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary">Cloud Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#team" className="hover:text-primary">Team</a></li>
              <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Bd. Unirii 45, Bucharest 030167, Romania</p>
            <p className="text-gray-400 mt-2">contact@techbridge-solutions.ro</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© 2024 TechBridge Solutions SRL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
