import React from "react";
import { useNavigate } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineSchool, MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { BsLightningCharge, BsPeopleFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ───── Navbar ───── */}
      <header className="bg-white border-b border-gray-100 shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <GiGraduateCap size={32} className="text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Bootcamp Tracker</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">Features</a>
          <a href="#portals" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">Portals</a>
          <a href="#about" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">About</a>
        </nav>
      </header>

      {/* ───── Hero ───── */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24 bg-white border-b border-gray-100">
        <div className="bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          All-in-one Bootcamp Management
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight max-w-3xl mb-5">
          Track. Learn. <span className="text-blue-600">Grow.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
          A unified platform for students, teachers, and admins to manage bootcamp progress, assignments, and announcements — all in one place.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/student-dashboard")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Get Started <FiArrowRight size={16} />
          </button>
          <a href="#portals" className="border border-gray-200 text-gray-600 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
            View Portals
          </a>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="px-8 py-16 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Why Bootcamp Tracker?</h2>
        <p className="text-gray-400 text-sm text-center mb-10">Everything you need to run a successful bootcamp</p>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: <BsLightningCharge size={22} className="text-blue-600" />,
              bg: "bg-blue-50",
              title: "Real-time Progress",
              desc: "Track student progress and assignment submissions in real time.",
            },
            {
              icon: <BsPeopleFill size={22} className="text-green-600" />,
              bg: "bg-green-50",
              title: "Multi-role Access",
              desc: "Separate dashboards for Admins, Teachers, and Students.",
            },
            {
              icon: <AiOutlineBarChart size={22} className="text-orange-500" />,
              bg: "bg-orange-50",
              title: "Insightful Reports",
              desc: "Detailed analytics and reports to monitor bootcamp performance.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 flex flex-col gap-3">
              <div className={`${f.bg} w-11 h-11 rounded-xl flex items-center justify-center`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Portals ───── */}
      <section id="portals" className="px-8 py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Choose Your Portal</h2>
          <p className="text-gray-400 text-sm text-center mb-10">Select your role to access your dashboard</p>

          <div className="grid grid-cols-3 gap-6">

            {/* Student */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <MdOutlineSchool size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Student Portal</h3>
                <p className="text-sm text-gray-400">View assignments, track your progress, and stay updated with announcements.</p>
              </div>
              <button
                onClick={() => navigate("/student-dashboard")}
                className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Student Login <FiArrowRight size={15} />
              </button>
            </div>

            {/* Teacher */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="bg-green-50 p-4 rounded-2xl">
                <HiOutlineAcademicCap size={32} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Teacher Portal</h3>
                <p className="text-sm text-gray-400">Create assignments, review submissions, and monitor student progress.</p>
              </div>
              <button
                onClick={() => navigate("/teacher-dashboard")}
                className="w-full bg-green-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                Teacher Login <FiArrowRight size={15} />
              </button>
            </div>

            {/* Admin */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="bg-orange-50 p-4 rounded-2xl">
                <MdOutlineAdminPanelSettings size={32} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Admin Portal</h3>
                <p className="text-sm text-gray-400">Manage bootcamps, users, domains, and generate detailed reports.</p>
              </div>
              <button
                onClick={() => navigate("/admin-dashboard")}
                className="w-full bg-orange-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                Admin Login <FiArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer id="about" className="bg-white border-t border-gray-100 px-8 py-8 mt-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GiGraduateCap size={24} className="text-blue-600" />
            <span className="font-bold text-gray-700">Bootcamp Tracker</span>
          </div>
          <p className="text-xs text-gray-400">© 2026 Bootcamp Tracker. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#features" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">Features</a>
            <a href="#portals" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">Portals</a>
            <a href="#about" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">About</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;