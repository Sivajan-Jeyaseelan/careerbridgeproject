"use client";



























import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// 🟢 MOCK DATA
const mockCompanies = [
  {
    id: "1",
    name: "Company A",
    employees: 120,
    type: "Tech",
    location: "Colombo, Sri Lanka",
    openJobs: 12,
    roles: "Frontend, Backend, QA Engineer",
    salary: "$500 - $2000",
    hiringStatus: "Actively Hiring",
    interviewQuestions: [
      "What is React?",
      "Explain OOP concepts"
    ]
  },
  {
    id: "2",
    name: "Company B",
    employees: 80,
    type: "Finance",
    location: "Kandy, Sri Lanka",
    openJobs: 5,
    roles: "Accountant",
    salary: "$400 - $1500",
    hiringStatus: "Coming Soon",
    interviewQuestions: []
  }
];

export default function CompanyDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [company, setCompany] = React.useState<typeof mockCompanies[0] | null>(null);
  const [questions, setQuestions] = React.useState<string[]>([]);
  const [input, setInput] = React.useState<string>("");

  React.useEffect(() => {
    const foundCompany = mockCompanies.find((c) => c.id === id);
    setCompany(foundCompany || null);
    if (foundCompany) {
      setQuestions(foundCompany.interviewQuestions);
    }
    setIsLoaded(true);
  }, [id]);

  const addQuestion = () => {
    if (input.trim() === "") return;
    setQuestions([...questions, input]);
    setInput("");
  };

  if (!isLoaded) {
    return (
      <div className="content-component p-6 px-10">
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-3">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="content-component p-6 px-10">
        <div className="rounded-xl shadow-md bg-white border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-900">Company not found</h1>
          <p className="text-gray-600 mt-2">The company you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-component p-6 px-10">

      {/* COMPANY INFO CARD */}
      <div className="mb-8 rounded-xl shadow-md bg-white border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{company.name}</h1>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                <span className="text-sm font-semibold text-gray-600">{company.hiringStatus}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">
                {company.type}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Location</p>
              <p className="text-lg font-semibold text-gray-900">📍 {company.location}</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Employees</p>
              <p className="text-lg font-semibold text-gray-900">👥 {company.employees}</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Open Positions</p>
              <p className="text-lg font-semibold text-green-600">💼 {company.openJobs}</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Salary Range</p>
              <p className="text-lg font-semibold text-gray-900">{company.salary}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Roles Available</p>
            <p className="text-gray-700">{company.roles}</p>
          </div>
        </div>
      </div>

      {/* INTERVIEW SECTION */}
      <div className="rounded-xl shadow-md bg-white border border-gray-100 overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interview Questions</h2>

          {/* INPUT BOX */}
          <div className="flex gap-3 mb-6">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask interview question..."
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={addQuestion}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Add
            </button>
          </div>

          {/* LIST */}
          {questions.length > 0 ? (
            <ul className="space-y-3">
              {questions.map((q: string, i: number) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 flex-1">{q}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm">No interview questions yet. Add one to get started!</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}