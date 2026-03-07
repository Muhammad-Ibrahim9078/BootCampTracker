// ─── DUMMY DATA ───────────────────────────────────────────────
// Baad mein API se aayega
const assignments = [
  {
    id: 1,
    title: "React Hooks Task",
    domain: "Web & App Dev",
    deadline: "Dec 30, 2024",
    submitted: 18,
    total: 24,
    status: "active",
  },
  {
    id: 2,
    title: "Neural Network Report",
    domain: "AI & Data Science",
    deadline: "Dec 28, 2024",
    submitted: 10,
    total: 20,
    status: "active",
  },
  {
    id: 3,
    title: "Figma Wireframe",
    domain: "UI/UX Design",
    deadline: "Dec 25, 2024",
    submitted: 15,
    total: 15,
    status: "expired",
  },
  {
    id: 4,
    title: "REST API Integration",
    domain: "Web & App Dev",
    deadline: "Dec 22, 2024",
    submitted: 22,
    total: 24,
    status: "expired",
  },
  {
    id: 5,
    title: "Data Cleaning Task",
    domain: "AI & Data Science",
    deadline: "Jan 5, 2025",
    submitted: 4,
    total: 20,
    status: "active",
  },
]

// ─── STATUS BADGE ─────────────────────────────────────────────
function StatusBadge({ status }) {
  const isActive = status === "active"
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
        isActive
          ? "bg-emerald-50 text-emerald-600"
          : "bg-slate-100 text-slate-400"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-400 animate-pulse" : "bg-slate-300"}`} />
      {isActive ? "Active" : "Expired"}
    </span>
  )
}

// ─── PROGRESS BAR ─────────────────────────────────────────────
function ProgressBar({ submitted, total }) {
  const pct = Math.round((submitted / total) * 100)
  const color =
    pct === 100 ? "bg-emerald-400" :
    pct >= 60   ? "bg-indigo-400"  :
    pct >= 30   ? "bg-amber-400"   :
                  "bg-rose-400"

  return (
    <div className="flex items-center gap-2.5 min-w-30">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">
        {submitted}/{total}
      </span>
    </div>
  )
}

// ─── DOMAIN BADGE ─────────────────────────────────────────────
const domainColors = {
  "Web & App Dev":   { bg: "bg-indigo-50", text: "text-indigo-500" },
  "AI & Data Science": { bg: "bg-sky-50",  text: "text-sky-500"    },
  "UI/UX Design":    { bg: "bg-amber-50",  text: "text-amber-500"  },
}

function DomainBadge({ domain }) {
  const color = domainColors[domain] || { bg: "bg-slate-100", text: "text-slate-500" }
  return (
    <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${color.bg} ${color.text}`}>
      {domain}
    </span>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function RecentAssignments() {
  const activeCount = assignments.filter(a => a.status === "active").length

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
            Recent Assignments
          </h3>
          <p className="text-xs text-slate-400">Your last 5 created assignments</p>
        </div>

        {/* Active count badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {activeCount} Active
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Title
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Domain
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Deadline
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Submissions
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {assignments.map((a) => (
              <tr
                key={a.id}
                className="hover:bg-slate-50 transition-colors duration-150"
              >
                {/* Title */}
                <td className="py-3 pr-4">
                  <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                    {a.title}
                  </span>
                </td>

                {/* Domain */}
                <td className="py-3 pr-4">
                  <DomainBadge domain={a.domain} />
                </td>

                {/* Deadline */}
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="text-slate-300 shrink-0">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xs text-slate-400 whitespace-nowrap">{a.deadline}</span>
                  </div>
                </td>

                {/* Submissions progress */}
                <td className="py-3 pr-4">
                  <ProgressBar submitted={a.submitted} total={a.total} />
                </td>

                {/* Status */}
                <td className="py-3">
                  <StatusBadge status={a.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
        <button className="text-xs font-semibold text-indigo-500 hover:text-indigo-700 transition-colors">
          View all assignments →
        </button>
      </div>

    </div>
  )
}