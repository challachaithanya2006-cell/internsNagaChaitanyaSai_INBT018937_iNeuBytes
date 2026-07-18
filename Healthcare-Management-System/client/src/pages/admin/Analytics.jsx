import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{ label: 'Appointments', data: [12, 15, 10, 18, 21], backgroundColor: '#14B8A6' }]
  };

  return (
    <DashboardLayout role="admin">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
        <Bar data={data} />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
