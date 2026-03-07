import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiClock, FiGithub, FiAlertCircle,
  FiCheckCircle, FiPlus, FiTarget, FiChevronRight,
  FiExternalLink, FiArrowLeft,
} from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmt = s => { const d = new Date(s); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`; };

export const SEED = [
  {
    id: 1,
    date: "2026-03-06",
    yesterday: "Completed the responsive navbar and footer components using Tailwind CSS.",
    today: "Start building the hero section and card components.",
    blockers: "",
    github: "https://github.com/ahmed/portfolio",
    liveLink: "https://ahmed-portfolio.vercel.app",
    hours: 7,
  },
  {
    id: 2,
    date: "2026-03-05",
    yesterday: "Finished login and register pages with form validation.",
    today: "Work on dashboard layout and connect to the backend API.",
    blockers: "Getting a CORS error on the API endpoint.",
    github: "https://github.com/ahmed/project",
    liveLink: "https://livelink.com",
    hours: 6.5,
  },
  {
    id: 3,
    date: "2026-03-04",
    yesterday: "Set up Node.js with Express and connected MongoDB.",
    today: "Build REST API endpoints for user authentication.",
    blockers: "",
    github: "",
    liveLink: "",
    hours: 8,
  },
];

function Section({ icon: Icon, color, label, text }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={13} style={{ color }} />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
      </div>
      <p className="m-0 text-sm text-gray-700 leading-relaxed bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
        {text}
      </p>
    </div>
  );
}

function LinkRow({ icon: Icon, iconColor, label, href, display }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={13} style={{ color: iconColor }} />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-violet-600 no-underline break-all hover:underline"
      >
        {display}
        <FiExternalLink size={12} />
      </a>
    </div>
  );
}

/* ── Detail Panel ── rendered both in split-view (md+) and as full mobile view */
function DetailPanel({ selected, onBack }) {
  return (
    <div className="bg-white rounded-2xl px-4 py-5 sm:px-6 sm:py-6" style={{ boxShadow:"0 1px 4px rgba(0,0,0,0.07)" }}>

      {/* Mobile back button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-4 bg-transparent border-none cursor-pointer p-0 font-medium md:hidden"
        >
          <FiArrowLeft size={14} /> Back to list
        </button>
      )}

      <div className="flex justify-between items-start mb-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <PiGraduationCap size={26} color="#7c3aed" />
          <div>
            <h2 className="m-0 mb-1 text-lg sm:text-xl font-extrabold text-gray-900" style={{ fontFamily:"'Syne',sans-serif" }}>
              {fmt(selected.date)}
            </h2>
            <div className="flex gap-2 items-center flex-wrap">
              {selected.hours > 0 && (
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <FiClock size={12} />{selected.hours} hours
                </span>
              )}
              {selected.blockers ? (
                <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full px-2.5 py-0.5">Blocked</span>
              ) : (
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">On Track</span>
              )}
              {selected.liveLink && (
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 flex items-center gap-1">
                  <FiExternalLink size={10} /> Live
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Section icon={FiCheckCircle} color="#10b981" label="Yesterday" text={selected.yesterday} />
        <Section icon={FiTarget}      color="#7c3aed"  label="Today"     text={selected.today} />
        {selected.blockers && (
          <Section icon={FiAlertCircle} color="#ef4444" label="Blockers" text={selected.blockers} />
        )}
        {(selected.github || selected.liveLink) && (
          <div className={`grid gap-4 ${selected.github && selected.liveLink ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
            {selected.github && (
              <LinkRow
                icon={FiGithub}
                iconColor="#6b7280"
                label="GitHub"
                href={selected.github}
                display={selected.github.replace("https://github.com/", "")}
              />
            )}
            {selected.liveLink && (
              <LinkRow
                icon={FiExternalLink}
                iconColor="#2563eb"
                label="Live Link"
                href={selected.liveLink}
                display={selected.liveLink.replace(/^https?:\/\//, "")}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DailyStandup({ standups = SEED }) {
  const [selectedId, setSelectedId] = useState(null); // null = show list on mobile
  const navigate = useNavigate();

  const selected = standups.find(s => s.id === selectedId) ?? null;

  function handleSelect(id) {
    setSelectedId(id);
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-5 py-6 sm:py-9">

        {/* Header */}
        <div className="flex justify-between items-start mb-6 sm:mb-7">
          <div>
            <h1 className="m-0 mb-1 text-2xl sm:text-3xl font-extrabold text-gray-900" style={{ fontFamily:"'Syne',sans-serif" }}>
              Daily Standups
            </h1>
            <p className="m-0 text-xs sm:text-sm text-gray-500">Track and manage your daily progress</p>
          </div>
          <button
            onClick={() => navigate("add")}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border-none text-white text-xs sm:text-sm font-bold cursor-pointer transition-opacity hover:opacity-90"
            style={{
              fontFamily: "'Syne',sans-serif",
              background: "linear-gradient(135deg,#7c3aed,#9333ea)",
              boxShadow: "0 4px 16px rgba(124,58,237,0.35)",
            }}
          >
            <FiPlus size={15} />
            <span className="hidden sm:inline">Add Standup</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>

        {/* ── MOBILE: show list OR detail, never both ── */}
        <div className="md:hidden">
          {selected ? (
            <DetailPanel selected={selected} onBack={() => setSelectedId(null)} />
          ) : (
            <div className="flex flex-col gap-3">
              {standups.map(s => (
                <div
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className="bg-white rounded-2xl px-4 py-4 cursor-pointer transition-all duration-200 active:scale-98"
                  style={{ boxShadow:"0 1px 4px rgba(0,0,0,0.07)", border:"2px solid transparent" }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <PiGraduationCap size={18} color="#7c3aed" />
                      <span className="text-sm font-bold text-gray-900" style={{ fontFamily:"'Syne',sans-serif" }}>
                        {fmt(s.date)}
                      </span>
                    </div>
                    <FiChevronRight size={15} color="#d1d5db" />
                  </div>
                  <p className="m-0 mb-3 text-xs text-gray-500 leading-relaxed line-clamp-2">{s.yesterday}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {s.blockers ? (
                      <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full px-2.5 py-0.5">Blocked</span>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">On Track</span>
                    )}
                    {s.hours > 0 && (
                      <span className="text-xs text-gray-400 flex items-center gap-1"><FiClock size={11}/>{s.hours}h</span>
                    )}
                    {s.liveLink && (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 flex items-center gap-1">
                        <FiExternalLink size={10} /> Live
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── DESKTOP (md+): side-by-side list + detail ── */}
        <div className="hidden md:grid gap-5" style={{ gridTemplateColumns:"300px 1fr", alignItems:"start" }}>

          {/* List */}
          <div className="flex flex-col gap-3">
            {standups.map(s => {
              const isActive = selectedId === s.id;
              return (
                <div
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className="bg-white rounded-2xl px-5 py-4 cursor-pointer transition-all duration-200 hover:bg-gray-50"
                  style={{
                    border: isActive ? "2px solid #7c3aed" : "2px solid transparent",
                    boxShadow: isActive
                      ? "0 0 0 3px rgba(124,58,237,0.08)"
                      : "0 1px 4px rgba(0,0,0,0.07)",
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <PiGraduationCap size={20} color="#7c3aed" />
                      <span className="text-sm font-bold text-gray-900" style={{ fontFamily:"'Syne',sans-serif" }}>
                        {fmt(s.date)}
                      </span>
                    </div>
                    <FiChevronRight size={15} color={isActive ? "#7c3aed" : "#d1d5db"} />
                  </div>
                  <p className="m-0 mb-3 text-xs text-gray-500 leading-relaxed line-clamp-2">{s.yesterday}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {s.blockers ? (
                      <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-full px-2.5 py-0.5">Blocked</span>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">On Track</span>
                    )}
                    {s.hours > 0 && (
                      <span className="text-xs text-gray-400 flex items-center gap-1"><FiClock size={11}/>{s.hours}h</span>
                    )}
                    {s.liveLink && (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 flex items-center gap-1">
                        <FiExternalLink size={10} /> Live
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail */}
          {selected ? (
            <DetailPanel selected={selected} />
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-gray-300 text-sm" style={{ boxShadow:"0 1px 4px rgba(0,0,0,0.07)" }}>
              Select a standup to view details
            </div>
          )}
        </div>

      </div>
    </>
  );
}