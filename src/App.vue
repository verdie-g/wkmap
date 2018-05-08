<template>
  <div id="app" class="columns">
    <JobList id="job-list" class="column is-one-quarter" />
    <WKMap id="map" class="column" v-on:mapMove="updateJobs" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import JobList from './components/JobList';
import WKMap from './components/WKMap';

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
      'mapViewport',
    ]),
  },
  methods: {
    ...mapActions([
      'updateJobsBox',
      'getJobs',
    ]),
    updateJobs() {
      if (this.jobsBox !== null && this.jobsBox.contains(this.mapViewport)) {
        return;
      }

      this.updateJobsBox(this.mapViewport.pad(0.3));
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

#map {
  position: absolute;
  left: 25%;
  right: 0;
  width: 75%;
}

ul.list-inline li {
  display: inline-block;
}
</style>
