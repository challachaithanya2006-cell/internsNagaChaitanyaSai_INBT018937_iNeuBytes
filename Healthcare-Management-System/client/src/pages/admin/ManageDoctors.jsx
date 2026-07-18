import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const ManageDoctors = () => (
  <DashboardLayout role="admin">
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Manage Doctors</h2>
      <div className="space-y-3">
        <div className="border rounded-xl p-4">Dr. Maya Patel — Cardiology</div>
        <div className="border rounded-xl p-4">Dr. Daniel Kim — Neurology</div>
      </div>
    </div>
  </DashboardLayout>
);

export default ManageDoctors;
