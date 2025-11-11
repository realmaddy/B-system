"use client";

import { useState } from "react";
import { Users, Calendar, Edit2, Trash2, Search, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Page() { // 👈 الاسم ما مهمش، لكن خاصه يكون default export
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "olivermartin",
      role: "Admin",
      joined: "Nov 5, 2025",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 p-10">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Users className="w-6 h-6 text-emerald-600" />
            Users
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Manage your system users and their permissions.
          </p>
        </div>

        <Link
          href="/users/create"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          <UserPlus className="w-5 h-5" />
          Add User
        </Link>
      </header>

      {/* Search */}
      <section className="bg-white/80 backdrop-blur border border-gray-100 rounded-3xl shadow-lg p-8 space-y-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="appearance-none w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
          />
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-emerald-600 hover:text-green-600 transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Users */}
      <section className="mt-10 space-y-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 text-white flex items-center justify-center text-lg font-semibold uppercase">
                {user.name[0]}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {user.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">
                    {user.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Joined: {user.joined}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <button className="flex items-center gap-1 text-xs font-medium text-gray-700 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 transition">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
              <button className="flex items-center gap-1 text-xs font-medium text-red-600 border border-red-200 px-3 py-1.5 rounded-md hover:bg-red-50 transition">
                <Trash2 className="w-3 h-3" /> Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
