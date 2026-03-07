import AdminBootcampComponent from '../../../components/Admin/BootcampComponent/adminBootcampComponent'
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Bootcamps = () => {
  const navigate = useNavigate();

  const handleCreateBootcamp = () => {
    navigate('/admin-dashbaord/create-bootcamp');
  };

  return (
    <div className="flex-1 min-h-screen p-6 max-w-6xl mx-auto w-full">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Bootcamp Management</h1>
          <p className="text-gray-500 text-sm">Create and manage bootcamp programs</p>
        </div>
        <button 
          onClick={handleCreateBootcamp}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-colors"
        >
          <FaPlus />
          Create Bootcamp
        </button>
      </div>

      <AdminBootcampComponent />
    </div>
  )
}

export default Bootcamps
