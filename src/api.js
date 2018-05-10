import * as algoliasearch from 'algoliasearch';
import { createFromAlgoliaClient } from 'vue-instantsearch';

const appId = 'CSEKHVMS53';
const apiKey = 'YmUwMzBiNjg3MDY4M2M3MGJiNGNkODdiOTZmOTZjZTZlMzA3NDZiZGZhM2VkY2NjMjY1OWEwMzhjMWI5M2IwMmZpbHRlcnM9d2Vic2l0ZV9pZHMlM0ExODc';

const jobsIndexName = 'wk_jobs_production';

const client = algoliasearch(appId, apiKey);

export const jobsIndex = client.initIndex(jobsIndexName);
export const jobsSearchStore = createFromAlgoliaClient(client);

jobsSearchStore.indexName = jobsIndexName;
