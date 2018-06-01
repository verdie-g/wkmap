import { jobsIndexName, createSearchStore } from './algolia';

class JobsSearchStore {
  constructor(queryParameters = {}) {
    this._searchStore = createSearchStore(jobsIndexName);
    this._jobsBox = null;
    this._searchStore.queryParameters = queryParameters;
  }

  get searchStore() {
    return this._searchStore;
  }

  get jobs() {
    return this._searchStore.results;
  }

  getFilteredJobs(filter) {
    return this.jobs.filter(filter);
  }

  setJobsBox(jobsBox) {
    if (this._jobsBox !== null && this._jobsBox.contains(jobsBox)) {
      return;
    }

    const grownBox = jobsBox.pad(0.5);

    const boundingBox = [
      grownBox.getNorthEast().lat,
      grownBox.getNorthEast().lng,
      grownBox.getSouthWest().lat,
      grownBox.getSouthWest().lng,
    ];

    this._searchStore._helper.setQueryParameter('insideBoundingBox', [boundingBox]);

    if (this._jobsBox === null) {
      this.start();
      this.refresh();
    }

    this._jobsBox = grownBox;
  }

  start() {
    this._searchStore.start();
  }

  stop() {
    this._searchStore.stop();
  }

  refresh() {
    this._searchStore.refresh();
  }
}

export default new JobsSearchStore({
  hitsPerPage: 1000,
  attributesToRetrieve: [
    '_geoloc',
    'company_logo_url',
    'company_name',
    'contract_type.fr',
    'name',
    'office_city',
    'published_at',
    'websites_urls',
  ],
  analytics: false,
});
