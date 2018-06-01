<template>
  <l-map ref="map" :zoom="zoom" :center="center" :options="mapOptions" v-on:moveend="onMoveEnd">
    <l-tile-layer :url="url" :attribution="attribution" />
    <l-control-zoom position="bottomleft"></l-control-zoom>
    <l-marker-cluster :options="clusterOptions" v-if="searchStore.results.length !== 0">
      <ais-results :search-store="searchStore">
        <template slot-scope="{ result }">
          <l-marker
            v-if="result._geoloc !== null"
            :key="result.objectID"
            :lat-lng="{ lat: result._geoloc.lat, lng: result._geoloc.lng }">
            <l-popup :content="result.company_name + ': ' + result.name"></l-popup>
          </l-marker>
        </template>
      </ais-results>
    </l-marker-cluster>
  </l-map>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LControlZoom } from 'vue2-leaflet';
import { mapActions } from 'vuex';
import LMarkerCluster from 'vue2-leaflet-markercluster';
import jobsSearchStore from '../algolia/jobsSearchStore';
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
    LControlZoom,
    LMarkerCluster,
  },
  data() {
    return {
      zoom: 13,
      center: L.latLng(48.8566, 2.3522),
      url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
      attribution: '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      mapOptions: {
        zoomControl: false,
      },
      clusterOptions: {
        maxClusterRadius: 25,
      },
      searchStore: jobsSearchStore.searchStore,
    };
  },
  methods: {
    ...mapActions([
      'updateMapViewport',
    ]),
    onMoveEnd() {
      const map = this.$refs.map.mapObject;
      const viewport = map.getBounds();
      this.updateMapViewport(viewport);
      jobsSearchStore.setJobsBox(viewport);
    },
    zoomOnJob(job) {
      const map = this.$refs.map.mapObject;
      const latLng = L.latLng(job._geoloc.lat, job._geoloc.lng);
      map.flyTo(latLng, 17, {
        pan: {
          animate: true,
          duration: 0.5,
        },
        zoom: {
          animate: true,
        },
      });
    },
  },
  created() {
    this.$root.$on('select-job', this.zoomOnJob);
  },
  mounted() {
    this.onMoveEnd();
  },
  beforeDestroy() {
    this.$root.$off('select-job', this.zoomOnJob);
  },
};
</script>

<style>
  @import 'leaflet/dist/leaflet.css';
  @import 'leaflet.markercluster/dist/MarkerCluster.css';
  @import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
</style>
