import Scraper from "../../components/scraper";

// ✅ TYPE INSIDE SAME FILE
type Job = {
  title: string;
  locationsText: string;
  externalPath: string;
};

function filterJobs(jobs: Job[], query: string): Job[] {
  if (!query) return jobs;

  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.locationsText.toLowerCase().includes(query.toLowerCase())
  );
}

export default async function CandidateDashboard({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const data = await Scraper();

  const jobs: Job[] = data.jobs;
  const query = searchParams?.q || "";

  const filteredJobs = filterJobs(jobs, query);

  return (
    <div className="content-component px-14 py-8">
      {/* Candidate Summary Section */}
      <div className="mb-10 rounded-xl shadow-md bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome Back, John Doe</h2>
              <p className="text-gray-700 mb-3">Frontend Developer | Colombo, Sri Lanka</p>
              <div className="flex items-center gap-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  ✓ Profile Complete
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  3 Applications Pending
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300">
              View Profile
            </button>
            <button className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Edit CV
            </button>
            <button className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300">
              ⬇ Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
          <p className="text-3xl font-bold text-green-600 mb-1">12</p>
          <p className="text-gray-600 text-sm font-semibold uppercase">Applications Sent</p>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
          <p className="text-3xl font-bold text-blue-600 mb-1">3</p>
          <p className="text-gray-600 text-sm font-semibold uppercase">Under Review</p>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
          <p className="text-3xl font-bold text-purple-600 mb-1">2</p>
          <p className="text-gray-600 text-sm font-semibold uppercase">Interviews Scheduled</p>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
          <p className="text-3xl font-bold text-orange-600 mb-1">8</p>
          <p className="text-gray-600 text-sm font-semibold uppercase">Jobs Saved</p>
        </div>
      </div>

      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">🧑‍💻 Candidate Dashboard</h1>
            <p className="text-gray-600">Explore and apply to available job opportunities</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Total Jobs</p>
            <p className="text-3xl font-bold text-gray-900">{jobs.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Jobs Found</p>
            <p className="text-3xl font-bold text-blue-600">{filteredJobs.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Search Query</p>
            <p className="text-lg font-semibold text-gray-900 truncate">{query || "All Jobs"}</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-10 rounded-xl shadow-md bg-white border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Jobs</h2>
        <form method="GET" className="flex gap-4">
          <input
            type="text"
            name="q"
            placeholder="Search by job title or location..."
            defaultValue={query}
            className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </form>
      </div>

      {/* Jobs List */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {query ? `Search Results (${filteredJobs.length})` : "Available Jobs"}
        </h2>

        {(filteredJobs?.length ?? 0) === 0 ? (
          <div className="rounded-xl shadow-md bg-white border border-gray-100 p-12 text-center">
            <p className="text-2xl mb-2">😢</p>
            <p className="text-gray-600 text-lg">No jobs found</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job: Job, i: number) => (
              <div
                key={i}
                className="rounded-xl shadow-md bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <span>📍</span>
                        {job.locationsText}
                      </p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-green-50 text-green-700 text-xs font-semibold rounded-lg">
                      Open
                    </span>
                  </div>

                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                    <a
                      href={
                        "https://wd5.myworkdaysite.com/en-US/syscocareers/job/" +
                        job.externalPath
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </a>
                    <button className="px-4 py-2.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}