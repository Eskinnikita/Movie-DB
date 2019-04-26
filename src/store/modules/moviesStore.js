import MoviesService from "@/services/MoviesService.js";

export const namespaced = true;

export const state = {
    movies: []
};

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies.results;
    console.log(state.movies);
  }
};

export const actions = {
  fetchMovies({ commit }, page) {
    return MoviesService.getMovies(page)
      .then(response => {
        console.log(page)
        commit("SET_MOVIES", response.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};
