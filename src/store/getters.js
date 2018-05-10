import { sortByDistance } from '../helpers/GeoHelper';

export function jobsInsideViewport(state) {
  if (state.mapViewport === null) {
    return [];
  }
  return state.jobs.filter(j => state.mapViewport.contains(j._geoloc));
}

export function jobsSortedByDistance(state, getters) {
  const viewportJobs = getters.jobsInsideViewport;
  if (viewportJobs.length === 0) {
    return viewportJobs;
  }
  return sortByDistance(getters.mapCenter, viewportJobs, j => j._geoloc);
}

export function mapCenter(state) {
  return state.mapViewport.getCenter();
}
