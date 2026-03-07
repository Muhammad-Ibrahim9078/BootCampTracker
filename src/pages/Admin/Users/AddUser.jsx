import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function AddUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", role: "Student", domain: "", bootcamp: "" });
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAdd = () => {
    try {
      const isEmpty = Object.values(form).some((v) => v.trim() === "");
      if (isEmpty) {
        showToast("error", "Please fill in all fields before submitting.");
        return;
      }

      console.log("New user:", { ...form, id: Date.now() });
      showToast("success", "User added successfully!");
      setTimeout(() => navigate("/admin-dashbaord/users"), 1500);
    } catch (err) {
      showToast("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full relative">

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-sm font-medium transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-50 border border-green-200 text-green-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          {toast.type === "success"
            ? <FiCheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            : <FiXCircle className="w-5 h-5 text-red-500 shrink-0" />
          }
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/admin-dashbaord/users")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition mb-4"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Users
        </button>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Add User</h1>
        <p className="text-gray-400 mt-1 text-sm">Fill in the details to create a new user</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="grid grid-cols-2 gap-4">
          {["name", "email", "domain", "bootcamp"].map((field) => (
            <div key={field}>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field}</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Enter ${field}`}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 mb-6">
          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Role</label>
          <select
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            {["Student", "Teacher"].map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={() => navigate("/admin-dashbaord/users")}
            className="px-4 py-2 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}