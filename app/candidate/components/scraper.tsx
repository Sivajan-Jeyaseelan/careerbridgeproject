import axios from "axios";

type Job = {
  title: string;
  locationsText: string;
  externalPath: string;
};

export async function getJobs() {
  try {
    const url =
      "https://www.ifs.com/api/smartrecruiters?q=&location=Colombo&country=Sri+Lanka&department=";

    const res = await axios.get(url, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    // 🔥 SmartRecruiters usually uses "content"
    const jobs = res.data?.content || [];

    return jobs.map((job: Job) => ({
        title: job.title,
        locationsText: job.locationsText,
        externalPath: job.externalPath,
    }));
  } catch (error) {
    console.log("Job fetch error:", error);
    return [];
  }
}

export default async function Scraper() {
  const jobs = await getJobs();

  return { jobs };
}