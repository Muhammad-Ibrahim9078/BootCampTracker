import React, { useState } from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { IoCheckmarkDoneCircleOutline, IoClose } from "react-icons/io5";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { LuFileText, LuClock, LuLink, LuGithub } from "react-icons/lu";
import { MdOutlineDescription } from "react-icons/md";

const assignments = [
  {
    id: 1,
    title: "React Todo App",
    description: "Build a complete CRUD application using React with local storage",
    domain: "Web Development",
    deadline: "2026-03-10",
    status: "Pending",
  },
  {
    id: 2,
    title: "Authentication System",
    description: "Implement JWT-based authentication with login and signup",
    domain: "Web Development",
    deadline: "2026-03-12",
    status: "Pending",
  },
  {
    id: 3,
    title: "API Integration",
    description: "Create a weather app integrating with OpenWeather API",
    domain: "Web Development",
    deadline: "2026-03-15",
    status: "Submitted",
  },
  {
    id: 4,
    title: "Responsive Portfolio",
    description: "Build a fully responsive portfolio website using Tailwind CSS",
    domain: "Web Development",
    deadline: "2026-03-08",
    status: "Reviewed",
  },
  {
    id: 5,
    title: "Redux Counter App",
    description: "Create a counter app using Redux Toolkit for state management",
    domain: "Web Development",
    deadline: "2026-03-20",
    status: "Reviewed",
  },
];

const filters = ["All", "Pending", "Submitted", "Reviewed"];

const statusConfig = {
  Pending: {
    badge: "bg-orange-50 text-orange-500 border border-orange-200",
    icon: <BsHourglassSplit size={18} className="text-orange-400" />,
  },
  Submitted: {
    badge: "bg-blue-50 text-blue-500 border border-blue-200",
    icon: <IoCheckmarkDoneCircleOutline size={20} className="text-blue-400" />,
  },
  Reviewed: {
    badge: "bg-green-50 text-green-600 border border-green-200",
    icon: <HiOutlineBadgeCheck size={20} className="text-green-500" />,
  },
};

const StudentAssignmentList = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [submitModal, setSubmitModal] = useState(null);   // assignment obj
  const [detailModal, setDetailModal] = useState(null);   // assignment obj
  const [submitForm, setSubmitForm] = useState({
    liveUrl: "",
    githubUrl: "",
    description: "",
  });

  const filtered =
    activeFilter === "All"
      ? assignments
      : assignments.filter((a) => a.status === activeFilter);

  const handleSubmitOpen = (item) => {
    setSubmitForm({ liveUrl: "", githubUrl: "", description: "" });
    setSubmitModal(item);
  };

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    console.log("Submitted:", { assignmentId: submitModal.id, ...submitForm });
    setSubmitModal(null);
  };

  return (
    <div className="w-full flex flex-col gap-4">

      {/* Filter Tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === f
                ? "bg-blue-600 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Assignment Cards */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-12 text-center">
          <p className="text-gray-400 text-sm">No assignments found.</p>
        </div>
      ) : (
        filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">

            {/* Top Row */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2.5">
                {statusConfig[item.status].icon}
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusConfig[item.status].badge}`}>
                {item.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>

            {/* Meta */}
            <div className="flex items-center gap-5 mb-5">
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <LuFileText size={13} />
                {item.domain}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <LuClock size={13} />
                Deadline: {item.deadline}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              {item.status === "Pending" && (
                <button
                  onClick={() => handleSubmitOpen(item)}
                  className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Submit Assignment
                </button>
              )}
              <button
                onClick={() => setDetailModal(item)}
                className="border border-gray-200 text-gray-600 text-sm font-medium px-5 py-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))
      )}

      {/* ───── Submit Assignment Modal ───── */}
      {submitModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">

            {/* Banner */}
            <div className="bg-blue-600 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <IoCheckmarkDoneCircleOutline size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Submit Assignment</h3>
                  <p className="text-xs text-blue-100 mt-0.5">{submitModal.title}</p>
                </div>
              </div>
              <button onClick={() => setSubmitModal(null)} className="text-white/80 hover:text-white transition-colors">
                <IoClose size={22} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitAssignment} className="p-6 flex flex-col gap-4">

              {/* Live URL */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                  <LuLink size={15} className="text-blue-500" />
                  Live URL
                </label>
                <input
                  type="url"
                  placeholder="https://your-project.vercel.app"
                  value={submitForm.liveUrl}
                  onChange={(e) => setSubmitForm({ ...submitForm, liveUrl: e.target.value })}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                  required
                />
              </div>

              {/* GitHub URL */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                  <LuGithub size={15} className="text-blue-500" />
                  GitHub URL
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/username/repo"
                  value={submitForm.githubUrl}
                  onChange={(e) => setSubmitForm({ ...submitForm, githubUrl: e.target.value })}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                  required
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                  <MdOutlineDescription size={15} className="text-blue-500" />
                  Description
                </label>
                <textarea
                  placeholder="Briefly describe your work..."
                  value={submitForm.description}
                  onChange={(e) => setSubmitForm({ ...submitForm, description: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setSubmitModal(null)}
                  className="flex-1 border border-gray-200 text-gray-600 rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ───── View Detail Modal ───── */}
      {detailModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">

            {/* Banner */}
            <div className="bg-green-500 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <LuFileText size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Assignment Details</h3>
              </div>
              <button onClick={() => setDetailModal(null)} className="text-white/80 hover:text-white transition-colors">
                <IoClose size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-3">
              {[
                { label: "Title", value: detailModal.title },
                { label: "Description", value: detailModal.description },
                { label: "Domain", value: detailModal.domain },
                { label: "Deadline", value: detailModal.deadline },
                { label: "Status", value: detailModal.status },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</span>
                  <span className="text-sm text-gray-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => setDetailModal(null)}
                className="w-full bg-green-500 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-green-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudentAssignmentList;