<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header: Header
  }
};
</script>

<style>

#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.wrapper {
  width: 65%;
  margin: 0 auto;
}

h1,h2,h3,h4,h5 {
  margin: 0;
  padding: 0;
}

.btn {
  cursor: pointer;
  border: none;
  transition: 0.3s;
}

.btn:hover {
  opacity: 0.8;
}

@media (max-width: 575.98px) {
  .wrapper {
    width: 90%;
  }
}
</style>
