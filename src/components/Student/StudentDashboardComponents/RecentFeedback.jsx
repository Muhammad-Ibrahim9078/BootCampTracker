import { FiStar, FiMessageSquare, FiCalendar } from "react-icons/fi"

// ─── DUMMY DATA ───────────────────────────────────────────────
// Baad mein API se aayega
const feedbacks = [
  {
    id: 1,
    assignment: "React Hooks Task",
    domain: "Web & App Dev",
    score: 88,
    feedback: "Bohot acha kaam kiya hai! Hooks ka use bilkul sahi tha, lekin useEffect cleanup thodi improve kar sakte ho.",
    date: "Dec 27, 2024",
    teacher: "Sir Ahmed",
  },
  {
    id: 2,
    assignment: "Figma Wireframe",
    domain: "UI/UX Design",
    score: 74,
    feedback: "Design clean tha lekin spacing aur typography pe aur dhyan dena hoga. Overall theek tha.",
    date: "Dec 24, 2024",
    teacher: "Ma'am Sara",
  },
  {
    id: 3,
    assignment: "Data Cleaning Task",
    domain: "AI & Data Science",
    score: 91,
    feedback: "Excellent work! Data preprocessing bilkul correct tha. Missing values handle karna bohot professional tha.",
    date: "Dec 20, 2024",
    teacher: "Sir Bilal",
  },
  {
    id: 4,
    assignment: "REST API Integration",
    domain: "Web & App Dev",
    score: 65,
    feedback: "Error handling thodi weak thi. API calls sahi thi lekin edge cases handle nahi hue.",
    date: "Dec 18, 2024",
    teacher: "Sir Ahmed",
  },
]

// ─── SCORE COLOR ──────────────────────────────────────────────
function getScoreStyle(score) {
  if (score >= 85) return { bg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-emerald-400" }
  if (score >= 70) return { bg: "bg-indigo-50",  text: "text-indigo-600",  bar: "bg-indigo-400"  }
  if (score >= 50) return { bg: "bg-amber-50",   text: "text-amber-600",   bar: "bg-amber-400"   }
  return                  { bg: "bg-rose-50",    text: "text-rose-600",    bar: "bg-rose-400"    }
}

// ─── DOMAIN BADGE ─────────────────────────────────────────────
const domainColors = {
  "Web & App Dev":     { bg: "bg-indigo-50", text: "text-indigo-500" },
  "AI & Data Science": { bg: "bg-sky-50",    text: "text-sky-500"    },
  "UI/UX Design":      { bg: "bg-amber-50",  text: "text-amber-500"  },
}

function DomainBadge({ domain }) {
  const color = domainColors[domain] || { bg: "bg-slate-100", text: "text-slate-500" }
  return (
    <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${color.bg} ${color.text}`}>
      {domain}
    </span>
  )
}

// ─── SINGLE FEEDBACK CARD ─────────────────────────────────────
function FeedbackCard({ item }) {
  const scoreStyle = getScoreStyle(item.score)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5">

      {/* Top row — assignment + score */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-800 truncate">{item.assignment}</p>
          <div className="flex items-center gap-2 mt-1">
            <DomainBadge domain={item.domain} />
            <span className="text-xs text-slate-400">{item.teacher}</span>
          </div>
        </div>

        {/* Score badge */}
        <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0 ${scoreStyle.bg}`}>
          <span className={`text-xl font-extrabold leading-none ${scoreStyle.text}`}>{item.score}</span>
          <span className={`text-[10px] font-semibold ${scoreStyle.text} opacity-70`}>/100</span>
        </div>
      </div>

      {/* Score progress bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full rounded-full transition-all duration-700 ${scoreStyle.bar}`}
          style={{ width: `${item.score}%` }}
        />
      </div>

      {/* Feedback text */}
      <div className="flex items-start gap-2">
        <FiMessageSquare size={13} className="text-slate-300 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">{item.feedback}</p>
      </div>

      {/* Date */}
      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
        <FiCalendar size={11} className="text-slate-300" />
        <span className="text-xs text-slate-400">{item.date}</span>
      </div>

    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function RecentFeedback() {
  return (
    <div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
            Recent Feedback
          </h3>
          <p className="text-xs text-slate-400">Latest feedback from your teachers</p>
        </div>
        <div className="flex items-center gap-1.5 bg-indigo-50 px-3 py-1.5 rounded-full">
          <FiStar size={12} className="text-indigo-400" />
          <span className="text-xs font-semibold text-indigo-600">
            Avg:{" "}
            {Math.round(feedbacks.reduce((sum, f) => sum + f.score, 0) / feedbacks.length)}
            /100
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {feedbacks.map((item) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  )
}