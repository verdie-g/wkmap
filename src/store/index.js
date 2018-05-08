import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    jobs: [],
    jobsBox: null,
    mapViewport: null,
    mapCenter: null,
  },
  actions,
  getters,
  mutations,
});
