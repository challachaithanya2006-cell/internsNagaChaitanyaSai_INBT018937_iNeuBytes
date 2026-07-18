import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
      <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-teal-600 text-white px-5 py-3 rounded-xl">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
