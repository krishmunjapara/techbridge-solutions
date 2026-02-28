"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">TB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TechBridge</h3>
                <p className="text-xs text-gray-400">Solutions SRL</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading Romanian IT company delivering cutting-edge digital solutions since 2020.
            </p>
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "GitHub", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-gray-400 text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "AI/ML Integration", "DevOps", "Consulting"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 Bd. Unirii 45</li>
              <li>Bucharest 030167, Romania</li>
              <li className="pt-2">📧 contact@techbridge-solutions.ro</li>
              <li>📞 +40 21 555 0123</li>
              <li className="pt-2">🕐 Mon-Fri: 9:00-18:00 EET</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 TechBridge Solutions SRL. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
