import MoviesService from "@/services/MoviesService.js";

export const namespaced = true;

export const state = {
    movies: [],
    movie: {}
};

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies.results;
  },
  SET_MOVIE(state, movie) {
    state.movie = movie
  }
};

export const actions = {
  fetchMovies({ commit }, page) {
    return MoviesService.getMovies(page)
      .then(response => {
        commit("SET_MOVIES", response.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  fetchMovie({commit}, id) {
    return MoviesService.getMovieById(id)
    .then(response => {
      commit('SET_MOVIE', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err.message)
    })
  }
};
