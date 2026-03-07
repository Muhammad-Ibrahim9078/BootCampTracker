import { useState } from "react"
import {
  FiGithub, FiExternalLink, FiCheck, FiX, FiClock,
} from "react-icons/fi"

// ─── DUMMY DATA ───────────────────────────────────────────────
const initialSubmissions = [
  {
    id: 1,
    student: "Ali Hassan",
    avatar: "AH",
    assignment: "React Hooks Task",
    domain: "Web & App Dev",
    submittedAt: "2 hours ago",
    date: "Dec 27, 2024",
    githubRepo: "https://github.com/ali/react-hooks",
    liveDemo: "https://ali-react.vercel.app",
    status: "pending",
    feedback: "",
    score: "",
  },
  {
    id: 2,
    student: "Sara Khan",
    avatar: "SK",
    assignment: "Neural Network Report",
    domain: "AI & Data Science",
    submittedAt: "5 hours ago",
    date: "Dec 27, 2024",
    githubRepo: "https://github.com/sara/neural-net",
    liveDemo: "",
    status: "pending",
    feedback: "",
    score: "",
  },
  {
    id: 3,
    student: "Usman Tariq",
    avatar: "UT",
    assignment: "Figma Wireframe",
    domain: "UI/UX Design",
    submittedAt: "1 day ago",
    date: "Dec 26, 2024",
    githubRepo: "",
    liveDemo: "https://figma.com/usman-wireframe",
    status: "pending",
    feedback: "",
    score: "",
  },
  {
    id: 4,
    student: "Ayesha Noor",
    avatar: "AN",
    assignment: "REST API Integration",
    domain: "Web & App Dev",
    submittedAt: "1 day ago",
    date: "Dec 26, 2024",
    githubRepo: "https://github.com/ayesha/rest-api",
    liveDemo: "https://ayesha-api.vercel.app",
    status: "pending",
    feedback: "",
    score: "",
  },
  {
    id: 5,
    student: "Bilal Ahmed",
    avatar: "BA",
    assignment: "Data Cleaning Task",
    domain: "AI & Data Science",
    submittedAt: "2 days ago",
    date: "Dec 25, 2024",
    githubRepo: "https://github.com/bilal/data-clean",
    liveDemo: "",
    status: "pending",
    feedback: "",
    score: "",
  },
]

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
    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${color.bg} ${color.text}`}>
      {initials}
    </div>
  )
}

// ─── STATUS BADGE ─────────────────────────────────────────────
function StatusBadge({ status }) {
  const config = {
    pending:  { bg: "bg-amber-50",   text: "text-amber-600",  dot: "bg-amber-400",  label: "Pending"  },
    accepted: { bg: "bg-emerald-50", text: "text-emerald-600",dot: "bg-emerald-400",label: "Accepted" },
    rejected: { bg: "bg-rose-50",    text: "text-rose-600",   dot: "bg-rose-400",   label: "Rejected" },
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

// ─── SINGLE SUBMISSION CARD ───────────────────────────────────
function SubmissionCard({ submission, index, openId, setOpenId, onReject, onAccept }) {
  const isOpen = openId === submission.id
  const isPending = submission.status === "pending"

  const [feedback, setFeedback] = useState("")
  const [score, setScore] = useState("")
  const [scoreError, setScoreError] = useState("")

  const handleOpen = () => {
    setOpenId(isOpen ? null : submission.id)
    setFeedback("")
    setScore("")
    setScoreError("")
  }

  const handleCancel = () => {
    setOpenId(null)
    setFeedback("")
    setScore("")
    setScoreError("")
  }

  const handleSubmit = () => {
    const s = Number(score)
    if (!score || isNaN(s) || s < 0 || s > 100) {
      setScoreError("Score 0 se 100 ke beech hona chahiye")
      return
    }
    onAccept(submission.id, feedback, score)
    setOpenId(null)
    setFeedback("")
    setScore("")
    setScoreError("")
  }

  return (
    <div className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
      isOpen ? "border-indigo-200 shadow-md" : "border-slate-200 shadow-sm hover:shadow-md"
    }`}>

      {/* ── CARD MAIN ── */}
      <div className="p-5">
        <div className="flex items-start gap-4">

          <Avatar initials={submission.avatar} index={index} />

          <div className="flex-1 min-w-0">
            {/* Name + Status */}
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <p className="text-sm font-bold text-slate-800">{submission.student}</p>
                <p className="text-sm text-slate-500 mt-0.5">{submission.assignment}</p>
              </div>
              <StatusBadge status={submission.status} />
            </div>

            {/* Domain + Time + Date */}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <DomainBadge domain={submission.domain} />
              <FiClock size={11} className="text-slate-300" />
              <span className="text-xs text-slate-400">{submission.submittedAt}</span>
              <span className="text-slate-200">•</span>
              <span className="text-xs text-slate-400">{submission.date}</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-3 flex-wrap">
              {submission.githubRepo ? (
                <a
                  href={submission.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <FiGithub size={13} />
                  GitHub Repo
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-xs text-slate-300 cursor-not-allowed">
                  <FiGithub size={13} />
                  GitHub Repo
                </span>
              )}

              {submission.liveDemo ? (
                <a
                  href={submission.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <FiExternalLink size={13} />
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-xs text-slate-300 cursor-not-allowed">
                  <FiExternalLink size={13} />
                  Live Demo
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── ACTION BUTTONS (sirf pending pe) ── */}
        {isPending && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleOpen}
              className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-150 ${
                isOpen
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              }`}
            >
              <FiCheck size={13} />
              Accept
            </button>

            <button
              onClick={() => onReject(submission.id)}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-all duration-150"
            >
              <FiX size={13} />
              Reject
            </button>
          </div>
        )}
      </div>

      {/* ── REVIEW FORM (accordion) ── */}
      {isOpen && isPending && (
        <div className="px-5 pb-5 border-t border-indigo-100 bg-indigo-50/30">
          <div className="pt-4 flex flex-col gap-4">

            {/* Feedback */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Student ko feedback likhein..."
                rows={3}
                className="w-full text-sm text-slate-700 placeholder-slate-300 bg-white border border-slate-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
              />
            </div>

            {/* Score */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Score <span className="text-slate-400 font-normal">(0 - 100)</span>
              </label>
              <input
                type="number"
                min={0}
                max={100}
                value={score}
                onChange={(e) => { setScore(e.target.value); setScoreError("") }}
                placeholder="e.g. 85"
                className={`w-32 text-sm text-slate-700 placeholder-slate-300 bg-white border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ${
                  scoreError ? "border-rose-300 focus:ring-rose-200" : "border-slate-200 focus:border-indigo-300"
                }`}
              />
              {scoreError && (
                <p className="text-xs text-rose-500 mt-1">{scoreError}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleSubmit}
                className="flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-sm"
              >
                <FiCheck size={13} />
                Submit Review
              </button>
              <button
                onClick={handleCancel}
                className="text-xs font-semibold px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function SubmissionList() {
  const [submissions, setSubmissions] = useState(initialSubmissions)
  const [openId, setOpenId] = useState(null)

  const handleReject = (id) => {
    setSubmissions(prev =>
      prev.map(s => s.id === id ? { ...s, status: "rejected" } : s)
    )
  }

  const handleAccept = (id, feedback, score) => {
    setSubmissions(prev =>
      prev.map(s => s.id === id ? { ...s, status: "accepted", feedback, score } : s)
    )
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">Submissions</h3>
        </div>
      </div>

      {/* Cards */}
      {submissions.map((s, i) => (
        <SubmissionCard
          key={s.id}
          submission={s}
          index={i}
          openId={openId}
          setOpenId={setOpenId}
          onReject={handleReject}
          onAccept={handleAccept}
        />
      ))}

    </div>
  )
}