import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/common/Home';
import About from '../pages/common/About';
import Services from '../pages/common/Services';
import Contact from '../pages/common/Contact';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import PatientDashboard from '../pages/patient/PatientDashboard';
import Appointments from '../pages/patient/Appointments';
import MedicalRecords from '../pages/patient/MedicalRecords';
import DoctorDashboard from '../pages/doctor/DoctorDashboard';
import Patients from '../pages/doctor/Patients';
import Schedule from '../pages/doctor/Schedule';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageDoctors from '../pages/admin/ManageDoctors';
import ManagePatients from '../pages/admin/ManagePatients';
import Analytics from '../pages/admin/Analytics';
import NotFound from '../pages/common/NotFound';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/login" replace />;
  return children;
};

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/patient" element={<ProtectedRoute role="patient"><PatientDashboard /></ProtectedRoute>} />
        <Route path="/patient/appointments" element={<ProtectedRoute role="patient"><Appointments /></ProtectedRoute>} />
        <Route path="/patient/records" element={<ProtectedRoute role="patient"><MedicalRecords /></ProtectedRoute>} />
        <Route path="/doctor" element={<ProtectedRoute role="doctor"><DoctorDashboard /></ProtectedRoute>} />
        <Route path="/doctor/patients" element={<ProtectedRoute role="doctor"><Patients /></ProtectedRoute>} />
        <Route path="/doctor/schedule" element={<ProtectedRoute role="doctor"><Schedule /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/doctors" element={<ProtectedRoute role="admin"><ManageDoctors /></ProtectedRoute>} />
        <Route path="/admin/patients" element={<ProtectedRoute role="admin"><ManagePatients /></ProtectedRoute>} />
        <Route path="/admin/analytics" element={<ProtectedRoute role="admin"><Analytics /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
