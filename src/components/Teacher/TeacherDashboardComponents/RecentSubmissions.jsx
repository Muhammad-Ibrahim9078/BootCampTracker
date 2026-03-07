// ─── DUMMY DATA ───────────────────────────────────────────────
// Baad mein API se aayega
const submissions = [
  {
    id: 1,
    student: "Ali Hassan",
    avatar: "AH",
    assignment: "React Hooks Task",
    domain: "Web & App Dev",
    submittedAt: "2 mins ago",
    status: "pending",
  },
  {
    id: 2,
    student: "Sara Khan",
    avatar: "SK",
    assignment: "Neural Network Report",
    domain: "AI & Data Science",
    submittedAt: "18 mins ago",
    status: "reviewed",
  },
  {
    id: 3,
    student: "Usman Tariq",
    avatar: "UT",
    assignment: "Figma Wireframe",
    domain: "UI/UX Design",
    submittedAt: "1 hour ago",
    status: "pending",
  },
  {
    id: 4,
    student: "Ayesha Noor",
    avatar: "AN",
    assignment: "REST API Integration",
    domain: "Web & App Dev",
    submittedAt: "3 hours ago",
    status: "reviewed",
  },
  {
    id: 5,
    student: "Bilal Ahmed",
    avatar: "BA",
    assignment: "Data Cleaning Task",
    domain: "AI & Data Science",
    submittedAt: "5 hours ago",
    status: "pending",
  },
]

// ─── STATUS BADGE ─────────────────────────────────────────────
function StatusBadge({ status }) {
  const isPending = status === "pending"
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
        isPending
          ? "bg-amber-50 text-amber-600"
          : "bg-emerald-50 text-emerald-600"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isPending ? "bg-amber-400" : "bg-emerald-400"
        }`}
      />
      {isPending ? "Pending" : "Reviewed"}
    </span>
  )
}

// ─── AVATAR ───────────────────────────────────────────────────
const avatarColors = [
  { bg: "bg-indigo-100", text: "text-indigo-600" },
  { bg: "bg-sky-100",    text: "text-sky-600"    },
  { bg: "bg-emerald-100",text: "text-emerald-600"},
  { bg: "bg-amber-100",  text: "text-amber-600"  },
  { bg: "bg-rose-100",   text: "text-rose-600"   },
]

function Avatar({ initials, index }) {
  const color = avatarColors[index % avatarColors.length]
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${color.bg} ${color.text}`}>
      {initials}
    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function RecentSubmissions() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
            Recent Submissions
          </h3>
          <p className="text-xs text-slate-400">Last 5 student submissions</p>
        </div>

        {/* Pending count badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {submissions.filter(s => s.status === "pending").length} Pending
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Student
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Assignment
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Domain
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 pr-4">
                Time
              </th>
              <th className="text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {submissions.map((s, i) => (
              <tr
                key={s.id}
                className="hover:bg-slate-50 transition-colors duration-150 group"
              >
                {/* Student */}
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={s.avatar} index={i} />
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                      {s.student}
                    </span>
                  </div>
                </td>

                {/* Assignment */}
                <td className="py-3 pr-4">
                  <span className="text-sm text-slate-600 whitespace-nowrap">
                    {s.assignment}
                  </span>
                </td>

                {/* Domain */}
                <td className="py-3 pr-4">
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {s.domain}
                  </span>
                </td>

                {/* Time */}
                <td className="py-3 pr-4">
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {s.submittedAt}
                  </span>
                </td>

                {/* Status */}
                <td className="py-3">
                  <StatusBadge status={s.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
        <button className="text-xs font-semibold text-indigo-500 hover:text-indigo-700 transition-colors">
          View all submissions →
        </button>
      </div>

    </div>
  )
}