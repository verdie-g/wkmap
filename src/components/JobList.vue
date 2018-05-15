<template>
  <ul v-if="sortedJobs.length !== 0" class="job-list">
    <li v-for="job in sortedJobs"
        :key="job.objectID"
        class="columns is-marginless job">

      <div class="column" @click="selectJob(job)">
        <div class="columns">
          <div class="job-picture column is-narrow">
            <img v-bind:src="job.company_logo_url" />
          </div>
          <div class="job-header column">
            <h5 class="title is-size-7 has-text-grey">{{job.company_name}}</h5>
            <h4 class="title is-size-6">{{job.name}}</h4>
            <ul class="job-metas list-inline is-size-7">
              <li>
                <b-icon icon="briefcase" size="is-small"></b-icon>
                <span>{{job.contract_type.fr}}</span>
              </li>
              <li>
                <b-icon icon="map-marker-outline" size="is-small"></b-icon>
                <span>{{job.office_city}}</span>
              </li>
              <li>
                <b-icon icon="clock" size="is-small"></b-icon>
                <time>{{job.published_at | moment('from') }}</time>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="column is-narrow job-open">
        <b-tooltip label="Voir le job sur welcometothejungle.co" position="is-left">
          <a :href="wttjUrl(job)" target="_blank" class="is-size-4 is-black">
            <b-icon icon="web" size="is-small" type="is-dark" />
          </a>
        </b-tooltip>
      </div>

    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'JobList',
  nbJobs: 30,
  computed: {
    ...mapGetters([
      'jobsSortedByDistance',
    ]),
    sortedJobs() {
      return this.jobsSortedByDistance.slice(0, this.$options.nbJobs);
    },
  },
  methods: {
    selectJob(job) {
      this.$root.$emit('select-job', job);
    },
    wttjUrl(job) {
      return job.websites_urls.filter(j => j.website_reference === 'wttj_fr')[0].url;
    },
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

.job-open {
  line-height: 60px;
  visibility: hidden;
}

.job:hover .job-open {
  visibility: visible;
}
</style>
