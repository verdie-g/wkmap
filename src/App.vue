<template>
  <div id="app" class="columns">
    <JobList id="job-list" class="column is-one-quarter" />
    <WKMap id="map" class="column" v-on:mapMove="updateJobs" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import JobList from './components/JobList';
import WKMap from './components/WKMap';

export default {
  name: 'App',
  components: {
    JobList,
    WKMap,
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'updateJobs',
    ]),
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
