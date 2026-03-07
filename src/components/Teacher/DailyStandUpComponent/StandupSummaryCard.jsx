import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const StandupSummaryCard = ({ total }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8 flex items-center justify-between max-w-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <FaClipboardList className="text-blue-600 text-xl" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Standups Given</p>
          <p className="text-2xl font-bold text-gray-900">{total}</p>
        </div>
      </div>
    </div>
  );
};

export default StandupSummaryCard;
