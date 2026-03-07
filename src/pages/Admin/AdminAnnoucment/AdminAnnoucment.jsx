import { useNavigate } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import AnnouncementList from "../../../components/Admin/AdminAnnouncement/AnnouncementList";

const AdminAnnouncement = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 px-8 py-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin Create Announcements</h1>
          <p className="text-sm text-gray-400 mt-1">Create and manage announcements for students</p>
        </div>

        <button
          onClick={() => navigate("addAnnouncement")}
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          <IoAddOutline size={20} />
          Create Announcement
        </button>
      </div>

      <AnnouncementList />
    </div>
  );
};

export default AdminAnnouncement;