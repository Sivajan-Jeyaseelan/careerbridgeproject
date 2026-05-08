import Scraper from "../components/scraper";

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
    <div style={{ padding: "30px" }}>
      <h1>🧑‍💻 Candidate Dashboard</h1>

      {/* 🔍 SEARCH BAR */}
      <form method="GET" style={{ margin: "20px 0" }}>
        <input
          type="text"
          name="q"
          placeholder="Search jobs..."
          defaultValue={query}
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 16px",
            borderRadius: "6px",
            background: "#4f46e5",
            color: "white",
            border: "none",
          }}
        >
          Search
        </button>
      </form>

      {/* 📌 JOB LIST */}
      {(filteredJobs?.length ?? 0) === 0 ? (
        <p>No jobs found 😢</p>
      ) : (
        filteredJobs.map((job: Job, i: number) => (
          <div
            key={i}
            style={{
              marginBottom: "15px",
              padding: "15px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <h3>{job.title}</h3>
            <p>📍 {job.locationsText}</p>

            <a
              href={
                "https://wd5.myworkdaysite.com/en-US/syscocareers/job/" +
                job.externalPath
              }
              target="_blank"
              style={{ color: "blue", fontWeight: "bold" }}
            >
              Apply →
            </a>
          </div>
        ))
      )}
    </div>
  );
}