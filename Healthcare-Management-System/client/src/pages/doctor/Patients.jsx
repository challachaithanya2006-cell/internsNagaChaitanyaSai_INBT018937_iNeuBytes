import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const Patients = () => (
  <DashboardLayout role="doctor">
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Patient Management</h2>
      <div className="space-y-3">
        {['Ava Williams', 'Noah Bennett'].map((patient) => (
          <div key={patient} className="border rounded-xl p-4">
            <p className="font-medium">{patient}</p>
            <p className="text-slate-600">Medical notes updated</p>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default Patients;
