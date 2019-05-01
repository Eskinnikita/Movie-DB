import MoviesService from "@/services/MoviesService.js";
import { stat } from "fs";

export const namespaced = true;

export const state = {
  movies: [],
  movie: {},
  pages: null,
  search:''
 
};

export const mutations = {
  SET_MOVIES(state, movies) {
    state.pages = movies.total_pages;
    state.movies = movies.results;
  },
  SET_MOVIE(state, movie) {
    state.movie = movie;
  },
  SET_FOUND_MOVIES(state, titles) {
    state.movies = titles.results;
  },
  SET_SEARCH(state, search) {
    state.search = search
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
  fetchMovie({ commit }, id) {
    return MoviesService.getMovieById(id)
      .then(response => {
        commit("SET_MOVIE", response.data);
        return response.data;
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  findMovie({ commit }, {title, page}) {
    return MoviesService.searchMovie(title, page)
      .then(response => {
        commit("SET_FOUND_MOVIES", response.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  setSearch({commit}, search) {
    commit('SET_SEARCH', search)
  }
};
