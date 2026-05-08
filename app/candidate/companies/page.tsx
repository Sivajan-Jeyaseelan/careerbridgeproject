"use client";

import React, { useState } from "react";
import RenderCompanies from "./RenderCompanies";

export default function CompaniesPage() {

    const [companies] = useState([
    { name: "Company A", employees: 120, type: "Tech", location: "Colombo, Sri Lanka", openJobs: 12,roles: "Frontend, Backend, QA Engineer",salary: "$500 - $2000",hiringStatus: "Actively Hiring" },
    { name: "Company B", employees: 80, type: "Finance", location: "Kandy, Sri Lanka", openJobs: 5,roles: "Accountant, Financial Analyst",salary: "$400 - $1500",hiringStatus: "Actively Hiring" },
    { name: "Company C", employees: 200, type: "E-commerce", location: "Galle, Sri Lanka", openJobs: 8,roles: "Sales Associate, Customer Service Representative",salary: "$300 - $1200",hiringStatus: "Actively Hiring" },

]);

  return (
    <div className="content-component">
        <h1>Companies List</h1>
        <RenderCompanies companies={companies} />
    </div>
  );
} 