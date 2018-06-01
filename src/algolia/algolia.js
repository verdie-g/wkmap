import * as algoliasearch from 'algoliasearch';
import { createFromAlgoliaClient } from 'vue-instantsearch';

const appId = 'CSEKHVMS53';
const apiKey = 'YmUwMzBiNjg3MDY4M2M3MGJiNGNkODdiOTZmOTZjZTZlMzA3NDZiZGZhM2VkY2NjMjY1OWEwMzhjMWI5M2IwMmZpbHRlcnM9d2Vic2l0ZV9pZHMlM0ExODc';

const jobsIndexName = 'wk_jobs_production';

const client = algoliasearch(appId, apiKey);

function createSearchStore(indexName) {
  const searchStore = createFromAlgoliaClient(client);
  searchStore.indexName = indexName;
  return searchStore;
}

export {
  jobsIndexName,
  createSearchStore,
};
