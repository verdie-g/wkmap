<template>
  <b-dropdown>
    <template slot="trigger">
      <slot name="trigger">
      </slot>
    </template>

    <b-dropdown-item v-for="facet in facetValues" :key="facet.name" custom>
      <b-checkbox v-model="facet.isRefined"
                  :class="bem('label')"
                  :native-value="facet.name"
                  @input="toggleRefinement(facet)">
        <slot :count="facet.count" :active="facet.isRefined" :value="facet.name">
          <span :class="bem('value')">{{facet.name}}</span>
          <b-tag rounded :class="bem('count')" class="is-primary">{{facet.count}}</b-tag>
        </slot>
      </b-checkbox>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { RefinementList } from 'vue-instantsearch';

export default {
  extends: RefinementList,
};
</script>
