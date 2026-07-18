import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const MedicalRecords = () => (
  <DashboardLayout role="patient">
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
      <div className="space-y-3">
        <div className="border rounded-xl p-4">
          <p className="font-medium">Latest Lab Results</p>
          <p className="text-slate-600">All values are within the healthy range.</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default MedicalRecords;
