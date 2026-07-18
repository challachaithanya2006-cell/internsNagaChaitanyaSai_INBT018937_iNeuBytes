import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendarCheck, FaFileMedical, FaUserMd, FaUsers, FaChartBar } from 'react-icons/fa';

const Sidebar = ({ role }) => {
  const links = {
    patient: [
      { to: '/patient', label: 'Dashboard', icon: <FaHome /> },
      { to: '/patient/appointments', label: 'Appointments', icon: <FaCalendarCheck /> },
      { to: '/patient/records', label: 'Records', icon: <FaFileMedical /> }
    ],
    doctor: [
      { to: '/doctor', label: 'Dashboard', icon: <FaHome /> },
      { to: '/doctor/patients', label: 'Patients', icon: <FaUsers /> },
      { to: '/doctor/schedule', label: 'Schedule', icon: <FaCalendarCheck /> }
    ],
    admin: [
      { to: '/admin', label: 'Dashboard', icon: <FaHome /> },
      { to: '/admin/doctors', label: 'Doctors', icon: <FaUserMd /> },
      { to: '/admin/patients', label: 'Patients', icon: <FaUsers /> },
      { to: '/admin/analytics', label: 'Analytics', icon: <FaChartBar /> }
    ]
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-xl font-semibold mb-8">Control Center</h2>
      <nav className="space-y-2">
        {links[role]?.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg ${isActive ? 'bg-teal-600' : 'hover:bg-slate-800'}`}
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
