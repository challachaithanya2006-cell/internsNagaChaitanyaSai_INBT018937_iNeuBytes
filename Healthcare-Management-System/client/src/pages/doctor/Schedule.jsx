import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

const Schedule = () => (
  <DashboardLayout role="doctor">
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Doctor Schedule</h2>
      <div className="space-y-3">
        <div className="border rounded-xl p-4">Monday — 09:00 to 13:00</div>
        <div className="border rounded-xl p-4">Wednesday — 11:00 to 16:00</div>
      </div>
    </div>
  </DashboardLayout>
);

export default Schedule;
