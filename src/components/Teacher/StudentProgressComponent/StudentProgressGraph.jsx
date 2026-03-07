import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StudentProgressGraph = () => {
  // Dummy data tailored to match the provided graph trends
  const data = [
    { name: 'Mar 1', hours: 6 },
    { name: 'Mar 2', hours: 7 },
    { name: 'Mar 3', hours: 8.2 },
    { name: 'Mar 4', hours: 7 },
    { name: 'Mar 5', hours: 6.5 },
    { name: 'Mar 6', hours: 5 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 w-full">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Hours Worked (Last 7 Days)</h2>
      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
          >
            {/* Dashed background grid as shown in screenshot */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            
            <XAxis 
              dataKey="name" 
              axisLine={true} 
              tickLine={true}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              stroke="#D1D5DB"
            />
            
            <YAxis 
              axisLine={true} 
              tickLine={true}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              stroke="#D1D5DB"
              domain={[0, 9]}
            />
            
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
            />
            
            <Line 
              type="linear" 
              dataKey="hours" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ r: 4, fill: '#FFFFFF', stroke: '#3B82F6', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#3B82F6', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentProgressGraph;
