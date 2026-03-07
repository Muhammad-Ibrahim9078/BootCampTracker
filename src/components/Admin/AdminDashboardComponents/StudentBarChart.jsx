import { ComposedChart, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { bootcamp: "Bootcamp 1", students: 20, trend: 18 },
  { bootcamp: "Bootcamp 2", students: 45, trend: 40 },
  { bootcamp: "Bootcamp 3", students: 38, trend: 42 },
  { bootcamp: "Bootcamp 4", students: 60, trend: 55 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
      <p className="text-indigo-500 font-bold text-xs mb-1">{label}</p>
      <p className="text-slate-900 font-extrabold text-xl leading-none m-0">
        {payload[0]?.value}
        <span className="text-slate-400 font-normal text-xs ml-1">students</span>
      </p>
    </div>
  )
}

export default function StudentBarChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
            Students per Bootcamp
          </p>
          <p className="text-xs text-slate-400">Enrollment count with growth trend line</p>
        </div>
        <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full">
          This Year
        </span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={data} margin={{ top: 6, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="barGradLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#818cf8" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="4 4" />

          <XAxis
            dataKey="bootcamp"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 11 }}
            tickCount={5}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc", radius: 6 }} />

          <Bar dataKey="students" fill="url(#barGradLight)" radius={[8, 8, 0, 0]} maxBarSize={54} />

          <Area
            type="monotone"
            dataKey="trend"
            stroke="#f59e0b"
            strokeWidth={2.5}
            strokeDasharray="6 3"
            fill="url(#areaGrad)"
            dot={{ fill: "#f59e0b", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#f59e0b", strokeWidth: 0 }}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex gap-5 mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="w-3 h-3 rounded bg-indigo-400 opacity-80" />
          Enrolled Students
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="w-5 border-t-2 border-dashed border-amber-400" />
          Growth Trend
        </div>
      </div>

    </div>
  )
}