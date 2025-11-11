"use client";

import { useState } from "react";
import { Film, Search } from "lucide-react";
import Link from "next/link";

export default function MoviesPage() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: 1,
      language: "English",
      code: "EN",
      description: "View films in English",
      color: "bg-rose-100 text-rose-700",
    },
    {
      id: 2,
      language: "French",
      code: "FR",
      description: "View films in French",
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: 3,
      language: "Spanish",
      code: "ES",
      description: "View films in Spanish",
      color: "bg-fuchsia-100 text-fuchsia-700",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-fuchsia-50 p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Film className="w-6 h-6 text-rose-600" />
            Movies
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Choose your preferred movie language and explore available films.
          </p>
        </div>

        <Link
          href="/movies/create"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-fuchsia-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          + Add Movie
        </Link>
      </header>

      {/* Filters / Search */}
      <section className="bg-white/80 backdrop-blur border border-gray-100 rounded-3xl shadow-lg p-8 space-y-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="appearance-none w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-200 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
          />
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-rose-500 hover:text-fuchsia-600 transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Movies List */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {movies
          .filter((m) =>
            m.language.toLowerCase().includes(search.toLowerCase())
          )
          .map((movie) => (
            <div
              key={movie.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {movie.language}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {movie.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${movie.color}`}
                >
                  {movie.code}
                </span>
                <Link
                  href={`/movies/${movie.language.toLowerCase()}`}
                  className="text-xs font-medium text-rose-600 hover:text-fuchsia-600 transition flex items-center gap-1"
                >
                  View Movies →
                </Link>
              </div>
            </div>
          ))}
      </section>

      {/* No Movies Found */}
      {movies.filter((m) =>
        m.language.toLowerCase().includes(search.toLowerCase())
      ).length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-50">
            <Film className="w-8 h-8 text-rose-500" />
          </div>
          <h3 className="text-gray-700 font-semibold text-lg">
            No Movies Found
          </h3>
          <p className="text-sm text-gray-500 text-center max-w-md">
            Try adjusting your search or add a new movie to the library.
          </p>
          <Link
            href="/movies/create"
            className="bg-gradient-to-r from-rose-600 to-fuchsia-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            Add New Movie
          </Link>
        </div>
      )}
    </main>
  );
}
