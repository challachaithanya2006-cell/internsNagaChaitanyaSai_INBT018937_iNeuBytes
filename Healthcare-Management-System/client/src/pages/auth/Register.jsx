import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../../services/authService';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'patient' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      toast.success('Registration successful');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold mb-2">Create Account</h2>
        <p className="text-slate-600 mb-6">Join the healthcare platform</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" required className="w-full border rounded-xl p-3" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required className="w-full border rounded-xl p-3" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" required className="w-full border rounded-xl p-3" onChange={handleChange} />
          <select name="role" className="w-full border rounded-xl p-3" onChange={handleChange} value={form.role}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
          <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Register</button>
        </form>
        <div className="mt-4 text-sm text-slate-600 text-center">
          <Link to="/login" className="text-teal-600">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
