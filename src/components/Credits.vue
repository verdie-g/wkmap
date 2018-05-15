<template>
  <div>
    <ul class="columns is-gapless">
      <li class="column credit credit-github">
        <a href="https://github.com/verdie-g/wkmap" target="_blank">
          <b-icon icon="github-circle" size="is-large"></b-icon>
        </a>
      </li>

      <li class="column credit credit-wttj">
        <a href="https://www.welcometothejungle.co/" target="_blank">
          <img src="https://www.welcometothejungle.co/images/sites/logo-square.png?v2" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Credits',
};
</script>

<style scoped>
.credit {
  margin: 0px 6px !important;
}

.credit a {
  display: block;
}

.credit-github {
  text-align: center;
}

.credit-github a,
.credit-wttj img {
  margin: 6px 0;
}

.credit-wttj img {
  height: 3rem;
}
</style>
