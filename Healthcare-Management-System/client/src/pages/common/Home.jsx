import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import Footer from '../../components/Footer';

const Home = () => {
  const stats = [
    { label: 'Patients Served', value: '10k+' },
    { label: 'Expert Doctors', value: '150+' },
    { label: 'Appointments', value: '24/7' }
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-teal-600 font-semibold mb-3">Modern Healthcare Experience</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Trusted care for every patient, every day.</h1>
          <p className="text-lg text-slate-600 mb-8">A complete clinic management experience with smart scheduling, patient records, and seamless doctor collaboration.</p>
          <div className="flex gap-4">
            <Link to="/register" className="bg-teal-600 text-white px-6 py-3 rounded-xl">Get Started</Link>
            <Link to="/services" className="border border-teal-600 text-teal-700 px-6 py-3 rounded-xl">Explore Services</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-4 text-teal-700">
            <FaHeartbeat className="text-3xl" />
            <h3 className="text-xl font-semibold">Care that connects</h3>
          </div>
          <div className="grid gap-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-slate-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-slate-800">{item.value}</p>
                <p className="text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-slate-800 mb-8">Why choose us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Expert Doctors', icon: <FaUserMd /> },
            { title: 'Easy Scheduling', icon: <FaCalendarCheck /> },
            { title: 'Secure Records', icon: <FaShieldAlt /> }
          ].map((card) => (
            <div key={card.title} className="bg-white p-6 rounded-2xl shadow-md">
              <div className="text-teal-600 text-3xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-slate-600">A professional healthcare experience built for convenience and trust.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
