import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import StandupFilter from '../../../components/Teacher/DailyStandUpComponent/StandupFilter';
import DailyStandUpComponentCards from '../../../components/Teacher/DailyStandUpComponent/DailyStandUpComponentCards';
import StandupSummaryCard from '../../../components/Teacher/DailyStandUpComponent/StandupSummaryCard';

const UserSpecificStandUp = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  // Comprehensive mock data for a single user
  const allStandups = [
    {
      id: 1,
      date: '2026-03-07',
      hours: 6,
      yesterdayWork: 'Implemented the new Daily Standup redesign layout.',
      todayPlan: 'Fix any responsive bugs and final testing.',
      blocker: 'None',
      resourceLink: 'https://github.com/student/standup-overhaul',
    },
    {
      id: 2,
      date: '2026-03-06',
      hours: 5,
      yesterdayWork: 'Learned about JWT, cookies, and session management.',
      todayPlan: 'Implement basic login/signup forms.',
      blocker: 'Need clarification on JWT vs Session authentication.',
      resourceLink: 'https://github.com/student/auth-learning',
    },
    {
      id: 3,
      date: '2026-02-28', // This would be filtered out for "7 Days"
      hours: 7,
      yesterdayWork: 'Completed the core API for assignment submissions.',
      todayPlan: 'Start working on the frontend dashboard.',
      blocker: 'Database connection issues locally.',
      resourceLink: 'https://github.com/student/api-work',
    }
  ];

  // Simple filtering logic mock
  const filteredStandups = useMemo(() => {
    if (activeFilter === 'Today') {
      return allStandups.filter(s => s.date === '2026-03-07');
    }
    if (activeFilter === '7 Days') {
      return allStandups.filter(s => s.date >= '2026-03-01');
    }
    if (activeFilter === '30 Days') {
      return allStandups.filter(s => s.date >= '2026-02-05');
    }
    return allStandups;
  }, [activeFilter]);

  // Student info mock (In reality, fetch from API)
  const studentNames = {
    '1': 'Ahmed Khan',
    '2': 'Sara Ali',
    '3': 'Ali Hassan',
    '4': 'Fatima Noor',
    '5': 'Zainab Bibi',
    '6': 'Usman Ghani',
  };
  const studentName = studentNames[userId] || 'Unknown Student';

  return (
    <div className="flex-1 min-h-screen p-6 max-w-4xl mx-auto w-full">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/teacher-dashboard/dailystandup')}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors font-medium group"
      >
        <FaArrowLeft className="group-hover:translate-x-[-2px] transition-transform" />
        Back to All Standups
      </button>

      {/* Profile/Header Section */}
      <div className="flex items-center gap-4 mb-8">
        <FaUserCircle className="text-6xl text-gray-200" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{studentName}</h1>
          <p className="text-gray-500">Student ID: {userId} • Member since Feb 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-start">
        <StandupSummaryCard total={filteredStandups.length} />
        <div className="flex flex-col justify-end h-full mb-8">
          <StandupFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Submission History</h2>
        <DailyStandUpComponentCards standups={filteredStandups} />
      </div>
    </div>
  );
};

export default UserSpecificStandUp;
