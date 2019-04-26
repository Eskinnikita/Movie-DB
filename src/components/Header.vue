<template>
  <div class="header">
    <div class="wrapper">
      <router-link :to="{name:'movie-list'}">
        <h2>Movie search</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #353535;
  margin-bottom: 100px;
  background-color: #0b2239;
}

.wrapper {
  width: 75%;
  margin: 0 auto;
}
</style>