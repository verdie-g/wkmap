export const updateJobsBox = ({ commit }, jobsBox) => {
  commit('updateJobsBox', jobsBox);
};

export const getJobs = async ({ commit, state }, query) => {
  const res = await state.index.search({
    query,
    hitsPerPage: 1000,
    insideBoundingBox: [state.jobsBox],
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
};
