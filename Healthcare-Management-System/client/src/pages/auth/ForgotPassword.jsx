import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
    <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-semibold mb-2">Reset Password</h2>
      <p className="text-slate-600 mb-6">Enter your email to receive reset instructions.</p>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border rounded-xl p-3" />
        <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Send Link</button>
      </form>
      <div className="mt-4 text-sm text-center">
        <Link to="/login" className="text-teal-600">Back to login</Link>
      </div>
    </div>
  </div>
);

export default ForgotPassword;
