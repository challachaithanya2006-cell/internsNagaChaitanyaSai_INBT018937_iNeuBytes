import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHeartbeat } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-teal-700 font-semibold text-xl">
          <FaHeartbeat className="text-2xl" />
          HealthCare Hub
        </Link>
        <div className="flex items-center gap-4 text-sm text-slate-700">
          <Link to="/about" className="hover:text-teal-600">About</Link>
          <Link to="/services" className="hover:text-teal-600">Services</Link>
          <Link to="/contact" className="hover:text-teal-600">Contact</Link>
          {user ? (
            <>
              <Link to={`/${user.role}`} className="hover:text-teal-600">Dashboard</Link>
              <button onClick={handleLogout} className="bg-teal-600 text-white px-3 py-2 rounded-lg">Logout</button>
            </>
          ) : (
            <Link to="/login" className="bg-teal-600 text-white px-3 py-2 rounded-lg">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
