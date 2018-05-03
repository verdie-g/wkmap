<template>
  <div id="app">
    <WKMap v-bind:jobs="jobs" v-on:update:jobs="updateJobs" />
  </div>
</template>

<script>
import * as algoliasearch from 'algoliasearch';
import WKMap from './components/WKMap';

export default {
  name: 'App',
  components: {
    WKMap,
  },
  data() {
    return {
      jobs: [],
    };
  },
  methods: {
    async updateJobs(box) {
      const client = algoliasearch('CSEKHVMS53', 'YmUwMzBiNjg3MDY4M2M3MGJiNGNkODdiOTZmOTZjZTZlMzA3NDZiZGZhM2VkY2NjMjY1OWEwMzhjMWI5M2IwMmZpbHRlcnM9d2Vic2l0ZV9pZHMlM0ExODc');
      const index = client.initIndex('wk_jobs_production');

      const res = await index.search({
        query: '',
        hitsPerPage: 1000,
        insideBoundingBox: [box],
      });

      this.jobs = res.hits;
    },
  },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
