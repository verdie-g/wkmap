<template>
  <ul class="search-facets columns">
    <li class="column facet-item">
      <refinement-list-dropdown :search-store="searchStore" attribute-name="universes.name">
        <h3 class="title is-size-6" slot="trigger" slot-scope="{ facetRefinedCount }">
          <span>Univers</span>
          <b-tag rounded class="is-primary" v-if="facetRefinedCount !== 0">
            {{facetRefinedCount}}
          </b-tag>
          <b-icon icon="chevron-down"></b-icon>
        </h3>
      </refinement-list-dropdown>
    </li>
    <li class="column facet-item">
      <refinement-list-dropdown :search-store="searchStore" attribute-name="contract_type.fr">
        <h3 class="title is-size-6" slot="trigger" slot-scope="{ facetRefinedCount }">
          <span>Contrat</span>
          <b-tag rounded class="is-primary" v-if="facetRefinedCount !== 0">
            {{facetRefinedCount}}
          </b-tag>
          <b-icon icon="chevron-down"></b-icon>
        </h3>
      </refinement-list-dropdown>
    </li>
    <!--
    <li class="column facet-item">
      <h3 class="title is-size-6">Professions</h3>
    </li>
    <li class="column facet-item">
      <h3 class="title is-size-6">Autres</h3>
    </li>
    -->
  </ul>
</template>

<script>
import { createJobsSearchStore } from '../api';
import RefinementListDropdown from './ais/RefinementListDropdown';

const searchStore = createJobsSearchStore();

export default {
  name: 'Search',
  components: {
    RefinementListDropdown,
  },
  data() {
    return {
      searchStore,
    };
  },
  mounted() {
    this.searchStore.start();
    this.searchStore.refresh();
    console.log(this.searchStore);
  },
};
</script>

<style scoped>
.search-facets {
  margin: 0;
  height: 60px;
}

.facet-item {
  text-align: center;
  padding: 0;
  height: 100%;
}

.facet-item h3 {
  text-transform: uppercase;
  font-weight: normal;
  line-height: 60px;
}

.facet-item,
.facet-item .dropdown-menu {
  z-index: 1000;
  background-color: #fff;
}
</style>

<style>
.facet-item .dropdown-trigger {
  cursor: pointer;
}

.facet-item .dropdown-trigger .icon {
  vertical-align: middle;
}

.facet-item .dropdown-content {
  text-align: left;
}

.facet-item .control-label {
  white-space: nowrap;
}
</style>
