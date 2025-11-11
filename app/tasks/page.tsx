"use client";

import { useState } from "react";
import { Filter, PlusCircle, Calendar, Search, Tag } from "lucide-react";
import Link from "next/link";

export default function TasksPage() {
  const [search, setSearch] = useState("");

  const tasks = [
    {
      id: 1,
      type: "SERIES",
      title: 'Upload new series "EN: Stranger Things"',
      date: "11 Nov. 2025",
      desc: "Added new series: Stranger Things with 2 episode(s) in TVSHOWS category (Series ID: 33)",
    },
    {
      id: 2,
      type: "VOD",
      title: 'Upload new movie "EN: Second Chorus"',
      date: "11 Nov. 2025",
      desc: "Added new VOD: Second Chorus in WESTERN category (Stream ID: 110)",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-indigo-100 p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Filter className="w-6 h-6 text-violet-600" />
            Task Manager
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Stay organized and track your team’s workflow efficiently.
          </p>
        </div>

        <Link
          href="/tasks/create"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          Create Task
        </Link>
      </header>

      {/* Filters Section */}
      <section className="bg-white/80 backdrop-blur border border-gray-100 rounded-3xl shadow-lg p-8 space-y-8">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Type", "Location", "Status", "Created by"].map((label, i) => (
            <div key={i}>
              <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                {label}
              </label>
              <select className="w-full mt-2 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none bg-white transition">
                <option value="">Select option...</option>
              </select>
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              Start Date
            </label>
            <div className="relative mt-2">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--foreground)] opacity-60 pointer-events-none" />
              <input
                type="date"
                className="pl-10 pr-3 py-2.5 text-sm w-full rounded-md border border-[color:var(--input-border)] bg-[color:var(--input-bg)] text-[color:var(--foreground)] focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              End Date
            </label>
            <div className="relative mt-2">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--foreground)] opacity-60 pointer-events-none" />
              <input
                type="date"
                className="pl-10 pr-3 py-2.5 text-sm w-full rounded-md border border-[color:var(--input-border)] bg-[color:var(--input-bg)] text-[color:var(--foreground)] focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Search + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--foreground)] opacity-60 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-3 py-2.5 text-sm w-full rounded-md border border-[color:var(--input-border)] bg-[color:var(--input-bg)] text-[color:var(--foreground)] focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent outline-none transition"
            />
          </div>
          <button
            onClick={() => setSearch("")}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            Clear Filters
          </button>
        </div>
      </section>

      {/* Tasks List */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {tasks
          .filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
            <div
              key={task.id}
              className="bg-white/90 backdrop-blur border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-[3px] transition-all duration-200 p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-gray-500">
                    <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
                      {task.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {task.date}
                    </span>
                  </div>
                </div>
                <Tag className="w-4 h-4 text-orange-400" />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {task.desc}
              </p>
            </div>
          ))}
      </section>
    </main>
  );
}
