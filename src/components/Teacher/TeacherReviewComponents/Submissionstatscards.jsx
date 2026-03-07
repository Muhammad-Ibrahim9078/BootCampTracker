import { useEffect, useState } from "react"

// ─── DATA ─────────────────────────────────────────────────────
// Baad mein API se aayega
const stats = [
  {
    label: "Total Submissions",
    value: 24,
    suffix: "Total",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#6366f1",
    light: "#eef2ff",
    barColor: "bg-indigo-500",
  },
  {
    label: "Pending Reviews",
    value: 7,
    suffix: "Pending",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#f59e0b",
    light: "#fef3c7",
    barColor: "bg-amber-400",
  },
  {
    label: "Accepted",
    value: 13,
    suffix: "Accepted",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#10b981",
    light: "#d1fae5",
    barColor: "bg-emerald-400",
  },
  {
    label: "Rejected",
    value: 4,
    suffix: "Rejected",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#ef4444",
    light: "#fee2e2",
    barColor: "bg-rose-400",
  },
]

// ─── ANIMATED NUMBER ──────────────────────────────────────────
function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [target])
  return <span>{count}</span>
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function SubmissionStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden relative cursor-default p-5 pt-6"
        >
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-[3px] ${s.barColor} rounded-t-2xl`} />

          {/* Icon + Badge */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: s.light, color: s.accent }}
            >
              {s.icon}
            </div>
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: s.light, color: s.accent }}
            >
              {s.suffix}
            </span>
          </div>

          {/* Number */}
          <div className="text-[40px] font-extrabold text-slate-900 leading-none tracking-tight mb-1">
            <AnimatedNumber target={s.value} />
          </div>

          {/* Label */}
          <p className="text-sm text-slate-400 font-medium">{s.label}</p>

        </div>
      ))}
    </div>
  )
}