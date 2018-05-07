<template>
  <div id="app" class="columns">
    <JobList id="job-list" class="column is-one-quarter" />
    <WKMap id="map" class="column" v-on:mapMove="updateJobs" />
  </div>
</template>

<script>
import * as algoliasearch from 'algoliasearch';
import { mapState, mapActions } from 'vuex';
import JobList from './components/JobList';
import WKMap from './components/WKMap';
import { growBox, containsBox } from './helpers/BoxHelper';

export default {
  name: 'App',
  components: {
    JobList,
    WKMap,
  },
  computed: {
    ...mapState([
      'jobs',
      'jobsBox',
    ]),
  },
  methods: {
    ...mapActions([
      'updateJobsBox',
      'getJobs',
    ]),
    updateJobs(viewport) {
      if (this.jobsBox !== null && containsBox(this.jobsBox, viewport)) {
        return;
      }

      this.updateJobsBox(growBox(viewport, 0.05));
      this.getJobs('');
    },
  },
};
</script>

<style>
html {
  overflow: visible;
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}

ul.list-inline li {
  display: inline-block;
}
</style>
