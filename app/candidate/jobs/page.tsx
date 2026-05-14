/*import React from "react";  

export default function JobsPage() {
  return (
    <div className="content-component p-6">
      <h1 className="text-2xl font-bold mb-4">Jobs Page</h1>
      <p>Welcome to the Jobs page! Here you can explore job opportunities and apply for positions that match your skills and interests.</p>
    </div>
  );
}

*/










import React from "react";

export default function JobsPage() {

    const jobs = [

        {

            id: 1,
            title: "Senior Full-Stack Engineer",
            company: "TechCorp",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$150K - $200K",
            description: "Build scalable web applications using React and Node.js with a talented team.",

        },
        {

            id: 2,
            title: "Product Designer",
            company: "StartupHub",
            location: "New York, NY",
            type: "Full-time",
            salary: "$120K - $160K",
            description: "Design intuitive user experiences for our innovative SaaS platform.",

        },
        {

            id: 3,
            title: "Data Science Intern",
            company: "DataDrive",
            location: "Remote",
            type: "Internship",
            salary: "$25/hr",
            description: "Learn machine learning and data analysis while working on real-world projects.",

        },
        {

            id: 4,
            title: "DevOps Engineer",
            company: "CloudScale",
            location: "Austin, TX",
            type: "Full-time",
            salary: "$140K - $190K",
            description: "Manage and optimize our cloud infrastructure using modern DevOps practices.",
        
        },

    ];

    const getTypeColor = (type: string) => {

        switch (type) {

            case "Full-time":

              return "bg-blue-100 text-blue-700";

            case "Part-time":

              return "bg-green-100 text-green-700";

            case "Internship":

              return "bg-purple-100 text-purple-700";

            default:

              return "bg-gray-100 text-gray-700";

        }

    };

    return (

        <div className="content-component p-6">
          
            <div className="mb-12">

                <h1 className="text-4xl font-bold text-slate-900 mb-3">Available Jobs</h1>
                <p className="text-lg text-slate-600">Explore amazing career opportunities and take the next step in your professional journey</p>
            
            </div>

            
            <div className="mb-10 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                
                <div className="flex flex-col md:flex-row gap-4">

                    <input
                        type="text"
                        placeholder="Search by job title or company..."
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                        <option>All Types</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                    </select>

                    <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                        <option>All Locations</option>
                        <option>Remote</option>
                        <option>San Francisco</option>
                        <option>New York</option>
                    </select>

                </div>

            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {jobs.map((job) => (

                    <div key={job.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden group">
                      
                        <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

                        <div className="p-6">
                            
                            <div className="flex items-start justify-between mb-4">

                                <div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {job.title}
                                    </h2>

                                    <p className="text-sm font-semibold text-blue-600">{job.company}</p>
                                  
                                </div>

                                <button className="text-slate-400 hover:text-blue-500 transition-colors text-2xl">♡</button>
                              
                            </div>
                            
                              <div className="mb-4">

                                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
                                      {job.type}
                                  </span>
                                  
                              </div>

                            <div className="space-y-2 mb-4 text-sm text-slate-600">

                                <p>📍 {job.location}</p>
                                <p>💰 {job.salary}</p>

                            </div>
                          
                            <p className="text-slate-700 text-sm mb-6 leading-relaxed">
                                {job.description}
                            </p>
                            
                            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Apply Now →
                            </button>

                        </div>

                    </div>

                ))}

            </div>

          
            <div className="mt-12 text-center text-slate-600">

                <p>Showing 4 of 128 jobs • <a href="#" className="text-blue-600 hover:underline">View all jobs</a></p>
            
            </div>

        </div>

    );

}
