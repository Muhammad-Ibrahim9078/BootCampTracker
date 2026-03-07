import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBootcamp = () => {
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1); // go back
  };

  return (
    <div className="flex-1 min-h-screen p-6 flex justify-center items-start">
      <div className="bg-white w-full max-w-3xl rounded-xl border border-gray-200 shadow-sm p-8 mt-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Bootcamp</h2>
        
        <form className="flex flex-col gap-6">
          {/* Bootcamp Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900" htmlFor="bootcampName">
              Bootcamp Name
            </label>
            <input
              type="text"
              id="bootcampName"
              placeholder="e.g., Saylani Bootcamp 5.0"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
            />
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full uppercase"
                style={{ contentVisibility: 'visible' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900" htmlFor="endDate">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full uppercase"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Brief description of the bootcamp..."
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full min-h-[120px] resize-y"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              className="flex-grow bg-[#9B2CFF] hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Create Bootcamp
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBootcamp;
