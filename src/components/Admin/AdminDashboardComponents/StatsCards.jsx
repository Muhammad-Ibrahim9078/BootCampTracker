import { useEffect, useState } from "react"

const stats = [
  {
    label: "Total Bootcamps",
    value: 8,
    suffix: "Active",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M12 3L2 9l10 6 10-6-10-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M2 15l10 6 10-6M2 12l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#6366f1",
    light: "#eef2ff",
    accentText: "text-indigo-600",
    barColor: "bg-indigo-500",
    trend: "+2 this month",
  },
  {
    label: "Total Students",
    value: 340,
    suffix: "Enrolled",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 21v-1a7 7 0 0114 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M19 8v6M22 11h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#0ea5e9",
    light: "#e0f2fe",
    accentText: "text-sky-500",
    barColor: "bg-sky-400",
    trend: "+28 this month",
  },
  {
    label: "Total Teachers",
    value: 24,
    suffix: "Mentors",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 10l2.5 2.5L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#f59e0b",
    light: "#fef3c7",
    accentText: "text-amber-500",
    barColor: "bg-amber-400",
    trend: "+3 this month",
  },
]

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

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden relative cursor-default p-5 pt-6"
        >
          {/* Top accent bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-[3px] ${s.barColor} rounded-t-2xl`}
          />

          {/* Icon + Badge */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
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
          <div className="text-[42px] font-extrabold text-slate-900 leading-none tracking-tight mb-1">
            <AnimatedNumber target={s.value} />
          </div>

          {/* Label */}
          <p className="text-sm text-slate-400 font-medium">{s.label}</p>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-3" />

          {/* Trend */}
          <div className="flex items-center gap-2 text-emerald-500 text-xs font-semibold">
            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 8V2M2 5l3-3 3 3" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {s.trend}
          </div>
        </div>
      ))}
    </div>
  )
}