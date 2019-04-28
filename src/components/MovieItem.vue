<template>
  <div class="movie_item">
    <div class="image_section">
      <img class="poster" :src="posterOrigin + movie.poster_path">
      <div class="vote_scores">{{movie.vote_average}}</div>
    </div>
    <div class="info">
      <h3 class="title">{{ movie.title }}</h3>
      <span>
        <b>Release date:</b>
        {{movie.release_date | moment("MMMM Do YYYY")}}
      </span>
      <p class="description">{{movie.overview | shortcut}}</p>
      <router-link :to="{name:'movie-details', params:{id: movie.id}}">
        <button class="view_more">read more</button>
      </router-link>
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
      let sliced = value.slice(0, 180);
      if (sliced.length < value.length) {
        return (sliced += "...");
      }
    }
  }
};
</script>

<style scoped>
.movie_item {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin: 15px;
  margin-bottom: 60px;
  width: 45%;
}
.poster {
  border-radius: 5px;
  height: 230px;
}

.info {
  margin-left: 10px;
  padding: 0 10px;
  box-sizing: border-box;
}

.description {
  margin-top: 30px;
  font-size: 14px;
}

.title {
  margin-bottom: 15px;
}

.view_more {
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

.image_section {
  position: relative;
}

.vote_scores {
  position: absolute;
  color : #fff; 
  background-color: #27ae60;
  padding: 5px;
  border-radius: 4px;
  top: 15px; 
  left: -10px;
}
</style>