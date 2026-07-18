import React from 'react';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/Loader';

const DashboardLayout = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (!user || user.role !== role) {
    return <div className="p-10 text-center">Access denied</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <Sidebar role={role} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
