export function updateJobsBox({ commit }, jobsBox) {
  commit('updateJobsBox', jobsBox);
}

export async function getJobs({ commit, state }, query) {
  const boundingBox = [
    state.jobsBox.getNorthEast().lat,
    state.jobsBox.getNorthEast().lng,
    state.jobsBox.getSouthWest().lat,
    state.jobsBox.getSouthWest().lng,
  ];

  const res = await state.index.search({
    query,
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

export function updateMapPositions({ commit }, { viewport, center }) {
  commit('updateMapViewport', viewport);
  commit('updateMapCenter', center);
}
