"use client";

import { useState } from "react";
import { ArrowLeft, FilePlus2 } from "lucide-react";
import Link from "next/link";

interface RequestFormData {
  badge: string;
  assignedTo: string;
  source: string;
  note: string;
  status: string;
  reported: boolean;
}

export default function CreateRequestPage() {
  const [formData, setFormData] = useState<RequestFormData>({
    badge: "",
    assignedTo: "",
    source: "",
    note: "",
    status: "",
    reported: false,
  });

  // ✅ Type-safe change handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
   const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
const { name, value, type } = target;

setFormData((prev) => ({
  ...prev,
  [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
}));

  };

  // ✅ Type-safe form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Request Created:", formData);
    alert("✅ Request created successfully!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur border border-gray-100 rounded-2xl shadow-sm p-6 flex items-center justify-between mb-10">
        <h1 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
          <FilePlus2 className="w-6 h-6 text-orange-500" />
          Create Request
        </h1>

        <Link
          href="/requests"
          className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </header>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur border border-gray-100 rounded-3xl shadow-lg p-10 space-y-8 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Badge
          </label>
          <textarea
            name="badge"
            rows={3}
            value={formData.badge}
            onChange={handleChange}
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white"
            placeholder="Enter request badge or identifier..."
          />
        </div>

        {/* Assigned To & Source */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Assigned To
            </label>
            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white"
            >
              <option value="">Select option...</option>
              <option value="john">John Doe</option>
              <option value="sarah">Sarah Lee</option>
              <option value="alex">Alex Martin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Source
            </label>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Enter source URL or info..."
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white"
            />
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Note
          </label>
          <textarea
            name="note"
            rows={3}
            value={formData.note}
            onChange={handleChange}
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white"
            placeholder="Additional notes..."
          />
        </div>

        {/* Status & Reported */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white"
            >
              <option value="">Select option...</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              name="reported"
              checked={formData.reported}
              onChange={handleChange}
              className="w-4 h-4 accent-orange-500"
            />
            <label className="text-sm font-medium text-gray-700">
              Reported
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4 pt-6 border-t border-gray-100">
          <Link
            href="/requests"
            className="text-sm font-medium text-gray-500 hover:text-gray-700 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            <FilePlus2 className="w-4 h-4" />
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
