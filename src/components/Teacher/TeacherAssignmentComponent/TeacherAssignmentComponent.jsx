import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaUsers, FaEdit, FaTrashAlt } from 'react-icons/fa';

const TeacherAssignmentComponent = () => {
  // dummy json for now
  const assignments = [
    {
      id: 1,
      title: 'Build a Personal Portfolio',
      status: 'Active',
      description: 'Create a responsive personal portfolio website using React and Tailwind CSS.',
      deadline: '2026-03-15 11:59 PM',
      submissions: 45,
      domain: 'Web Development',
    },
    {
      id: 2,
      title: 'JavaScript Algorithm Challenges',
      status: 'Completed',
      description: 'Solve 10 algorithm challenges focusing on arrays and objects manipulation.',
      deadline: '2026-02-28 11:59 PM',
      submissions: 112,
      domain: 'Programming',
    },
  ];

  return (
    <div className="w-full">
      {/* Assignment card List */}
      <div className="flex flex-col gap-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            {/* Top Row: Title, Icon, Badge */}
            <div className="flex items-center gap-3 mb-2">
              <FaGraduationCap className="text-blue-600 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-900">{assignment.title}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  assignment.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {assignment.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{assignment.description}</p>

            {/* Middle Row: Meta info and Tags */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>Due: {assignment.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <span>{assignment.submissions} Submissions</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                  {assignment.domain}
                </span>
              </div>
            </div>

            {/* Actions Bottom Row */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium">
                <FaEdit />
                Edit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium">
                <FaUsers />
                View Submissions
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-red-200 rounded-md text-red-600 hover:bg-red-50 transition-colors text-sm font-medium">
                <FaTrashAlt />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherAssignmentComponent;
