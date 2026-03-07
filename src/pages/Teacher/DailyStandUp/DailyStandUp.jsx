import React, { useState } from 'react';
import StandupSummaryCard from '../../../components/Teacher/DailyStandUpComponent/StandupSummaryCard';
import StandupFilter from '../../../components/Teacher/DailyStandUpComponent/StandupFilter';
import UserStandupCard from '../../../components/Teacher/DailyStandUpComponent/UserStandupCard';
import StandupSearchBar from '../../../components/Teacher/DailyStandUpComponent/StandupSearchBar';

const DailyStandUp = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for users who submitted standups
  const submittedUsers = [
    { id: '1', name: 'Ahmed Khan', submissions: 12 },
    { id: '2', name: 'Sara Ali', submissions: 15 },
    { id: '3', name: 'Ali Hassan', submissions: 8 },
    { id: '4', name: 'Fatima Noor', submissions: 10 },
    { id: '5', name: 'Zainab Bibi', submissions: 14 },
    { id: '6', name: 'Usman Ghani', submissions: 9 },
  ];

  // Filtering logic
  const filteredUsers = submittedUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 min-h-screen p-6 max-w-6xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Daily Standups</h1>
        <p className="text-gray-500 text-sm">Monitor daily activity and progress of students</p>
      </div>

      {/* Summary Section */}
      <StandupSummaryCard total={68} />

      {/* Filter and User List Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Student Submissions</h2>
          <StandupFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <StandupSearchBar value={searchTerm} onChange={setSearchTerm} />

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <UserStandupCard key={user.id} user={user} />
          ))}
        </div>
        
        {filteredUsers.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No students found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyStandUp;
