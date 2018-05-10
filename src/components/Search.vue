<template>
  <ul class="search-facets columns">
    <li class="column facet-item">
      <refinement-list-dropdown :search-store="searchStore" attribute-name="universes.name">
        <h3 class="title is-size-6" slot="trigger">
          Univers
          <b-icon icon="menu-down"></b-icon>
        </h3>
      </refinement-list-dropdown>
    </li>
    <li class="column facet-item">
      <b-dropdown>
        <h3 class="title is-size-6" slot="trigger">
          Contrat
          <b-icon icon="menu-down"></b-icon>
        </h3>

        <b-dropdown-item custom>
          <b-checkbox>CDI</b-checkbox>
        </b-dropdown-item>
        <b-dropdown-item custom>
          <b-checkbox>Stage</b-checkbox>
        </b-dropdown-item>
        <b-dropdown-item custom>
          <b-checkbox>Alternance</b-checkbox>
        </b-dropdown-item>
        <b-dropdown-item custom>
          <b-checkbox>CDD / Temporaire</b-checkbox>
        </b-dropdown-item>
        <b-dropdown-item custom>
          <b-checkbox>Freelance</b-checkbox>
        </b-dropdown-item>
        <b-dropdown-item custom>
          <b-checkbox>VIE</b-checkbox>
        </b-dropdown-item>
        <b-dropdown-item custom>
          <b-checkbox>Temps partiel</b-checkbox>
        </b-dropdown-item>
      </b-dropdown>
    </li>
    <li class="column facet-item">
      <b-dropdown>
        <h3 class="title is-size-6" slot="trigger">
          Localisation
          <b-icon icon="menu-down"></b-icon>
        </h3>

        <b-dropdown-item custom>
          <b-checkbox>Paris</b-checkbox>
        </b-dropdown-item>
      </b-dropdown>
    </li>
    <li class="column facet-item">
      <h3 class="title is-size-6">Professions</h3>
    </li>
    <li class="column facet-item">
      <h3 class="title is-size-6">Autres</h3>
    </li>
  </ul>
</template>

<script>
import { jobsSearchStore } from '../api';
import RefinementListDropdown from './ais/RefinementListDropdown';

export default {
  name: 'Search',
  components: {
    'refinement-list-dropdown': RefinementListDropdown,
  },
  data() {
    return {
      searchStore: jobsSearchStore,
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
