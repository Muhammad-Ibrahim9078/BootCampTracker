import React, { useState } from 'react';

const StudentProgressCard = () => {
  // Dummy student data mapping the UI exactly
  const [students] = useState([
    {
      id: 1,
      name: 'Ahmed Khan',
      domain: 'Web Development',
      avg: 88,
      done: 6,
      avatarInitials: 'A',
      avatarColor: 'bg-blue-600',
    },
    {
      id: 2,
      name: 'Sara Ali',
      domain: 'Web Development',
      avg: 92,
      done: 7,
      avatarInitials: 'S',
      avatarColor: 'bg-blue-600',
    },
    {
      id: 3,
      name: 'Ali Hassan',
      domain: 'Web Development',
      avg: 85,
      done: 5,
      avatarInitials: 'A',
      avatarColor: 'bg-blue-600',
    },
    {
      id: 4,
      name: 'Fatima Noor',
      domain: 'Web Development',
      avg: 90,
      done: 7,
      avatarInitials: 'F',
      avatarColor: 'bg-blue-600',
    },
  ]);

  // Track selected card, default to first student (Ahmed)
  const [selectedStudentId, setSelectedStudentId] = useState(1);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 h-[500px] flex flex-col w-full max-w-[320px]">
      <h2 className="text-xl font-bold text-gray-900 mb-4 px-1">Students</h2>
      
      {/* Scrollable list area */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-200">
        {students.map((student) => {
          const isSelected = student.id === selectedStudentId;

          return (
            <div
              key={student.id}
              onClick={() => setSelectedStudentId(student.id)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all border ${
                isSelected 
                  ? 'border-blue-400 bg-blue-50 shadow-sm' 
                  : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-medium mr-3 ${student.avatarColor}`}>
                {student.avatarInitials}
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 truncate pr-2">{student.name}</h3>
                    <p className="text-[11px] text-gray-500 truncate">{student.domain}</p>
                  </div>
                </div>
                
                {/* Bottom Row inside card */}
                <div className="flex justify-between items-end mt-1">
                  <span className="text-[11px] text-gray-500 leading-none">Avg: {student.avg}</span>
                  <span className="text-[11px] text-gray-500 leading-none">{student.done} done</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProgressCard;
