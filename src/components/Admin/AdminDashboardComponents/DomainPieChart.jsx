import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const domains = [
  { name: "Web & App Development", value: 120, color: "#6366f1" },
  { name: "AI & Data Science",      value: 85,  color: "#0ea5e9" },
  { name: "UI/UX Design",           value: 65,  color: "#f59e0b" },
  { name: "Cloud Computing",        value: 45,  color: "#10b981" },
  { name: "Cybersecurity",          value: 25,  color: "#ef4444" },
]

const total = domains.reduce((s, d) => s + d.value, 0)

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  const pct = ((d.value / total) * 100).toFixed(1)
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg min-w-[160px]">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
        <span className="text-xs text-slate-500">{d.name}</span>
      </div>
      <p className="text-slate-900 font-extrabold text-xl leading-none m-0">
        {d.value}
        <span className="text-sm font-semibold ml-2" style={{ color: d.color }}>{pct}%</span>
      </p>
    </div>
  )
}

export default function DomainPieChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-base font-bold text-slate-900 tracking-tight mb-0.5">Domain Distribution</p>
          <p className="text-xs text-slate-400">Students across 5 domains</p>
        </div>
        <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">
          {total} Total
        </span>
      </div>

      {/* Donut Chart */}
      <div className="relative w-full h-[210px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={domains}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              labelLine={false}
              label={false}
            >
              {domains.map((d, i) => (
                <Cell key={i} fill={d.color} opacity={0.88} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />

            {/* Center label — SVG text directly inside PieChart */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: "26px", fontWeight: 800, fill: "#0f172a" }}
            >
              {total}
            </text>
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: "11px", fill: "#94a3b8" }}
            >
              Students
            </text>

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1.5 mt-4">
        {domains.map((d, i) => {
          const pct = ((d.value / total) * 100).toFixed(1)
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
              <span className="text-xs text-slate-500 flex-1">{d.name}</span>
              <span className="text-xs font-bold text-slate-700">{d.value}</span>
              <span
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md min-w-[40px] text-center"
                style={{ color: d.color, background: `${d.color}18` }}
              >
                {pct}%
              </span>
            </div>
          )
        })}
      </div>

    </div>
  )
}