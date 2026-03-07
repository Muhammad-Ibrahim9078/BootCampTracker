import React from 'react';

const StandupFilter = ({ activeFilter, onFilterChange }) => {
  const filters = ['Today', '7 Days', '30 Days', 'All'];

  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="text-sm font-medium text-gray-500 mr-2">Filter:</span>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeFilter === filter
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default StandupFilter;
