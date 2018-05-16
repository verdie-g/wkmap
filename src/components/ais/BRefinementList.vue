<template>
  <ul>
    <li v-for="facet in facetValues" :key="facet.name">
      <b-checkbox v-model="facet.isRefined"
                  :class="bem('label')"
                  :native-value="facet.name"
                  @input="toggleRefinement(facet); emitFacetsRefinedCount()">
        <slot :count="facet.count" :active="facet.isRefined" :value="facet.name">
          <span :class="bem('value')">{{facet.name}}</span>
          <b-tag rounded :class="bem('count')" class="is-primary">{{facet.count}}</b-tag>
        </slot>
      </b-checkbox>
    </li>
  </ul>
</template>

<script>
import { RefinementList } from 'vue-instantsearch';

export default {
  extends: RefinementList,
  methods: {
    emitFacetsRefinedCount() {
      const refinedCount = this.facetValues.reduce((count, facet) => count + facet.isRefined, 0);
      this.$emit('update:facetsRefinedCount', refinedCount);
    },
  },
};
</script>
