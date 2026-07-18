import React from 'react';
import Footer from '../../components/Footer';

const About = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-slate-800 mb-4">About HealthCare Hub</h1>
    <p className="text-lg text-slate-600 mb-8">We provide modern digital healthcare management tools that help clinics, doctors, and patients work together more effectively.</p>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-slate-600">To make healthcare delivery seamless through innovation, ease of access, and high-quality patient experiences.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-slate-600">To build a dependable healthcare platform that empowers clinics to grow and patients to receive better care.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
