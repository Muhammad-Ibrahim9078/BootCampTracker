import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const initialUsers = [
  { id: 1, name: "Ahmed Khan", email: "ahmed@example.com", role: "Student", domain: "Web Development", bootcamp: "Saylani Bootcamp 4.0" },
  { id: 2, name: "Sir Zia Khan", email: "zia@example.com", role: "Teacher", domain: "Web Development", bootcamp: "Saylani Bootcamp 4.0" },
  { id: 3, name: "Sara Ali", email: "sara@example.com", role: "Student", domain: "UI/UX", bootcamp: "Saylani Bootcamp 4.0" },
  { id: 4, name: "ali", email: "ali@example.com", role: "Teacher", domain: "AI", bootcamp: "Saylani Bootcamp 4.0" },
  { id: 5, name: "Fatima Noor", email: "fatima@example.com", role: "Student", domain: "AI", bootcamp: "AI Excellence Program" },
];

const roleBadge = {
  Student: "bg-blue-100 text-blue-600",
  Teacher: "bg-green-100 text-green-600",
};

function EditModal({ user, onClose, onSave }) {
  const [form, setForm] = useState({ ...user });
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Edit User</h2>
        {["name", "email", "domain", "bootcamp"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{field}</label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
          </div>
        ))}
        <div className="mb-6">
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
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition">Cancel</button>
          <button onClick={() => onSave(form)} className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition">Save</button>
        </div>
      </div>
    </div>
  );
}

// Mobile card view for each user
function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{user.email}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${roleBadge[user.role] || "bg-gray-100 text-gray-600"}`}>
          {user.role}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
        <div>
          <p className="font-semibold uppercase text-gray-400 mb-0.5">Domain</p>
          <p className="text-gray-700">{user.domain}</p>
        </div>
        <div>
          <p className="font-semibold uppercase text-gray-400 mb-0.5">Bootcamp</p>
          <p className="text-gray-700">{user.bootcamp}</p>
        </div>
      </div>
      <div className="flex gap-3 justify-end border-t border-gray-50 pt-2">
        <button onClick={() => onEdit(user)} className="flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-700 transition font-medium">
          <FiEdit2 className="w-3.5 h-3.5" /> Edit
        </button>
        <button onClick={() => onDelete(user.id)} className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-600 transition font-medium">
          <FiTrash2 className="w-3.5 h-3.5" /> Delete
        </button>
      </div>
    </div>
  );
}

export default function UserManagement() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [editUser, setEditUser] = useState(null);

  const filtered = users.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === "All Roles" || u.role === roleFilter;
    return matchSearch && matchRole;
  });

  const handleDelete = (id) => setUsers(users.filter((u) => u.id !== id));
  const handleSave = (updated) => {
    setUsers(users.map((u) => (u.id === updated.id ? updated : u)));
    setEditUser(null);
  };

  return (
    <div className="min-h-screen p-3 sm:p-6 font-sans">
      {editUser && <EditModal user={editUser} onClose={() => setEditUser(null)} onSave={handleSave} />}

      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">User Management</h1>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">Manage students and teachers</p>
          </div>
          <button
            onClick={() => navigate("add")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow transition whitespace-nowrap"
          >
            <FiPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Add User</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full sm:w-auto"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            {["All Roles", "Student", "Teacher"].map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>

        {/* Mobile: Card view */}
        <div className="flex flex-col gap-3 md:hidden">
          {filtered.length > 0
            ? filtered.map((user) => (
                <UserCard key={user.id} user={user} onEdit={setEditUser} onDelete={handleDelete} />
              ))
            : <p className="text-center py-12 text-gray-400 text-sm">No users found.</p>
          }
        </div>

        {/* Desktop: Table view */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["USER", "ROLE", "DOMAIN", "BOOTCAMP", "ACTIONS"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((user, i) => (
                <tr key={user.id} className={`border-b border-gray-50 hover:bg-gray-50/60 transition ${i === filtered.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${roleBadge[user.role] || "bg-gray-100 text-gray-600"}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.domain}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.bootcamp}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setEditUser(user)} className="text-blue-500 hover:text-blue-700 transition">
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-400 hover:text-red-600 transition">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-gray-400 text-sm">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}