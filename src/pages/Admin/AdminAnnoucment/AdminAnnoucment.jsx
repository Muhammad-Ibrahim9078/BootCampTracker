import { useNavigate } from "react-router-dom";
import { MdOutlineAnnouncement } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import AnnouncementList from "../../../components/Admin/AdminAnnouncement/AnnouncementList";

const AdminAnnouncement = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2.5 rounded-xl">
            <MdOutlineAnnouncement size={24} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Announcements</h1>
            <p className="text-sm text-gray-400">Manage all announcements</p>
          </div>
        </div>

        <button
          onClick={() => navigate("addAnnouncement")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <IoAddOutline size={18} />
          Add Announcement
        </button>
      </div>

      <AnnouncementList />

    </div>
  );
};

export default AdminAnnouncement;