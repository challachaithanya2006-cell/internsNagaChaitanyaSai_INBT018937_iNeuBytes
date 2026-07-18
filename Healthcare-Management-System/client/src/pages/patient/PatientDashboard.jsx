import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const PatientDashboard = () => (
  <DashboardLayout role="patient">
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Patient Dashboard</h1>
        <p className="text-slate-600 mt-2">Book appointments, review records, and track your care journey.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-teal-600 text-white p-6 rounded-2xl">
          <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
          <p className="mt-2">2 visits this week</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold">Medical Records</h3>
          <p className="mt-2 text-slate-600">Your latest report is available.</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default PatientDashboard;
