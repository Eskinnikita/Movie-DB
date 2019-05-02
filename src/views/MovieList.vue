<template>
  <div class="movie_list">
    <CircleLoader v-if="isLoading" style="margin: 0 auto"></CircleLoader>
    <template v-else>
      <template v-if="moviesStore.movies.length">
        <div class="list_items">
          <MovieItem v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie"/>
        </div>
        <div class="pagination">
          <template v-if="page != 1">
            <router-link
              @click.native="scrollToTop"
              :to="{name:'movie-list', query: {page: page - 1}}"
              class="pagination__item back"
              rel="prev"
            >Сюда</router-link>
          </template>
          |
          <template>
            <router-link
              @click.native="scrollToTop"
              :to="{name:'movie-list', query: {page: page + 1}}"
              class="pagination__item"
              rel="next"
            >Туда</router-link>
          </template>
        </div>
      </template>
    </template>
    <div class="movie_not-found" style="text-align: center; padding-top: 50px" v-else>
      <h2>Sorry, nothing found ;(</h2>
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import MovieItem from "@/components/MovieItem.vue";
import CircleLoader from "vue-loading-spinner/src/components/Circle2.vue";
import { mapState } from "vuex";
export default {
  components: {
    MovieItem: MovieItem,
    CircleLoader: CircleLoader
  },
  created() {
    if (this.moviesStore.search !== "") {
      store.dispatch("moviesStore/findMovie", {
        title: this.moviesStore.search,
        page: this.page
      });
    } else {
      store.dispatch("moviesStore/fetchMovies", this.page);
    }
  },
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    ...mapState(["moviesStore", "isLoading"]),
    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  }
};
</script>

<style scoped>
.list_items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.pagination {
  width: 100%;
  margin: 30px 0 60px 0;
  text-align: center;
}

@media (max-width: 575.98px) {
  .list_items {
    flex-direction: column;
  }
}
</style>