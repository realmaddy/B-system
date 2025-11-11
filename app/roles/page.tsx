"use client";

import { useState } from "react";
import { Shield, Search, Edit2, Trash2, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [search, setSearch] = useState("");

  const roles = [
    {
      id: 1,
      name: "Admin",
      desc: "Full system access with all permissions",
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-600" />
            Roles & Permissions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Manage access control and user permissions.
          </p>
        </div>

        <Link
          href="/roles/create"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          Add Role
        </Link>
      </header>

      {/* Search Bar */}
      <section className="bg-white/80 backdrop-blur border border-gray-100 rounded-3xl shadow-lg p-8 space-y-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="appearance-none w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
          />
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-red-600 hover:text-rose-600 transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Roles List */}
      <section className="mt-10 space-y-6">
        {roles
          .filter((role) =>
            role.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((role) => (
            <div
              key={role.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-400 flex items-center justify-center text-white text-sm font-semibold">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2">
                    {role.name}
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${role.color}`}
                    >
                      Role
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{role.desc}</p>
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

        {/* Empty State */}
        {roles.filter((r) =>
          r.name.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <div className="flex flex-col items-center justify-center mt-20 space-y-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50">
              <Shield className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-gray-700 font-semibold text-lg">
              No Roles Found
            </h3>
            <p className="text-sm text-gray-500 text-center max-w-md">
              Try adjusting your search or add a new role to the system.
            </p>
            <Link
              href="/roles/create"
              className="bg-gradient-to-r from-red-600 to-rose-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
            >
              Add New Role
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
