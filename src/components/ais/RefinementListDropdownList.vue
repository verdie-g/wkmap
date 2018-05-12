<template>
  <b-dropdown class="facets-groups">
    <template slot="trigger">
      <slot name="trigger" v-bind:facetsRefinedCount="facetsRefinedCount">
      </slot>
    </template>

    <b-tabs v-model="activeFacetsGroup">
      <b-tab-item>
        <ul class="facets-groups-index">
          <li v-for="(facet, i) in facetGroups.facets"
              :key="facet.name"
              @click="activeFacetsGroup = i + 1">
            <span>{{facet.label}}</span>
            <b-icon icon="chevron-right"></b-icon>
          </li>
        </ul>
      </b-tab-item>

      <b-tab-item
        v-for="facet in facetGroups.facets"
        :key="facet.name"
        class="facets-group">
        <div class="facets-group-header" @click="activeFacetsGroup = 0">
          <span>{{facet.label}}</span>
          <b-icon icon="chevron-left"></b-icon>
        </div>
        <b-refinement-list
          :attribute-name="`${facetGroups.name}.${facet.name}`"
          :search-store="searchStore"
          class="facets-list">
        </b-refinement-list>
      </b-tab-item>
    </b-tabs>
  </b-dropdown>
</template>

<script>
import BRefinementList from './BRefinementList';

export default {
  components: {
    BRefinementList,
  },
  props: {
    searchStore: {
      type: Object,
      required: true,
    },
    facetGroups: {
      type: Object,
      required: true,
    },
  },
  computed: {
    facetsRefinedCount() {
      return 0;
    },
  },
  data() {
    return {
      activeFacetsGroup: 0,
    };
  },
};
</script>

<style scoped>
.facets-groups-index li,
.facets-group-header {
  padding: 0.375rem 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}

.facets-groups-index li {
}

.facets-group-header {
  color: #afafb3;
  background-color: #f9f9f9;
}

.facets-groups-index li:hover {
  background-color: #eee;
}
</style>

<style>
.facets-groups .dropdown-content {
  padding: 0;
}

.facets-groups .tab-content {
  padding: 0;
}

.facets-groups .tabs {
  display: none;
}
</style>
