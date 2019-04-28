<template>
  <div class="header">
    <div class="wrapper">
      <router-link :to="{name:'movie-list'}" style="color: #fff; text-decoration: none;">
        <div class="home-link">
          <img src="../assets/logo.png" alt="logo" height="40">
          <h3>Movie search</h3>
        </div>
      </router-link>
      <div class="search-field">
        <input class="search" type="text" placeholder="Search" >
      </div>
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
  margin-bottom: 50px;
  background-color: #0b2239;
}

.wrapper {
  width: 75%;
  margin: 0 auto;
}

.home-link {
  display: flex;
  align-items: center;
}

.home-link > h3 {
  margin-left: 20px;
}

.header > .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  background-image: url(../assets/search.png) 0 -20px no-repeat;
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 2px;
  font-size: 17px;
  padding: 5px 10px;
  min-width: 250px;
}
</style>