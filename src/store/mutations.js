export function updateJobsBox(state, jobsBox) {
  state.jobsBox = jobsBox;
}

export async function getJobs(state, jobs) {
  state.jobs = jobs;
}
