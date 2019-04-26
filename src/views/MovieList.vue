<template>
  <div class="movie_list">
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
      {{this.page}}
      <template>
        <router-link
          @click.native="scrollToTop"
          :to="{name:'movie-list', query: {page: page + 1}}"
          class="pagination__item"
          rel="next"
        >Туда</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import MovieItem from "@/components/MovieItem.vue";
import { mapState } from "vuex";
export default {
  components: {
    MovieItem: MovieItem
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
    ...mapState(["moviesStore"]),
    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  },
  created() {
    store.dispatch("moviesStore/fetchMovies", this.page);
  }
};
</script>

<style scoped>
.list_items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.pagination {
  width: 100%;
  margin: 30px 0;
  text-align: center;
}
</style>