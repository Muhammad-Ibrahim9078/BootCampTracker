import { useState } from "react"
import {
  FiCheckCircle, FiLock, FiGithub, FiClock,
  FiAlignLeft, FiZap, FiAlertCircle,
} from "react-icons/fi"

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function DailyStandup() {
  // true = aaj submit ho gaya, false = abhi nahi hua
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    yesterdayWork: "",
    todayPlan: "",
    blockers: "",
    githubLink: "",
    hoursWorked: "",
  })

  const [errors, setErrors] = useState({})

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  })

  // ── Validation ──
  const validate = () => {
    const e = {}
    if (!form.yesterdayWork.trim()) e.yesterdayWork = "Kal ka kaam likhein"
    if (!form.todayPlan.trim())     e.todayPlan     = "Aaj ka plan likhein"
    if (!form.hoursWorked)          e.hoursWorked   = "Hours likhein"
    return e
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
  }

  // ── SUBMITTED / LOCKED STATE ──
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
              Daily Standup
            </h3>
            <p className="text-xs text-slate-400">{today}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full">
            <FiCheckCircle size={12} />
            Submitted
          </span>
        </div>

        {/* Locked message */}
        <div className="flex flex-col items-center justify-center py-8 gap-3">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
            <FiLock size={28} className="text-emerald-400" />
          </div>
          <p className="text-sm font-semibold text-slate-700">Aaj ka standup submit ho gaya!</p>
          <p className="text-xs text-slate-400 text-center max-w-xs">
            Aap kal dobara submit kar sakte hain. Submitted standup edit nahi ho sakta.
          </p>
        </div>

        {/* Submitted data summary */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Kal ka kaam</p>
            <p className="text-xs text-slate-600 line-clamp-2">{form.yesterdayWork}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Aaj ka plan</p>
            <p className="text-xs text-slate-600 line-clamp-2">{form.todayPlan}</p>
          </div>
        </div>
      </div>
    )
  }

  // ── FORM STATE ──
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
            Daily Standup
          </h3>
          <p className="text-xs text-slate-400">{today}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Not Submitted
        </span>
      </div>

      <div className="flex flex-col gap-4">

        {/* Yesterday Work */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5">
            <FiAlignLeft size={12} className="text-slate-400" />
            Kal kya kiya?
            <span className="text-rose-400">*</span>
          </label>
          <textarea
            rows={2}
            value={form.yesterdayWork}
            onChange={(e) => handleChange("yesterdayWork", e.target.value)}
            placeholder="Kal ke tasks likhein..."
            className={`w-full text-sm text-slate-700 placeholder-slate-300 bg-white border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition ${
              errors.yesterdayWork ? "border-rose-300" : "border-slate-200"
            }`}
          />
          {errors.yesterdayWork && (
            <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
              <FiAlertCircle size={11} /> {errors.yesterdayWork}
            </p>
          )}
        </div>

        {/* Today Plan */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5">
            <FiZap size={12} className="text-slate-400" />
            Aaj kya karoge?
            <span className="text-rose-400">*</span>
          </label>
          <textarea
            rows={2}
            value={form.todayPlan}
            onChange={(e) => handleChange("todayPlan", e.target.value)}
            placeholder="Aaj ke plans likhein..."
            className={`w-full text-sm text-slate-700 placeholder-slate-300 bg-white border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition ${
              errors.todayPlan ? "border-rose-300" : "border-slate-200"
            }`}
          />
          {errors.todayPlan && (
            <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
              <FiAlertCircle size={11} /> {errors.todayPlan}
            </p>
          )}
        </div>

        {/* Blockers */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5">
            <FiAlertCircle size={12} className="text-slate-400" />
            Koi blocker?
            <span className="text-slate-300 font-normal ml-1">(optional)</span>
          </label>
          <textarea
            rows={2}
            value={form.blockers}
            onChange={(e) => handleChange("blockers", e.target.value)}
            placeholder="Koi masla ya rukawat ho tu likhein..."
            className="w-full text-sm text-slate-700 placeholder-slate-300 bg-white border border-slate-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
          />
        </div>

        {/* Bottom row — GitHub + Hours */}
        <div className="grid grid-cols-2 gap-4">

          {/* GitHub Link */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5">
              <FiGithub size={12} className="text-slate-400" />
              GitHub Link
              <span className="text-slate-300 font-normal ml-1">(optional)</span>
            </label>
            <input
              type="url"
              value={form.githubLink}
              onChange={(e) => handleChange("githubLink", e.target.value)}
              placeholder="https://github.com/..."
              className="w-full text-sm text-slate-700 placeholder-slate-300 bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
            />
          </div>

          {/* Hours Worked */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5">
              <FiClock size={12} className="text-slate-400" />
              Hours Worked
              <span className="text-rose-400">*</span>
            </label>
            <input
              type="number"
              min={1}
              max={24}
              value={form.hoursWorked}
              onChange={(e) => handleChange("hoursWorked", e.target.value)}
              placeholder="e.g. 4"
              className={`w-full text-sm text-slate-700 placeholder-slate-300 bg-white border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ${
                errors.hoursWorked ? "border-rose-300" : "border-slate-200 focus:border-indigo-300"
              }`}
            />
            {errors.hoursWorked && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <FiAlertCircle size={11} /> {errors.hoursWorked}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition-all shadow-sm mt-1"
        >
          <FiCheckCircle size={15} />
          Submit Standup
        </button>

      </div>
    </div>
  )
}