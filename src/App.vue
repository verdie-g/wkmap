<template>
  <div id="app">
    <div class="left-panel">
      <JobList id="job-list" />
    </div>

    <div class="right">
      <div class="top-panel">
        <Search id="search" />
      </div>
      <WKMap id="map" v-on:mapMove="updateJobs" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Credits from './components/Credits';
import JobList from './components/JobList';
import Search from './components/Search';
import WKMap from './components/WKMap';

export default {
  name: 'App',
  components: {
    Credits,
    JobList,
    Search,
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
  overflow-y: hidden;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.left-panel,
.right {
  height: 100%;
  position: absolute;
  top: 0;
}

.left-panel {
  left: 0;
  width: 25%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.right {
  right: 0;
  width: 75%;
}

.top-panel {
  top: 0;
}

#app {
}

#map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

ul.list-inline li {
  display: inline-block;
}
</style>
