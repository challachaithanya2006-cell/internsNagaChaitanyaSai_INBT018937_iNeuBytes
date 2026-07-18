import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(form);
      login(data.user, data.token);
      toast.success('Login successful');
      navigate(`/${data.user.role}`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold mb-2">Welcome Back</h2>
        <p className="text-slate-600 mb-6">Access your healthcare dashboard</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" type="email" placeholder="Email" required className="w-full border rounded-xl p-3" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" required className="w-full border rounded-xl p-3" onChange={handleChange} />
          <button className="w-full bg-teal-600 text-white py-3 rounded-xl">Login</button>
        </form>
        <div className="mt-4 text-sm text-slate-600 flex justify-between">
          <Link to="/forgot-password" className="text-teal-600">Forgot password?</Link>
          <Link to="/register" className="text-teal-600">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
