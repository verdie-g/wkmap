<template>
  <b-dropdown>
    <template slot="trigger">
      <slot name="trigger" v-bind:facetsRefinedCount="facetsRefinedCount">
      </slot>
    </template>

    <b-refinement-list
      :searchStore="searchStore"
      :attribute-name="attributeName"
      class="facets-list"
      v-on:update:facetsRefinedCount="facetsRefinedCount = $event">
    </b-refinement-list>
  </b-dropdown>
</template>

<script>
import BRefinementList from './BRefinementList';

export default {
  components: {
    BRefinementList,
  },
  props: {
    attributeName: {
      type: String,
      required: true,
    },
    searchStore: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      facetsRefinedCount: 0,
    };
  },
};
</script>
