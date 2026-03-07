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

      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 shadow-sm px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="flex items-center gap-2.5">
          <GiGraduateCap size={30} className="text-blue-600" />
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            Bootcamp Tracker
          </span>
        </div>

        <nav className="flex items-center justify-center gap-6 text-sm">
          <a href="#features" className="text-gray-500 hover:text-blue-600 font-medium">Features</a>
          <a href="#portals" className="text-gray-500 hover:text-blue-600 font-medium">Portals</a>
          <a href="#about" className="text-gray-500 hover:text-blue-600 font-medium">About</a>
        </nav>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => navigate("/studentlogin")}
            className="border border-blue-200 text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-50 flex items-center gap-1.5"
          >
            <MdOutlineSchool size={17} />
            Student Login
          </button>

          <button
            onClick={() => navigate("/adminlogin")}
            className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-orange-600 flex items-center gap-1.5"
          >
            <MdOutlineAdminPanelSettings size={17} />
            Admin Login
          </button>
        </div>
      </header>

      {/* Portals */}
      <section id="portals" className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-b border-gray-100">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Choose Your Portal
          </h2>

          <p className="text-gray-400 text-sm text-center mb-10">
            Select your role to access your dashboard
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Student */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4 hover:shadow-md">

              <div className="bg-blue-50 p-4 rounded-2xl">
                <MdOutlineSchool size={32} className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Student Portal
                </h3>

                <p className="text-sm text-gray-400">
                  View assignments, track your progress, and stay updated with announcements.
                </p>
              </div>

              <button
                onClick={() => navigate("/student-dashboard")}
                className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                Student Dashboard <FiArrowRight size={15} />
              </button>

            </div>

            {/* Teacher */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4 hover:shadow-md">

              <div className="bg-green-50 p-4 rounded-2xl">
                <HiOutlineAcademicCap size={32} className="text-green-600" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Teacher Portal
                </h3>

                <p className="text-sm text-gray-400">
                  Create assignments, review submissions, and monitor student progress.
                </p>
              </div>

              <button
                onClick={() => navigate("/teacher-dashboard")}
                className="w-full bg-green-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 flex items-center justify-center gap-2"
              >
                Teacher Dashboard <FiArrowRight size={15} />
              </button>

            </div>

            {/* Admin */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center gap-4 hover:shadow-md">

              <div className="bg-orange-50 p-4 rounded-2xl">
                <MdOutlineAdminPanelSettings size={32} className="text-orange-500" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Admin Portal
                </h3>

                <p className="text-sm text-gray-400">
                  Manage bootcamps, users, domains, and generate detailed reports.
                </p>
              </div>

              <button
                onClick={() => navigate("/admin-dashboard")}
                className="w-full bg-orange-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 flex items-center justify-center gap-2"
              >
                Admin Dashboard <FiArrowRight size={15} />
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 bg-white border-b border-gray-100">

        <div className="bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          All-in-one Bootcamp Management
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight max-w-3xl mb-5">
          Track. Learn. <span className="text-blue-600">Grow.</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-10">
          A unified platform for students, teachers, and admins to manage bootcamp progress, assignments, and announcements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/student-dashboard")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            Get Started <FiArrowRight size={16} />
          </button>

          <a href="#portals" className="border border-gray-200 text-gray-600 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50">
            View Portals
          </a>
        </div>

      </section>

      {/* Features */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto w-full">

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Why Bootcamp Tracker?
        </h2>

        <p className="text-gray-400 text-sm text-center mb-10">
          Everything you need to run a successful bootcamp
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-8 mt-auto">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <div className="flex items-center gap-2">
            <GiGraduateCap size={24} className="text-blue-600" />
            <span className="font-bold text-gray-700">Bootcamp Tracker</span>
          </div>

          <p className="text-xs text-gray-400">
            © 2026 Bootcamp Tracker. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#features" className="text-xs text-gray-400 hover:text-blue-600">Features</a>
            <a href="#portals" className="text-xs text-gray-400 hover:text-blue-600">Portals</a>
            <a href="#about" className="text-xs text-gray-400 hover:text-blue-600">About</a>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Landing;