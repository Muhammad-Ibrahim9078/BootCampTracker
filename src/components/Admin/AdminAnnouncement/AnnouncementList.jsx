import React, { useState } from "react";
import { MdOutlineAnnouncement } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// Dummy Data - backend se replace kar dena
const announcements = [
  {
    announcementId: "AN-001",
    title: "Class Rescheduled",
    description: "Tomorrow's class has been rescheduled to 6PM due to instructor availability.",
    bootcampId: "BC-001",
    domainId: "DM-001",
    createdBy: "Admin",
    createdAt: "2024-04-01",
  },
  {
    announcementId: "AN-002",
    title: "Assignment Deadline Extended",
    description: "The deadline for Assignment 3 has been extended to next Monday.",
    bootcampId: "BC-002",
    domainId: "DM-002",
    createdBy: "Teacher",
    createdAt: "2024-04-05",
  },
  {
    announcementId: "AN-003",
    title: "New Module Added",
    description: "A new module on TypeScript has been added to the Web Development domain.",
    bootcampId: "BC-001",
    domainId: "DM-003",
    createdBy: "Admin",
    createdAt: "2024-04-10",
  },
];

const AnnouncementList = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">

      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-50 p-2.5 rounded-xl">
          <MdOutlineAnnouncement size={24} className="text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Announcements</h2>
          <p className="text-sm text-gray-400">All added announcements</p>
        </div>
      </div>

      {/* Table */}
      <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">#</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">ID</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Title</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Bootcamp</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Domain</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Created By</th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Created At</th>
              <th className="text-center px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((item, index) => (
              <tr key={item.announcementId} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-lg">
                    {item.announcementId}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">{item.title}</td>
                <td className="px-6 py-4 text-gray-500">{item.bootcampId}</td>
                <td className="px-6 py-4 text-gray-500">{item.domainId}</td>
                <td className="px-6 py-4 text-gray-500">{item.createdBy}</td>
                <td className="px-6 py-4 text-gray-500">{item.createdAt}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelected(item)}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-500 transition-colors"
                  >
                    <HiOutlineEye size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <MdOutlineAnnouncement size={20} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Announcement Details</h3>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-700 transition-colors">
                <IoClose size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Announcement ID", value: selected.announcementId },
                { label: "Title", value: selected.title },
                { label: "Description", value: selected.description },
                { label: "Bootcamp ID", value: selected.bootcampId },
                { label: "Domain ID", value: selected.domainId },
                // { label: "Created By", value: selected.createdBy },
                // { label: "Created At", value: selected.createdAt },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</span>
                  <span className="text-sm text-gray-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="w-full mt-5 bg-blue-600 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default AnnouncementList;