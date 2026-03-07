import { FaGraduationCap, FaCalendarAlt, FaUsers, FaEdit, FaTrashAlt } from 'react-icons/fa';

const AdminBootcampComponent = () => {
  // dummy json for now only
  const bootcamps = [
    {
      id: 1,
      title: 'Saylani Bootcamp 4.0',
      status: 'Active',
      description: 'Comprehensive web development and AI bootcamp',
      dateRange: '2026-01-01 to 2026-06-30',
      students: 120,
      tags: ['Web Development', 'UI/UX', 'AI', 'Data Science'],
    },
    {
      id: 2,
      title: 'Summer Intensive 2025',
      status: 'Completed',
      description: 'Summer program focusing on full-stack development',
      dateRange: '2025-06-01 to 2025-08-31',
      students: 85,
      tags: ['Web Development'],
    },
  ];

  return (
    <div className="w-full">
      {/* Bootcamp card List */}
      <div className="flex flex-col gap-6">
        {bootcamps.map((bootcamp) => (
          <div key={bootcamp.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            {/* Top Row: Title, Icon, Badge */}
            <div className="flex items-center gap-3 mb-2">
              <FaGraduationCap className="text-purple-600 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-900">{bootcamp.title}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  bootcamp.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {bootcamp.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{bootcamp.description}</p>

            {/* Middle Row: Meta info and Tags */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{bootcamp.dateRange}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <span>{bootcamp.students} Students</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {bootcamp.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
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
                Manage Students
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

export default AdminBootcampComponent;
