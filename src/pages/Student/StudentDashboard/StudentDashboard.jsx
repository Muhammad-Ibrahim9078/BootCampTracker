import React from 'react'
import StudentStatsCards from '../../../components/Student/StudentDashboardComponents/StudentStatsCards'
import RecentAssignments from '../../../components/Student/StudentDashboardComponents/RecentAssignments'
import RecentFeedback from '../../../components/Student/StudentDashboardComponents/RecentFeedback'


const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* ── HEADER ── */}
      <div className="flex items-center justify-between px-8 pt-8 pb-2">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Student Dashboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Welcome back — here's your progress today
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-500 font-medium shadow-sm">
            📅{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-200">
            S
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="mx-8 mt-4 mb-6 h-px bg-slate-200" />

      {/* ── CONTENT ── */}
      <div className="px-8 pb-10 flex flex-col gap-6">

        {/* Stats Cards — 4 in one row */}
        <StudentStatsCards />

        {/* Middle Row — Assignments + Standup side by side */}
     
          <RecentAssignments />
        

        {/* Recent Feedback — full width */}
        <RecentFeedback />

      </div>
    </div>
  )
}

export default StudentDashboard