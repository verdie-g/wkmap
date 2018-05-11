<template>
  <ul class="search-facets columns">
    <li class="column facet-item">
      <refinement-list-dropdown :search-store="searchStore" attribute-name="universes.name">
        <h3 class="title is-size-6" slot="trigger" slot-scope="{ facetRefinedCount }">
          <span>Univers</span>
          <b-tag rounded class="is-primary" v-if="facetRefinedCount !== 0">
            {{facetRefinedCount}}
          </b-tag>
          <b-icon icon="menu-down"></b-icon>
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
          <b-icon icon="menu-down"></b-icon>
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

.facet-item .dropdown {
  width: 100%;
  height: 100%;
}

.facet-item, .facet-item .dropdown-menu {
  z-index: 1000;
}
</style>

<style>
.facet-item .dropdown-trigger {
  width: 100%;
  cursor: pointer;
}

.facet-item .dropdown-menu {
  padding-top: 0;
}

.facet-item .dropdown-content {
  border-radius: 0;
}

.facet-item .dropdown-item {
  text-align: left;
}
</style>
