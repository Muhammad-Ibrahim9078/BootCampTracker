import { FiCalendar, FiBookOpen } from "react-icons/fi"

// ─── DUMMY DATA ───────────────────────────────────────────────
// Baad mein API se aayega
const assignments = [
  {
    id: 1,
    title: "React Hooks Task",
    domain: "Web & App Dev",
    deadline: "Dec 30, 2024",
    status: "submitted",
  },
  {
    id: 2,
    title: "Neural Network Report",
    domain: "AI & Data Science",
    deadline: "Dec 28, 2024",
    status: "pending",
  },
  {
    id: 3,
    title: "Figma Wireframe",
    domain: "UI/UX Design",
    deadline: "Dec 25, 2024",
    status: "rejected",
  },
  {
    id: 4,
    title: "REST API Integration",
    domain: "Web & App Dev",
    deadline: "Jan 5, 2025",
    status: "pending",
  },
  {
    id: 5,
    title: "Data Cleaning Task",
    domain: "AI & Data Science",
    deadline: "Jan 8, 2025",
    status: "submitted",
  },
]

// ─── STATUS BADGE ─────────────────────────────────────────────
function StatusBadge({ status }) {
  const config = {
    submitted: { bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-400", label: "Submitted" },
    pending:   { bg: "bg-amber-50",   text: "text-amber-600",   dot: "bg-amber-400",   label: "Pending"   },
    rejected:  { bg: "bg-rose-50",    text: "text-rose-600",    dot: "bg-rose-400",    label: "Rejected"  },
  }
  const c = config[status]
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${c.bg} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
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

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function RecentAssignments() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
            Recent Assignments
          </h3>
          <p className="text-xs text-slate-400">Your latest assignments</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {assignments.filter(a => a.status === "pending").length} Pending
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Assignment
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Domain
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Deadline
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
                {/* Assignment */}
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <FiBookOpen size={13} className="text-slate-400" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                      {a.title}
                    </span>
                  </div>
                </td>

                {/* Domain */}
                <td className="py-3 pr-4">
                  <DomainBadge domain={a.domain} />
                </td>

                {/* Deadline */}
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar size={12} className="text-slate-300 flex-shrink-0" />
                    <span className="text-xs text-slate-400 whitespace-nowrap">{a.deadline}</span>
                  </div>
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