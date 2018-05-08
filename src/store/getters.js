import { sortByDistance } from '../helpers/GeoHelper';

export function jobsInsideViewport(state) {
  return state.jobs.filter(j => state.mapViewport.contains(j._geoloc));
}

export function jobsSortedByDistance(state, getters) {
  const viewportJobs = getters.jobsInsideViewport;
  return sortByDistance(state.mapCenter, viewportJobs, j => j._geoloc);
}
