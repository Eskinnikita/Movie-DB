import Vue from "vue";
import Router from "vue-router";
import MovieList from "./views/MovieList.vue";
import MovieDetails from "@/views/MovieDetails.vue";
import store from "@/store/store";
import NProgress from 'nprogress'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "movie-list",
      component: MovieList
    },
    {
      path: "/movie/:id",
      name: "movie-details",
      component: MovieDetails,
      props: true,
      beforeEnter(to, from, next) {
        store
          .dispatch("moviesStore/fetchMovie", to.params.id)
          .then(movie => {
            to.params.movie = movie;
            next()
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    }
  ],
});

export default router
