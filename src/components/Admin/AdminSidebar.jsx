import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import SMIT from '../../../public/SMIT.png'
import {
  MdDashboard,
  MdSchool,
  MdPeople,
  MdTrackChanges,
  MdAssessment,
} from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

const navItems = [
  { label: "Dashboard", icon: <MdDashboard size={22} />, path: "dashboard" },
  { label: "Bootcamps", icon: <MdSchool size={22} />, path: "bootcamps" },
  { label: "Users", icon: <MdPeople size={22} />, path: "users" },
  { label: "Domains", icon: <MdTrackChanges size={22} />, path: "domains" },
  { label: "Reports", icon: <MdAssessment size={22} />, path: "reports" },
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
          {!collapsed && (
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="flex justify-center">
                  <img src={SMIT} alt="SMIT-ICON" className="w-35" />
                </div>
                <div className="flex items-center gap-2">
                  <GiGraduateCap size={26} className="text-blue-600" />
                  <span className="font-bold text-gray-800 text-lg whitespace-nowrap">
                    Bootcamp Tracker
                  </span>
                </div>
                <p className="text-end text-sm text-gray-600">Admin Dashboard</p>
              </div>
              {/* Less than button - only shows when sidebar is open */}
              <button
                onClick={() => setCollapsed(true)}
                className="text-gray-400 hover:text-blue-600 transition-colors bg-gray-200 p-2 rounded-full"
                title="Collapse sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          )}
          {collapsed && (
            <div className="flex items-center justify-between w-full">
              <GiGraduateCap size={26} className="text-blue-600" />
              {/* Greater than button - only shows when sidebar is collapsed */}
              <button
                onClick={() => setCollapsed(false)}
                className="text-gray-400 hover:text-blue-600 transition-colors bg-gray-200 p-2 rounded-full"
                title="Expand sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-1 mt-4 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } ${collapsed ? "justify-center" : ""}`
              }
              title={collapsed ? item.label : ""}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && (
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;