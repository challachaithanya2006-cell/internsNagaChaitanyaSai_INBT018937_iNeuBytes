import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const ManagePatients = () => (
  <DashboardLayout role="admin">
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Manage Patients</h2>
      <div className="space-y-3">
        <div className="border rounded-xl p-4">Ava Williams — Active</div>
        <div className="border rounded-xl p-4">Noah Bennett — Follow-up</div>
      </div>
    </div>
  </DashboardLayout>
);

export default ManagePatients;
