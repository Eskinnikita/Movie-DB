<template>
  <div class="movie_list">
    <MovieItem v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie"/>
    <div class="pagination">
      <template v-if="page != 1">
        <router-link
          :to="{name:'movie-list', query: {page: page - 1}}"
          class="pagination__item back"
          rel="prev"
        >Сюда</router-link>
      </template>
      {{this.page}}
      <template>
        <router-link
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
  methods: {},
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
.movie_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>