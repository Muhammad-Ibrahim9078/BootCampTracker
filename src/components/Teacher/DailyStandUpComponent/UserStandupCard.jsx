import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaUserCircle } from 'react-icons/fa';

const UserStandupCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/teacher-dashboard/dailystandup/${user.id}`)}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
    >
      <div className="flex items-center gap-4">
        <FaUserCircle className="text-3xl text-gray-300 group-hover:text-blue-500 transition-colors" />
        <div>
          <h3 className="font-bold text-gray-900">{user.name}</h3>
          <p className="text-xs text-gray-500">{user.submissions} Submissions</p>
        </div>
      </div>
      <FaChevronRight className="text-gray-300 group-hover:text-blue-500 transition-all translate-x-0 group-hover:translate-x-1" />
    </div>
  );
};

export default UserStandupCard;
