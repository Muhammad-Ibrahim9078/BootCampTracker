import StudentAnnouncementList from "../../../components/Student/Announcements/StudentAnnoucementlist";

const AnnouncementStudent = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-8 py-8">

      {/* Header - sirf title, koi button nahi */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Announcements</h1>
        <p className="text-sm text-gray-400 mt-1">Stay updated with the latest announcements</p>
      </div>

      <StudentAnnouncementList />

    </div>
  );
};

export default AnnouncementStudent;