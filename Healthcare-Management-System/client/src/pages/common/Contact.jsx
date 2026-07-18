import React from 'react';
import Footer from '../../components/Footer';

const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-slate-800 mb-6">Contact Us</h1>
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <p className="text-slate-600 mb-4">Email: support@healthcarehub.com</p>
      <p className="text-slate-600 mb-4">Phone: +1 (555) 123-4567</p>
      <p className="text-slate-600">Address: 123 Medical Avenue, Wellness City</p>
    </div>
    <Footer />
  </div>
);

export default Contact;
