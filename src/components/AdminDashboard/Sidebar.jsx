// Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { BiClipboard } from "react-icons/bi";
import { RiBarChartLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // <-- Initialize navigate

  const menuItems = [
    { name: "Dashboard", icon: <AiOutlineDashboard size={20} />, path: "/dashboard" },
    { name: "Daily Standup", icon: <FaCalendarAlt size={20} />, path: "/standup" },
    { name: "Assignments", icon: <BiClipboard size={20} />, path: "/assignments" },
    { name: "My Progress", icon: <RiBarChartLine size={20} />, path: "/progress" },
    { name: "Announcements", icon: <IoMdNotificationsOutline size={20} />, path: "/announcements" },
  ];

  return (
    <div className={`bg-white shadow-md h-screen p-3 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      {/* Close / Open Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:bg-gray-200 rounded-full p-1 transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition"
            onClick={() => navigate(item.path)} // <-- Navigate to path
          >
            {item.icon}
            {isOpen && <span className="font-medium">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;