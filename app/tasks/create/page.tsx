"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function CreateTaskPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    path: "",
    type: "",
    location: "",
    language: "",
    category: "",
    request: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Reset dependent fields automatically
    if (name === "type") {
      setFormData((prev) => ({
        ...prev,
        type: value,
        language: "",
        category: "",
      }));
    } else if (name === "language") {
      setFormData((prev) => ({
        ...prev,
        language: value,
        category: "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ Task Created:", formData);
    router.push("/tasks");
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <PlusCircle className="w-6 h-6 text-violet-500" />
          Create Task
        </h1>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-2xl shadow-lg p-8 space-y-6 transition-all duration-300 hover:shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Field */}
          {[
            { label: "Name", name: "name", placeholder: "Task name" },
            { label: "Path", name: "path", placeholder: "Task path" },
          ].map((f) => (
            <div key={f.name}>
              <label className="text-xs text-gray-500 font-medium">
                {f.label}
              </label>
              <input
                name={f.name}
                value={(formData as any)[f.name]}
                onChange={handleChange}
                placeholder={f.placeholder}
                className="w-full mt-1 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none transition"
              />
            </div>
          ))}

          {/* Type */}
          <div>
            <label className="text-xs text-gray-500 font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-1 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
            >
              <option value="">Select option...</option>
              <option value="VOD">VOD</option>
              <option value="SERIES">SERIES</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="text-xs text-gray-500 font-medium">Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
            >
              <option value="">Select option...</option>
              <option value="US">US</option>
              <option value="EU">EU</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="text-xs text-gray-500 font-medium">
              Language{" "}
              <span className="text-gray-400">(please select a type)</span>
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              disabled={!formData.type}
              className={`w-full mt-1 text-sm rounded-lg py-2.5 px-3 outline-none border transition ${
                formData.type
                  ? "border-gray-200 focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white hover:shadow-sm"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <option value="">Select option...</option>
              <option value="EN">English</option>
              <option value="FR">French</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-gray-500 font-medium">
              Category{" "}
              <span className="text-gray-400">(please select a language)</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              disabled={!formData.language}
              className={`w-full mt-1 text-sm rounded-lg py-2.5 px-3 outline-none border transition ${
                formData.language
                  ? "border-gray-200 focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white hover:shadow-sm"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <option value="">Select option...</option>
              <option value="TVSHOWS">TVSHOWS</option>
              <option value="MOVIES">MOVIES</option>
            </select>
          </div>

          {/* Request */}
          <div className="md:col-span-2">
            <label className="text-xs text-gray-500 font-medium">
              Select Request
            </label>
            <select
              name="request"
              value={formData.request}
              onChange={handleChange}
              className="w-full mt-1 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none bg-white hover:shadow-sm transition"
            >
              <option value="">Select option...</option>
              <option value="Upload">Upload</option>
              <option value="Edit">Edit</option>
              <option value="Delete">Delete</option>
            </select>
          </div>

          {/* Note */}
          <div className="md:col-span-2">
            <label className="text-xs text-gray-500 font-medium">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Task note..."
              className="w-full mt-1 text-sm border border-gray-200 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none h-24 resize-none hover:shadow-sm transition"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-violet-100" />

        {/* Footer buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push("/tasks")}
            className="text-sm px-5 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-sm px-6 py-2 rounded-md bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
