import React from 'react';
import { FaChartLine, FaRegClock, FaRegUser } from 'react-icons/fa';

const StudentProgressList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      
      {/* Average Score Card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <FaChartLine className="text-green-500 text-lg" />
          <span className="text-sm font-medium text-gray-500">Average Score</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 mt-1">
          88
        </div>
      </div>

      {/* Total Hours Card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <FaRegClock className="text-blue-500 text-lg" />
          <span className="text-sm font-medium text-gray-500">Total Hours</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 mt-1">
          39.5
        </div>
      </div>

      {/* Submissions Card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <FaRegUser className="text-purple-500 text-lg" />
          <span className="text-sm font-medium text-gray-500">Submissions</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 mt-1">
          6
        </div>
      </div>

    </div>
  );
};

export default StudentProgressList;
