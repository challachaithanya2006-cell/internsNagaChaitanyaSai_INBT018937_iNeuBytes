import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const DoctorDashboard = () => (
  <DashboardLayout role="doctor">
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Doctor Dashboard</h1>
        <p className="text-slate-600 mt-2">View your schedule, patient list, and treatment notes.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold">Today’s Patients</h3>
          <p className="mt-2 text-slate-600">4 appointments scheduled</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold">Pending Approvals</h3>
          <p className="mt-2 text-slate-600">2 requests needing review</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default DoctorDashboard;
