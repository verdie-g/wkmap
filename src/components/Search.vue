<template>
  <div>
    <ul class="search-facets columns">
      <li class="column facet-item">
        <refinement-list-dropdown :search-store="searchStore" attribute-name="universes.name">
          <h3 class="title is-size-6" slot="trigger" slot-scope="{ facetsRefinedCount }">
            <span>Univers</span>
            <b-tag rounded class="is-primary" v-if="facetsRefinedCount !== 0">
              {{facetsRefinedCount}}
            </b-tag>
            <b-icon icon="chevron-down"></b-icon>
          </h3>
        </refinement-list-dropdown>
      </li>
      <li class="column facet-item">
        <refinement-list-dropdown :search-store="searchStore" attribute-name="contract_type.fr">
          <h3 class="title is-size-6" slot="trigger" slot-scope="{ facetsRefinedCount }">
            <span>Contrat</span>
            <b-tag rounded class="is-primary" v-if="facetsRefinedCount !== 0">
              {{facetsRefinedCount}}
            </b-tag>
            <b-icon icon="chevron-down"></b-icon>
          </h3>
        </refinement-list-dropdown>
      </li>
      <li class="column facet-item">
        <refinement-list-dropdown-list :search-store="searchStore" :facetsGroups="professions">
          <h3 class="title is-size-6" slot="trigger" slot-scope="{ facetsRefinedCount }">
            <span>Professions</span>
            <b-tag rounded class="is-primary" v-if="facetsRefinedCount !== 0">
              {{facetsRefinedCount}}
            </b-tag>
            <b-icon icon="chevron-down"></b-icon>
          </h3>
        </refinement-list-dropdown-list>
      </li>
      <!--
        <li class="column facet-item">
        <h3 class="title is-size-6">Autres</h3>
        </li>
      -->
    </ul>
  </div>
</template>

<script>
import { createJobsSearchStore } from '../api';
import RefinementListDropdown from './ais/RefinementListDropdown';
import RefinementListDropdownList from './ais/RefinementListDropdownList';

const searchStore = createJobsSearchStore();

const professions = {
  name: 'profession',
  facets: [
    { name: 'admin', label: 'Admin' },
    { name: 'business', label: 'Business' },
    { name: 'consulting', label: 'Consulting' },
    { name: 'design', label: 'Design' },
    { name: 'marketing', label: 'Marketing' },
    { name: 'retail', label: 'Retail' },
    { name: 'tech', label: 'Tech' },
  ],
};

export default {
  name: 'Search',
  components: {
    RefinementListDropdown,
    RefinementListDropdownList,
  },
  data() {
    return {
      searchStore,
      professions,
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
  border-left: 1px solid #eee;
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

.facets-list {
  text-align: left;
}

.facets-list li {
  padding: 8px 12px;
}

.facets-list li label {
  white-space: nowrap;
}
</style>
