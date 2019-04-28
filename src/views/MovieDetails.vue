<template>
  <div class="movie_info">
    <div class="header">
      <div class="poster">
        <img :src="posterOrigin + movie.poster_path" :alt="movie.title">
      </div>
      <div class="header_info">
        <h1 class="title">
          {{ movie.title }}
          <span class="release_date">({{movie.release_date | moment("YYYY") }})</span>
        </h1>
        <div class="overview">
          <h3>Overview</h3>
          <p>{{ movie.overview}}</p>
          <p>{{ movie.vote_average | userPercents}}</p>
        </div>
      </div>
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
  created() {
    console.log(this.movie);
  },
  filters: {
      userPercents(value) {
        //   let newScores = value.split('.');
        //   return newScores[0] + newScores[2]
      }
  }
};
</script>

<style scoped>
.poster {
  height: 100%;
}
.poster > img {
  height: 400px;
  border-radius: 4px 0 0 4px;
  margin-right: 30px;
}

.header {
  height: auto;
  color: #fff;
  background-size: cover;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header {
  display: flex;
  justify-content: flex-start;
}

.header_info {
  padding: 20px 70px 20px 0;
}

.release_date {
  opacity: 0.5;
  font-size: 20px;
}

.overview {
    margin-top: 20px;
}
</style>