import React from 'react';
import Footer from '../../components/Footer';

const Services = () => {
  const services = [
    { title: 'Appointment Scheduling', description: 'Book and manage appointments in real time.' },
    { title: 'Doctor Management', description: 'Organize doctors, availability, and specializations.' },
    { title: 'Patient Records', description: 'Store and review patient care history securely.' },
    { title: 'Reports & Analytics', description: 'Track operations with insightful dashboards.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
