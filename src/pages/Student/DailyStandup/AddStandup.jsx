import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiCalendar, FiClock, FiGithub, FiAlertCircle,
  FiCheckCircle, FiTarget, FiSend, FiArrowLeft, FiExternalLink,
} from "react-icons/fi";

const todayStr = () => new Date().toISOString().split("T")[0];

const INITIAL = {
  date: todayStr(),
  yesterday: "",
  today: "",
  blockers: "",
  github: "",
  liveLink: "",
  hours: "",
};

function Label({ icon: Icon, color, children }) {
  return (
    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5">
      <Icon size={13} style={{ color }} />
      {children}
    </label>
  );
}

const inputBase =
  "w-full bg-white border border-gray-200 rounded-lg text-gray-900 px-3 py-2.5 text-sm outline-none resize-y box-border transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100";

const inputError =
  "border-red-400 focus:border-red-400 focus:ring-red-100";

export default function AddStandup({ onSubmit }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});

  function set(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const e = {};
    if (!form.yesterday.trim()) e.yesterday = "Required — tell us what you worked on yesterday.";
    if (!form.today.trim())     e.today     = "Required — tell us what you're working on today.";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onSubmit?.({ ...form, id: Date.now(), hours: parseFloat(form.hours) || 0 });
    navigate("/student-dashbaord/standup");
  }

  return (
    <>
      <div className="min-h-screen sm:px-3 sm:py-3">
        <div className="mx-auto">

          {/* Back */}
          <button
            onClick={() => navigate("/student-dashboard/standup")}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-6 bg-transparent border-none cursor-pointer p-0 font-medium"
            style={{ fontFamily:"'DM Sans',sans-serif" }}
          >
            <FiArrowLeft size={15} /> Back to Standups
          </button>

          {/* Card */}
          <div className="bg-white rounded-2xl px-5 py-6 sm:p-8" style={{ boxShadow:"0 2px 16px rgba(0,0,0,0.08)" }}>

            <div className="mb-6 sm:mb-7">
              <h1 className="m-0 mb-1 text-xl sm:text-2xl font-extrabold text-gray-900" style={{ fontFamily:"'Syne',sans-serif" }}>
                Add Standup
              </h1>
              <p className="m-0 text-sm text-gray-400">Log what you worked on today</p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">

              {/* Date + Hours */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label icon={FiCalendar} color="#7c3aed">Date</Label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => set("date", e.target.value)}
                    className={inputBase}
                    style={{ height:42 }}
                  />
                </div>
                <div>
                  <Label icon={FiClock} color="#f59e0b">Hours Worked</Label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    placeholder="e.g. 6"
                    value={form.hours}
                    onChange={e => set("hours", e.target.value)}
                    className={inputBase}
                    style={{ height:42 }}
                  />
                </div>
              </div>

              {/* Yesterday */}
              <div>
                <Label icon={FiCheckCircle} color="#10b981">Yesterday</Label>
                <textarea
                  rows={3}
                  placeholder="What did you work on yesterday?"
                  value={form.yesterday}
                  onChange={e => set("yesterday", e.target.value)}
                  className={`${inputBase} ${errors.yesterday ? inputError : ""}`}
                />
                {errors.yesterday && <p className="m-0 mt-1 text-xs text-red-500">{errors.yesterday}</p>}
              </div>

              {/* Today */}
              <div>
                <Label icon={FiTarget} color="#7c3aed">Today</Label>
                <textarea
                  rows={3}
                  placeholder="What are you working on today?"
                  value={form.today}
                  onChange={e => set("today", e.target.value)}
                  className={`${inputBase} ${errors.today ? inputError : ""}`}
                />
                {errors.today && <p className="m-0 mt-1 text-xs text-red-500">{errors.today}</p>}
              </div>

              {/* Blockers */}
              <div>
                <Label icon={FiAlertCircle} color="#ef4444">
                  Blockers <span className="text-gray-300 font-normal ml-1">(optional)</span>
                </Label>
                <textarea
                  rows={2}
                  placeholder="Any blockers? Leave empty if none."
                  value={form.blockers}
                  onChange={e => set("blockers", e.target.value)}
                  className={inputBase}
                />
              </div>

              {/* GitHub + Live Link — stack on mobile, side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label icon={FiGithub} color="#6b7280">
                    GitHub <span className="text-gray-300 font-normal ml-1">(optional)</span>
                  </Label>
                  <input
                    type="url"
                    placeholder="https://github.com/..."
                    value={form.github}
                    onChange={e => set("github", e.target.value)}
                    className={inputBase}
                    style={{ height:42 }}
                  />
                </div>
                <div>
                  <Label icon={FiExternalLink} color="#2563eb">
                    Live Link <span className="text-gray-300 font-normal ml-1">(optional)</span>
                  </Label>
                  <input
                    type="url"
                    placeholder="https://myproject.vercel.app"
                    value={form.liveLink}
                    onChange={e => set("liveLink", e.target.value)}
                    className={inputBase}
                    style={{ height:42 }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <button
                  onClick={() => navigate(-1)}
                  className="sm:flex-1 w-full py-3 rounded-xl border border-gray-200 bg-white text-gray-500 text-sm font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
                  style={{ fontFamily:"'DM Sans',sans-serif" }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="sm:flex-1 w-full py-3 rounded-xl border-none text-white text-sm font-bold cursor-pointer flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    background: "linear-gradient(135deg,#7c3aed,#9333ea)",
                    boxShadow: "0 4px 14px rgba(124,58,237,0.35)",
                  }}
                >
                  <FiSend size={14} /> Submit Standup
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}