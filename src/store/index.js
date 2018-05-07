import Vue from 'vue';
import Vuex from 'vuex';
import * as algoliasearch from 'algoliasearch';

import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    jobsBox: null,
    mapViewport: null,
    index: algoliasearch('CSEKHVMS53', 'YmUwMzBiNjg3MDY4M2M3MGJiNGNkODdiOTZmOTZjZTZlMzA3NDZiZGZhM2VkY2NjMjY1OWEwMzhjMWI5M2IwMmZpbHRlcnM9d2Vic2l0ZV9pZHMlM0ExODc').initIndex('wk_jobs_production'),
  },
  mutations,
  actions,
});
