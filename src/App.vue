<template>
  <div id="app">
    <WKMap />
  </div>
</template>

<script>
import WKMap from './components/WKMap';

export default {
  name: 'App',
  components: {
    WKMap,
  },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
