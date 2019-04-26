<template>
  <div class="movie_item">
    <img class="movie_poster" :src="posterOrigin + movie.poster_path">
    <div class="movie_info">
      <h3 class="movie_title">{{ movie.title }}</h3>
      <span>
        <b>Release date:</b>
        {{movie.release_date | moment("MMMM Do YYYY")}}
      </span>
      <p class="movie_description">{{movie.overview | shortcut}}</p>
      <button class="view_more">read more</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      posterOrigin: "https://image.tmdb.org/t/p/w1280/"
    };
  },
  filters: {
    shortcut(value) {
      var sliced = value.slice(0, 180);
      if (sliced.length < value.length) {
        return (sliced += "...");
      }
    }
  }
}
</script>

<style scoped>
.movie_item {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin: 15px;
  margin-bottom: 60px;
}
.movie_poster {
  border-radius: 5px;
  height: 230px;
}

.movie_info {
  margin-left: 30px;
  padding: 0 10px;
  box-sizing: border-box;
}

.movie_description {
  margin-top: 30px;
  font-size: 14px;
}

.movie_title {
  margin-bottom: 15px;
}

.view_more {
  position: absolute;
  bottom: 0;
  background-color: #27ae60;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  color: #fff;
}

.view_more:hover {
  opacity: 0.7;
}
</style>