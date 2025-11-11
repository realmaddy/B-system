"use client";

import { Bell, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-violet-500" />
          Dashboard
        </h1>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-pink-500" />
        </button>
      </div>

      <div className="text-sm text-gray-600">
        Welcome back, <span className="font-semibold text-gray-900">John!</span>{" "}
        Here’s what’s happening today.
      </div>
    </header>
  );
}
