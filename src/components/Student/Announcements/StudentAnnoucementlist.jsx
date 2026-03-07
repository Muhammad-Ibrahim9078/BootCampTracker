import React, { useState } from "react";
import { MdOutlineAnnouncement } from "react-icons/md";
import { FiUser, FiCalendar } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { HiOutlineEye } from "react-icons/hi";

// Dummy Data - backend se replace karna
const announcements = [
  {
    announcementId: "AN-001",
    title: "Assignment Deadline Extended",
    description: "The React Todo App assignment deadline has been extended to March 12th. This gives you 2 extra days to polish your work.",
    bootcampId: "BC-001",
    domainId: "Web Development",
    createdBy: "Sir Zia Khan",
    createdAt: "March 5, 2026",
    tag: null,
    color: "green",
  },
  {
    announcementId: "AN-002",
    title: "Guest Lecture: Next.js Best Practices",
    description: "Join us for a special guest lecture on Next.js best practices. Date: March 8th, Time: 3 PM.",
    bootcampId: "BC-002",
    domainId: "Web Development",
    createdBy: "Sir Zia Khan",
    createdAt: "March 4, 2026",
    tag: "Important",
    color: "orange",
  },
  {
    announcementId: "AN-003",
    title: "Weekly Code Review Session",
    description: "Our weekly code review session will be held every Friday at 4 PM. Bring your code and get feedback!",
    bootcampId: "BC-001",
    domainId: "Web Development",
    createdBy: "Sir Zia Khan",
    createdAt: "March 3, 2026",
    tag: null,
    color: "green",
  },
];

const borderColor = {
  green: "border-l-green-500",
  orange: "border-l-orange-400",
};

const StudentAnnouncementList = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-4">
      {announcements.map((item) => (
        <div
          key={item.announcementId}
          className={`bg-white rounded-2xl border border-gray-100 shadow-sm border-l-4 ${borderColor[item.color]} px-6 py-5`}
        >
          {/* Tag + Title */}
          <div className="flex items-center gap-2 mb-2">
            {item.tag && (
              <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                {item.tag}
              </span>
            )}
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <FiUser size={13} />
                {item.createdBy}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <FiCalendar size={13} />
                {item.createdAt}
              </span>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {item.domainId}
              </span>
            </div>

            {/* Eye icon */}
            <button
              onClick={() => setSelected(item)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-green-50 hover:text-green-600 text-gray-500 transition-colors"
            >
              <HiOutlineEye size={17} />
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">

            {/* Modal Banner */}
            <div className="bg-green-500 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <MdOutlineAnnouncement size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Announcement Details</h3>
              </div>
              <button onClick={() => setSelected(null)} className="text-white/80 hover:text-white transition-colors">
                <IoClose size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex flex-col gap-3">
              {[
                { label: "Title", value: selected.title },
                { label: "Description", value: selected.description },
                { label: "Domain", value: selected.domainId },
                { label: "Created By", value: selected.createdBy },
                { label: "Created At", value: selected.createdAt },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</span>
                  <span className="text-sm text-gray-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => setSelected(null)}
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

export default StudentAnnouncementList;