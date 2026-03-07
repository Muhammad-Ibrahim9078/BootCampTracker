import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';

const CreateAssignment = () => {
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1); // go back
  };

  return (
    <div className="flex-1 min-h-screen p-6 max-w-6xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-2/3 bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Assignment</h2>
          
          <form className="flex flex-col gap-6">
            {/* Assignment Title */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900" htmlFor="title">
                Assignment Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="e.g., Responsive Portfolio Project"
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Detailed explanation of the assignment requirements..."
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full min-h-30 resize-y"
              ></textarea>
            </div>

            {/* Domain & Deadline Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900" htmlFor="domain">
                  Domain
                </label>
                <select
                  id="domain"
                  className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full appearance-none bg-white"
                >
                  <option value="" disabled selected>Select a domain</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="ai">Artificial Intelligence</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900" htmlFor="deadline">
                  Deadline
                </label>
                <input
                  type="datetime-local"
                  id="deadline"
                  className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
                />
              </div>
            </div>

            {/* Additional Resources */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900" htmlFor="resources">
                Additional Resources
              </label>
              <textarea
                id="resources"
                placeholder="Provide helpful links or URLs here..."
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full min-h-20 resize-y"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-2">
              <button
                type="submit"
                className="grow bg-[#9B2CFF] hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Create Assignment
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

        {/* Right Side: Informative Tips Box */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#f0f7ff] border border-blue-100 rounded-xl p-6 shadow-sm sticky top-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#1e3a8a] mb-4">
              <FaLightbulb className="text-[#eab308] text-xl" />
              Tips for Creating Assignments
            </h3>
            
            <ul className="space-y-4 text-sm text-[#1e40af]">
              <li className="flex gap-2 items-start">
                <span className="font-bold text-[#2563eb] mb-1 leading-none mt-1">•</span>
                <span>Be clear and specific about what students need to accomplish</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-[#2563eb] mb-1 leading-none mt-1">•</span>
                <span>Set realistic deadlines that give students enough time to complete the work</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-[#2563eb] mb-1 leading-none mt-1">•</span>
                <span>Provide helpful resources and examples to guide students</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-[#2563eb] mb-1 leading-none mt-1">•</span>
                <span>Include evaluation criteria so students know how they'll be graded</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-[#2563eb] mb-1 leading-none mt-1">•</span>
                <span>Break complex assignments into smaller, manageable tasks</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CreateAssignment;
