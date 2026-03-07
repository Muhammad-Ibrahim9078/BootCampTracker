import React, { useState } from "react";
import { MdOutlineAnnouncement } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineDomain, MdOutlineTitle, MdOutlineDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddAnnouncement = () => {
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
    // API call hogi yahan
    navigate(-1); // ✅ submit hone ke baad back
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6"
      >
        <IoArrowBack size={18} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Card */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Top Banner */}
        <div className="bg-blue-600 px-8 py-6 flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <MdOutlineAnnouncement size={28} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Add Announcement</h2>
            <p className="text-sm text-blue-100 mt-0.5">Fill in the details to create a new announcement</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">

          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
              <MdOutlineTitle size={16} className="text-blue-500" />
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter announcement title"
              className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
              <MdOutlineDescription size={16} className="text-blue-500" />
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write announcement details..."
              rows={5}
              className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
              required
            />
          </div>

          {/* Bootcamp ID & Domain ID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                <HiOutlineOfficeBuilding size={16} className="text-blue-500" />
                Bootcamp ID
              </label>
              <input
                type="text"
                name="bootcampId"
                value={formData.bootcampId}
                onChange={handleChange}
                placeholder="e.g. BC-001"
                className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                <MdOutlineDomain size={16} className="text-blue-500" />
                Domain ID
              </label>
              <input
                type="text"
                name="domainId"
                value={formData.domainId}
                onChange={handleChange}
                placeholder="e.g. DM-101"
                className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                required
              />
            </div>
          </div>

          {/* Auto fields info */}
          <div className="border border-blue-100 bg-blue-50 rounded-xl px-5 py-4 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-1 bg-white rounded-lg py-3 px-2 border border-blue-100">
              <span className="text-lg">🔑</span>
              <span className="text-xs font-medium text-gray-600 text-center">Announcement ID</span>
              <span className="text-xs text-gray-400 text-center">Auto generated</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white rounded-lg py-3 px-2 border border-blue-100">
              <span className="text-lg">👤</span>
              <span className="text-xs font-medium text-gray-600 text-center">Created By</span>
              <span className="text-xs text-gray-400 text-center">From session</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white rounded-lg py-3 px-2 border border-blue-100">
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
              className="flex-1 bg-blue-600 text-white rounded-xl py-3 text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <MdOutlineAnnouncement size={18} />
              Add Announcement
            </button>
          </div>

        </form>
      </div>
    </div>
  );        
};

export default AddAnnouncement;