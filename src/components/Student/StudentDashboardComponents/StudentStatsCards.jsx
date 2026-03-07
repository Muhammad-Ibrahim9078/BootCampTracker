import { useEffect, useState } from "react"
import {
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiAward,
} from "react-icons/fi"

// ─── DATA ─────────────────────────────────────────────────────
// Baad mein API se aayega
const stats = [
  {
    label: "Total Assignments",
    value: 18,
    suffix: "Total",
    icon: <FiBookOpen size={20} />,
    accent: "#6366f1",
    light: "#eef2ff",
    barColor: "bg-indigo-500",
  },
  {
    label: "Submitted",
    value: 12,
    suffix: "Done",
    icon: <FiCheckCircle size={20} />,
    accent: "#10b981",
    light: "#d1fae5",
    barColor: "bg-emerald-400",
  },
  {
    label: "Pending",
    value: 6,
    suffix: "Pending",
    icon: <FiClock size={20} />,
    accent: "#f59e0b",
    light: "#fef3c7",
    barColor: "bg-amber-400",
  },
  {
    label: "Average Score",
    value: 78,
    suffix: "/ 100",
    icon: <FiAward size={20} />,
    accent: "#0ea5e9",
    light: "#e0f2fe",
    barColor: "bg-sky-400",
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
export default function StudentStatsCards() {
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