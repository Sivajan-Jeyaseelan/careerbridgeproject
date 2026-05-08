/*import React from "react";

export default function CompanyDetailsPage({params,} : {params: {id: string}}) {

    return (
        <div className="content-component">

        </div>
    );

}*/




























import React from "react";

export default async function CompanyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  // 🟢 MOCK DATA (same file)
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

  const company = mockCompanies.find((c) => c.id === id);

  // ❗ If not found
  if (!company) {
    return (
      <div className="content-component p-6">
        <h1>Company not found</h1>
      </div>
    );
  }

  // ⚠️ IMPORTANT: convert to client logic using React state
  // (Next.js requires this for interactivity)

  "use client";

  const ReactClient = require("react");
  const { useState } = ReactClient;

  const [questions, setQuestions] = useState(company.interviewQuestions);
  const [input, setInput] = useState("");

  const addQuestion = () => {
    if (input.trim() === "") return;
    setQuestions([...questions, input]);
    setInput("");
  };

  return (
    <div className="content-component p-6">

      {/* COMPANY INFO */}
      <h1 className="text-3xl font-bold mb-4">{company.name}</h1>

      <p>📍 {company.location}</p>
      <p>👥 {company.employees}</p>
      <p>💼 {company.openJobs} Open Jobs</p>
      <p>🧑‍💻 {company.roles}</p>

      {/* INTERVIEW SECTION */}
      <div className="mt-6">

        <h2 className="text-xl font-semibold mb-3">
          Interview Questions
        </h2>

        {/* INPUT BOX */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask interview question..."
            className="border p-2 rounded w-full"
          />

          <button
            onClick={addQuestion}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        {/* LIST */}
        <ul className="list-disc pl-6 space-y-1">
          {questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}