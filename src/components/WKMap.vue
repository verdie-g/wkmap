<template>
  <l-map ref="map" :zoom="zoom" :center="center" v-on:moveend="onMoveEnd">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <v-marker-cluster :options="clusterOptions" v-if="jobs.length !== 0">
      <l-marker v-for="job in jobs" v-if="job._geoloc !== null" :lat-lng="job._geoloc">
        <l-popup :content="job.name"></l-popup>
      </l-marker>
    </v-marker-cluster>
  </l-map>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
import iconRetinaUrl from '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import iconUrl from '../../node_modules/leaflet/dist/images/marker-icon.png';
import shadowUrl from '../../node_modules/leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.imagePath = '';
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export default {
  name: 'WelcomeKitMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
  },
  props: ['jobs'],
  data() {
    return {
      zoom: 13,
      center: L.latLng(48.8566, 2.3522),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      clusterOptions: {
        maxClusterRadius: 25,
      },
    };
  },
  methods: {
    onMoveEnd() {
      this.updateJobs();
    },
    updateJobs() {
      const bounds = this.$refs.map.mapObject.getBounds();
      const box = [
        bounds._northEast.lat,
        bounds._northEast.lng,
        bounds._southWest.lat,
        bounds._southWest.lng,
      ];
      this.$emit('update:jobs', box);
    },
  },
  mounted() {
    this.updateJobs();
  },
};
</script>

<style>
  @import 'leaflet/dist/leaflet.css';
  @import 'leaflet.markercluster/dist/MarkerCluster.css';
  @import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
</style>
