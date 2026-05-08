import React from 'react';

export default function RenderCompanies({companies}: {companies: { name: string; employees: number; type: string; location: string; openJobs: number; roles: string; salary: string; hiringStatus: string }[]; }) {


    const items = companies.map((company, index) => (
        
        
            <li
                key={index}
                className="p-5 rounded-2xl shadow-lg bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border-l-0 hover:border-l-4 hover:border-green-500"
            >
                <h3 className="text-xl font-bold text-black drop-shadow-sm">
                    {company.name}
                </h3>

                <div className="fields grid grid-cols-2 gap-2 mt-2">
                    <p className="text-sm text-black-100 mt-2">
                        <span className="inline-block px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            Employees: {company.employees}
                        </span>
                    </p>
                    <p className="text-sm text-black mt-2">
                        <span className="inline-block px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            Type: {company.type}
                        </span>
                    </p>
                    <p className="text-sm text-black mt-2">
                        <span className="inline-block px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            Location: {company.location}
                        </span>
                    </p>
                    <p className="text-sm text-black mt-2">
                        <span className="inline-block px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            Open Jobs: {company.openJobs}
                        </span>
                    </p>
                    <p className="text-sm text-black mt-2">
                        <span className="inline-block px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                            Roles: {company.roles}
                        </span>
                    </p>
                </div>


                <button className="mt-4 px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer">
                    View Career Portal
                </button>
            </li>
        

    ));

    return (

        <div className="companies-list">

            <ul>
                {items}
            </ul>

            

        </div>

    );


}