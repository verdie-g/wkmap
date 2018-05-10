import { jobsIndex } from '../api';

export async function updateJobs({ commit, state }) {
  if (state.jobsBox !== null && state.jobsBox.contains(state.mapViewport)) {
    return;
  }

  commit('updateJobsBox', state.mapViewport.pad(0.3));

  const boundingBox = [
    state.jobsBox.getNorthEast().lat,
    state.jobsBox.getNorthEast().lng,
    state.jobsBox.getSouthWest().lat,
    state.jobsBox.getSouthWest().lng,
  ];

  const res = await jobsIndex.search({
    query: state.query,
    hitsPerPage: 1000,
    insideBoundingBox: [boundingBox],
    attributesToRetrieve: [
      '_geoloc',
      'company_logo_url',
      'company_name',
      'contract_type.fr',
      'name',
      'office_city',
      'published_at',
      'websites_url',
    ],
    analytics: false,
  });

  commit('getJobs', res.hits);
}

export function updateMapViewport({ commit }, viewport) {
  commit('updateMapViewport', viewport);
}
