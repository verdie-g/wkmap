<template>
  <ul v-if="jobs.length !== 0" class="job-list">
    <li v-for="job in jobs.slice(0, $options.nbJobs)" class="job columns">
      <div class="job-picture column is-narrow">
        <img v-bind:src="job.company_logo_url" />
      </div>
      <div class="job-header column">
        <h5 class="title">{{job.company_name}}</h5>
        <h4 class="title">{{job.name}}</h4>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'JobList',
  nbJobs: 20,
  props: ['jobs'],
};
</script>

<style scoped>
.job-list {
  overflow: auto;
  list-style-type: none;
}

.job {
  height: 70px;
  cursor: pointer;
}

.job:hover {
  background-color: #eee;
}

.job-picture {
}

.job-picture img {
  height: 46px;
}

.job-header {
}

.job-header h4 {
  font-size: 16px;
}

.job-header h5 {
  font-size: 13px;
  margin-bottom: 3px;
}
</style>
