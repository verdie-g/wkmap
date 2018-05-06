<template>
  <div id="app" class="columns">
    <JobList id="job-list" class="column is-one-quarter" v-bind:jobs="jobs" />
    <WKMap id="map" class="column" v-bind:jobs="jobs" v-on:mapMove="updateJobs" />
  </div>
</template>

<script>
import 'buefy/lib/buefy.css';
import * as algoliasearch from 'algoliasearch';
import JobList from './components/JobList';
import WKMap from './components/WKMap';
import { growBox, containsBox } from './helpers/BoxHelper';

export default {
  name: 'App',
  index: algoliasearch('CSEKHVMS53', 'YmUwMzBiNjg3MDY4M2M3MGJiNGNkODdiOTZmOTZjZTZlMzA3NDZiZGZhM2VkY2NjMjY1OWEwMzhjMWI5M2IwMmZpbHRlcnM9d2Vic2l0ZV9pZHMlM0ExODc').initIndex('wk_jobs_production'),
  components: {
    JobList,
    WKMap,
  },
  data() {
    return {
      jobBox: null,
      jobs: [],
    };
  },
  methods: {
    async updateJobs(box) {
      if (this.jobBox !== null && containsBox(this.jobBox, box)) {
        return;
      }

      this.jobBox = growBox(box, 0.05);

      const res = await this.$options.index.search({
        query: '',
        hitsPerPage: 1000,
        insideBoundingBox: [this.jobBox],
        attributesToRetrieve: [
          '_geoloc',
          'company_name',
          'company_logo_url',
          'name',
        ],
        analytics: false,
      });

      this.jobs = res.hits;
    },
  },
};
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}

</style>
