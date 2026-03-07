import React from 'react';
import { FaCheckSquare, FaEdit, FaExclamationCircle, FaLink, FaRegClock } from 'react-icons/fa';

const DailyStandUpComponentCards = ({ standups = [] }) => {
  if (!standups.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">
        No standups found for this period.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {standups.map((standup) => (
        <div key={standup.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">{standup.date}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegClock />
              <span>{standup.hours} hours</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Yesterday's Work */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FaCheckSquare className="text-green-600" />
                <span className="font-semibold text-sm italic">Yesterday's Work:</span>
              </div>
              <p className="text-gray-700 ml-6">{standup.yesterdayWork}</p>
            </div>

            {/* Today's Plan */}
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FaEdit className="text-gray-800" />
                <span className="font-semibold text-sm italic">Today's Plan:</span>
              </div>
              <p className="text-gray-700 ml-6">{standup.todayPlan}</p>
            </div>

            {/* Blocker */}
            {standup.blocker && standup.blocker !== 'None' && (
              <div className="bg-[#FFF8F1] border border-[#FFE7D1] rounded-lg p-4">
                <div className="flex items-center gap-2 text-[#E27000] mb-1">
                  <FaExclamationCircle />
                  <span className="font-semibold text-sm">Blocker:</span>
                </div>
                <p className="text-[#BF5F00] text-sm ml-6 font-medium">{standup.blocker}</p>
              </div>
            )}

            {/* Link */}
            {standup.resourceLink && (
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <FaLink className="text-gray-400 -rotate-45" />
                <a href={standup.resourceLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {standup.resourceLink}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyStandUpComponentCards;
