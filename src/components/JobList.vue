<template>
  <ul v-if="jobs.length !== 0" class="job-list">
    <li v-for="job in jobs.slice(0, $options.nbJobs)" class="job columns">
      <div class="job-picture column is-narrow">
        <img v-bind:src="job.company_logo_url" />
      </div>
      <div class="job-header column">
        <h5 class="title is-size-7 has-text-grey">{{job.company_name}}</h5>
        <h4 class="title is-size-6">{{job.name}}</h4>
        <ul class="job-metas list-inline is-size-7">
          <li>
            <b-icon icon="briefcase" size="is-small" />
            <span>{{job.contract_type.fr}}</span>
          </li>
          <li>
            <b-icon icon="map-marker-outline" size="is-small" />
            <span>{{job.office_city}}</span>
          </li>
          <li>
            <b-icon icon="clock" size="is-small" />
            <time>{{job.published_at | moment('from') }}</time>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'JobList',
  nbJobs: 20,
  computed: {
    ...mapState([
      'jobs',
    ]),
  },
};
</script>

<style scoped>
.job-list {
  overflow-y: scroll;
  list-style-type: none;
}

.job {
  height: 90px;
  cursor: pointer;
}

.job:hover {
  background-color: #eee;
}

.job-picture {
}

.job-picture img {
  height: 66px;
}

.job-header {
}

.job-header h4 {
  margin-bottom: 8px;
  font-weight: normal;
}

.job-header h5 {
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-weight: normal;
}

.job-metas li {
  margin-right: 6px;
}
</style>
