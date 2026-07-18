import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const AdminDashboard = () => (
  <DashboardLayout role="admin">
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Admin Dashboard</h1>
        <p className="text-slate-600 mt-2">Monitor clinic operations and manage healthcare staff.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">Doctors: 18</div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">Patients: 320</div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">Appointments: 56</div>
      </div>
    </div>
  </DashboardLayout>
);

export default AdminDashboard;
