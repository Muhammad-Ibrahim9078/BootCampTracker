import React from 'react'
import TeacherStatsCards from '../../../components/Teacher/TeacherDashboardComponents/TeacherStatsCards'
import RecentSubmissions from '../../../components/Teacher/TeacherDashboardComponents/RecentSubmissions'
import RecentAssignments from '../../../components/Teacher/TeacherDashboardComponents/RecentAssignments'

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* ── HEADER ── */}
      <div className="flex items-center justify-between px-8 pt-8 pb-2">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Teacher Dashboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Welcome back — here's your overview for today
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
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm border border-emerald-200">
            T
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="mx-8 mt-4 mb-6 h-px bg-slate-200" />

      {/* ── CONTENT ── */}
      <div className="px-8 pb-10 flex flex-col gap-6">

        {/* Stats Cards — 3 in one row */}
        <TeacherStatsCards />

        {/* Recent Assignments — full width */}
        <RecentAssignments />

        {/* Recent Submissions — full width */}
        <RecentSubmissions />

      </div>
    </div>
  )
}

export default TeacherDashboard