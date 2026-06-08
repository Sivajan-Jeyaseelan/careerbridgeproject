"use client";

import { useState } from "react";

type ResumeTemplate = {
  id: number;
  name: string;
  category: string;
  description: string;
};

export default function CVPage() {
    
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const templates: ResumeTemplate[] = [
    {
      id: 1,
      name: "Modern ATS",
      category: "Software Engineering",
      description:
        "Clean single-column ATS-friendly layout suitable for software developers and IT professionals.",
    },
    {
      id: 2,
      name: "Professional ATS",
      category: "Business",
      description:
        "Professional resume structure suitable for business and management positions.",
    },
    {
      id: 3,
      name: "Executive ATS",
      category: "Management",
      description:
        "Designed for senior-level professionals and executives.",
    },
    {
      id: 4,
      name: "Student ATS",
      category: "Graduate",
      description:
        "Perfect for fresh graduates, internships, and entry-level jobs.",
    },
    {
      id: 5,
      name: "Minimal ATS",
      category: "General",
      description:
        "Simple, clean, and highly compatible with applicant tracking systems.",
    },
    {
      id: 6,
      name: "Technical ATS",
      category: "Engineering",
      description:
        "Optimized for technical roles with strong skills and project sections.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          ATS Resume Templates
        </h1>

        <p className="text-gray-600 mt-2">
          Choose a professional resume template optimized for Applicant
          Tracking Systems (ATS).
        </p>
      </div>

      {/* ATS Tips */}
      <div className="mb-10 rounded-xl border border-green-200 bg-green-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-green-800">
          ATS Resume Guidelines
        </h2>

        <ul className="space-y-2 text-green-700">
          <li>✓ Use standard section titles.</li>
          <li>✓ Include relevant keywords.</li>
          <li>✓ Keep formatting simple.</li>
          <li>✓ Avoid excessive graphics and tables.</li>
          <li>✓ Use clear fonts and proper spacing.</li>
        </ul>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${
              selectedTemplate === template.id
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-200"
            }`}
          >
            {/* Preview */}
            <div className="flex h-80 items-center justify-center bg-gray-100 border-b">
              <div className="h-60 w-44 rounded bg-white p-3 shadow">
                <div className="mb-2 h-4 rounded bg-gray-300"></div>

                <div className="mb-1 h-2 rounded bg-gray-200"></div>
                <div className="mb-1 h-2 rounded bg-gray-200"></div>
                <div className="mb-4 h-2 rounded bg-gray-200"></div>

                <div className="mb-2 h-3 rounded bg-blue-200"></div>

                <div className="mb-1 h-2 rounded bg-gray-200"></div>
                <div className="mb-1 h-2 rounded bg-gray-200"></div>
                <div className="mb-4 h-2 rounded bg-gray-200"></div>

                <div className="mb-2 h-3 rounded bg-blue-200"></div>

                <div className="mb-1 h-2 rounded bg-gray-200"></div>
                <div className="mb-1 h-2 rounded bg-gray-200"></div>
                <div className="mb-1 h-2 rounded bg-gray-200"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {template.category}
              </span>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {template.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {template.description}
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedTemplate(template.id)}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Use Template
                </button>

                <button className="rounded-lg border border-gray-300 px-4 py-3 font-medium hover:bg-gray-50">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Template */}
      {selectedTemplate && (
        <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Selected Template
          </h2>

          <p className="mt-2 text-blue-700">
            Template ID: {selectedTemplate}
          </p>

          <button className="mt-4 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
            Continue to Resume Builder
          </button>
        </div>
      )}
    </div>
  );
}