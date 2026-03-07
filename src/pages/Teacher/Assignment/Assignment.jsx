import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TeacherAssignmentComponent from '../../../components/Teacher/TeacherAssignmentComponent/TeacherAssignmentComponent';

const Assignment = () => {
  const navigate = useNavigate();

  const handleCreateAssignment = () => {
    navigate('/teacher-dashboard/create-assignment');
  };

  return (
    <div className="flex-1 min-h-screen p-6 max-w-6xl mx-auto w-full">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Assignments Management</h1>
          <p className="text-gray-500 text-sm">Create and manage student assignments</p>
        </div>
        <button 
          onClick={handleCreateAssignment}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-colors"
        >
          <FaPlus />
          Create Assignment
        </button>
      </div>

      <TeacherAssignmentComponent />
    </div>
  );
};

export default Assignment;
