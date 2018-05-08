<template>
  <l-map ref="map" :zoom="zoom" :center="center" v-on:moveend="onMoveEnd">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <v-marker-cluster :options="clusterOptions" v-if="jobs.length !== 0">
      <l-marker
        v-for="job in jobs"
        v-if="job._geoloc !== null"
        :key="job.objectID"
        :lat-lng="{ lat: job._geoloc.lat, lng: job._geoloc.lng }">
        <l-popup :content="job.company_name + ': ' + job.name"></l-popup>
      </l-marker>
    </v-marker-cluster>
  </l-map>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LRectangle } from 'vue2-leaflet';
import { mapState, mapActions } from 'vuex';
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
    LRectangle,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
  },
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
  computed: {
    ...mapState([
      'jobs',
    ]),
  },
  methods: {
    ...mapActions([
      'updateMapPositions',
    ]),
    onMoveEnd() {
      this.emitMapMove();
    },
    emitMapMove() {
      const map = this.$refs.map.mapObject;
      const viewport = map.getBounds();
      const center = viewport.getCenter();
      this.updateMapPositions({ viewport, center });
      this.$emit('mapMove');
    },
  },
  mounted() {
    this.emitMapMove();
  },
};
</script>

<style>
  @import 'leaflet/dist/leaflet.css';
  @import 'leaflet.markercluster/dist/MarkerCluster.css';
  @import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
</style>
