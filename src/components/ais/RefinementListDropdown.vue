<template>
  <b-dropdown>
    <slot name="trigger">
    </slot>

    <b-dropdown-item v-for="facet in facetValues" :key="facet.name" custom>
      <label :class="bem('label')">
        <input type="checkbox"
               :class="bem('checkbox')"
               v-model="facet.isRefined"
               @change="toggleRefinement(facet)"
               :value="facet.name" />
        <slot :count="facet.count" :active="facet.isRefined" :value="facet.name">
          <span :class="bem('value')">{{facet.name}}</span>
          <span :class="bem('count')">{{facet.count}}</span>
        </slot>
      </label>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { RefinementList } from 'vue-instantsearch';

export default {
  extends: RefinementList,
};
</script>
