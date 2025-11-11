"use client";

import { useState } from "react";
import { Filter, PlusCircle, Search } from "lucide-react";
import Link from "next/link";

export default function RequestsPage() {
  const [search, setSearch] = useState("");

  const requests = []; // ممكن تضيف البيانات الحقيقية من الـ API هنا لاحقًا

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Filter className="w-6 h-6 text-orange-500" />
            Requests
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Manage, review, and resolve your requests easily.
          </p>
        </div>

        <Link
          href="/requests/create"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          Create Request
        </Link>
      </header>

      {/* Filters Section */}
      <section className="bg-white/80 backdrop-blur border border-gray-100 rounded-3xl shadow-lg p-8 space-y-8">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Assign To", "Status", "Reported"].map((label, i) => (
            <div key={i}>
              <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                {label}
              </label>

              {label === "Reported" ? (
                <div className="flex items-center gap-2 mt-3">
                  <input type="checkbox" id="reported" className="w-4 h-4" />
                  <label htmlFor="reported" className="text-sm text-gray-600">
                    Show the ones that have not been reported
                  </label>
                </div>
              ) : (
                <select className="w-full mt-2 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white transition">
                  <option value="">Select option...</option>
                </select>
              )}
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search requests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="appearance-none w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
            />
          </div>

          <button
            onClick={() => setSearch("")}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Requests List */}
      {requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16 space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
          <h3 className="text-gray-700 font-semibold text-lg">
            No Requests Found
          </h3>
          <p className="text-sm text-gray-500 text-center max-w-md">
            We couldn’t find any requests matching your search criteria. Try
            adjusting your filters or create a new one.
          </p>

          <Link
            href="/requests/create"
            className="bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            Create Request
          </Link>
        </div>
      ) : (
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white/90 backdrop-blur border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-[3px] transition-all duration-200 p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {req.title}
                </h3>
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
                  {req.status}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
