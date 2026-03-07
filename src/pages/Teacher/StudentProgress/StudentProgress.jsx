import React from 'react';
import StudentProgressCard from '../../../components/Teacher/StudentProgressComponent/StudentProgressCard';
import StudentProgressList from '../../../components/Teacher/StudentProgressComponent/StudentProgressList';
import StudentProgressGraph from '../../../components/Teacher/StudentProgressComponent/StudentProgressGraph';

const StudentProgress = () => {
  return (
    <div className="flex-1 min-h-screen p-6 max-w-7xl mx-auto w-full">
      {/* Heading Section */}
      <div className="mb-8 pl-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Student Progress</h1>
        <p className="text-gray-500 text-sm">Monitor individual student performance and activity</p>
      </div>

      {/* Main Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar (Student List) */}
        <div className="w-full lg:w-[320px] shrink-0">
          <StudentProgressCard />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Row Stats */}
          <StudentProgressList />

          {/* Bottom Graph */}
          <div className="flex-1">
            <StudentProgressGraph />
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentProgress;
