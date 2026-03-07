import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi"


export default function AdminLogin() {
  const navigate = useNavigate()

  const [form, setForm]         = useState({ email: "", password: "" })
  const [showPass, setShowPass] = useState(false)
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const validate = () => {
    const e = {}
    if (!form.email.trim())    e.email    = "Email required"
    if (!form.password.trim()) e.password = "Password required"
    return e
  }

  const handleLogin = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setLoading(true)
    // Baad mein API call aayegi
    setTimeout(() => {
      setLoading(false)
      navigate("/admin/dashboard")
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#eef2f7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-10 py-10">

          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-8">
            <img
               src="/SMIT.png"
              alt="SMIT Logo"
              className="h-16 w-auto mb-3 object-contain"
            />
            <p className="text-sm text-slate-500 font-medium tracking-wide">
              Admin Portal
            </p>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Login</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kindly provide your email and password to access the admin portal.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FiMail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="admin@smit.com"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm text-slate-700 placeholder-slate-300 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition ${
                    errors.email ? "border-rose-300" : "border-slate-200"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <FiAlertCircle size={11} /> {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FiLock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-2.5 text-sm text-slate-700 placeholder-slate-300 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition ${
                    errors.password ? "border-rose-300" : "border-slate-200"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                >
                  {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <FiAlertCircle size={11} /> {errors.password}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 mt-1 rounded-xl bg-[#1e3a6e] hover:bg-[#162d56] active:scale-95 text-white text-sm font-bold tracking-widest uppercase transition-all duration-150 flex items-center justify-center disabled:opacity-70"
            >
              {loading ? (
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              ) : "Login"}
            </button>

            

          </div>
        </div>
      </div>
    </div>
  )
}