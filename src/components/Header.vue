<template>
  <div class="header">
    <div class="wrapper">
      <router-link
        :to="{name:'movie-list'}"
        style="color: #fff; text-decoration: none;"
        @click.native="clearSearch"
      >
        <div class="home-link">
          <img src="../assets/logo.png" alt="logo" height="35">
          <h3 class="title">KAVO</h3>
        </div>
      </router-link>
      <div class="header_right">
        <form class="search_field" @submit.prevent="findMovieByTitle">
          <input class="search" type="text" placeholder="Search" v-model="search">
          <button class="btn search_button" type="submit"></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    findMovieByTitle() {
      store.dispatch("moviesStore/setSearch", this.search);
      if (this.moviesStore.search !== "") {
        store.dispatch("moviesStore/findMovie", {
          title: this.moviesStore.search,
          page: this.page
        })
      } else {
        this.$route.query.page = 1
        store.dispatch("moviesStore/fetchMovies", this.$route.query.page);
      }
    },
    clearSearch() {
      this.moviesStore.search = "";
      store.dispatch("moviesStore/fetchMovies", 1);
    }
  },
  computed: {
    ...mapState(["moviesStore"]),
    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  }
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
  width: 65%;
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
  border-radius: 2px 0 0 2px;
  font-size: 17px;
  padding: 7px 10px;
  min-width: 210px;
}

.search_button {
  height: 35px;
  width: 50px;
  background: url(../assets/search.png) 14px 9px no-repeat;
  background-color: #27ae60;
  background-size: 20px;
  border-radius: 0 2px 2px 0;
}

.search_field {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

@media (max-width: 575.98px) {
  .wrapper {
    width: 90%;
  }

  .title {
    display: none;
  }
}
</style>