"use client";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-400 text-center mb-16">Ready to transform your business? Let's talk!</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-primary mr-4 text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-400">Bd. Unirii 45, Bucharest 030167, Romania</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-4 text-2xl">📧</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">contact@techbridge-solutions.ro</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-4 text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+40 21 555 0123</p>
                </div>
              </div>
            </div>
          </div>
          <form className="glass-effect p-8 rounded-xl">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 focus:border-primary outline-none" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 focus:border-primary outline-none" />
            </div>
            <div className="mb-4">
              <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-dark rounded-lg border border-white/10 focus:border-primary outline-none"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
