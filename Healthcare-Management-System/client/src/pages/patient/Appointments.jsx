import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const Appointments = () => (
  <DashboardLayout role="patient">
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <div className="space-y-3">
        {['Cardiology checkup', 'Dental consultation'].map((item) => (
          <div key={item} className="border rounded-xl p-4 flex justify-between">
            <span>{item}</span>
            <span className="text-teal-600">Confirmed</span>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default Appointments;
