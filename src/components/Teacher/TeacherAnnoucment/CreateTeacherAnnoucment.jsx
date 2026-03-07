import React, { useState } from "react";
import { MdOutlineAnnouncement, MdOutlineDomain, MdOutlineTitle, MdOutlineDescription } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CreateTeacherAnnoucment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    bootcampId: "",
    domainId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Announcement Data:", formData);
    navigate(-1);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-8 py-8">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-6"
      >
        <IoArrowBack size={18} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Page Title - same as list page */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teacher Create Announcement</h1>
          <p className="text-sm text-gray-400 mt-1">Fill in the details to post a new announcement</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Green Top Banner - same theme as list page */}
        <div className="bg-green-500 px-8 py-5 flex items-center gap-4">
          <div className="bg-white/20 p-2.5 rounded-xl">
            <MdOutlineAnnouncement size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Announcement Details</h2>
            <p className="text-sm text-green-100 mt-0.5">This will be visible to all students</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">

          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
              <MdOutlineTitle size={16} className="text-green-500" />
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter announcement title"
              className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-50 transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
              <MdOutlineDescription size={16} className="text-green-500" />
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write announcement details..."
              rows={5}
              className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-50 transition-all resize-none"
              required
            />
          </div>

          {/* Bootcamp ID & Domain ID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                <HiOutlineOfficeBuilding size={16} className="text-green-500" />
                Bootcamp ID
              </label>
              <input
                type="text"
                name="bootcampId"
                value={formData.bootcampId}
                onChange={handleChange}
                placeholder="e.g. BC-001"
                className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-50 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                <MdOutlineDomain size={16} className="text-green-500" />
                Domain ID
              </label>
              <input
                type="text"
                name="domainId"
                value={formData.domainId}
                onChange={handleChange}
                placeholder="e.g. DM-101"
                className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-50 transition-all"
                required
              />
            </div>
          </div>

          {/* Auto fields info */}
          <div className="border border-green-100 bg-green-50 rounded-xl px-5 py-4 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-1 bg-white rounded-xl py-3 px-2 border border-green-100">
              <span className="text-lg">🔑</span>
              <span className="text-xs font-medium text-gray-600 text-center">Announcement ID</span>
              <span className="text-xs text-gray-400 text-center">Auto generated</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white rounded-xl py-3 px-2 border border-green-100">
              <span className="text-lg">👤</span>
              <span className="text-xs font-medium text-gray-600 text-center">Created By</span>
              <span className="text-xs text-gray-400 text-center">From session</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white rounded-xl py-3 px-2 border border-green-100">
              <span className="text-lg">🕐</span>
              <span className="text-xs font-medium text-gray-600 text-center">Created At</span>
              <span className="text-xs text-gray-400 text-center">Timestamp</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={() => setFormData({ title: "", description: "", bootcampId: "", domainId: "" })}
              className="flex-1 border border-gray-200 text-gray-600 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white rounded-xl py-3 text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdOutlineAnnouncement size={18} />
              Create Announcement
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateTeacherAnnoucment;