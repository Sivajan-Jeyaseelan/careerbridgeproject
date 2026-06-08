import React from 'react';

export default function RenderCompanies({companies}: {companies: { name: string; employees: number; type: string; location: string; openJobs: number; roles: string; salary: string; hiringStatus: string }[]; }) {

    const items = companies.map((company, index) => (
        <li
            key={index}
            className="mb-4 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-green-400"
        >
            <div className="flex items-center justify-between p-6">
                {/* Left Section - Company Info */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {company.name}
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Location</span>
                            <span className="text-sm text-gray-700 font-medium">{company.location}</span>
                        </div>
                        <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Type</span>
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                                {company.type}
                            </span>
                        </div>
                        <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Employees</span>
                            <span className="text-sm text-gray-700 font-medium">{company.employees}</span>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Job Details */}
                <div className="flex-1 border-l border-gray-200 pl-6 mx-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Open Positions</p>
                            <p className="text-2xl font-bold text-green-600">{company.openJobs}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Salary Range</p>
                            <p className="text-sm text-gray-700 font-semibold">{company.salary}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Roles Available</p>
                            <p className="text-sm text-gray-700 truncate">{company.roles}</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Status & CTA */}
                <div className="flex flex-col items-end gap-3 pl-6">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-semibold text-gray-600">{company.hiringStatus}</span>
                    </div>
                    <button className="px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        View Portal
                    </button>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="companies-list px-6">
            <ul className="space-y-0">
                {items}
            </ul>
        </div>
    );
}