<template>
  <div class="movie_info">
    <CircleLoader v-if="isLoading" style="margin: 0 auto"></CircleLoader>
    <template v-else>
      <div class="header">
        <img class="poster" :src="posterOrigin + movie.poster_path" :alt="movie.title">
        <div class="header_info">
          <div class="info_top">
            <h1 class="title">
              {{ movie.title }}
              <span class="release_date">({{movie.release_date | moment("YYYY") }})</span>
            </h1>
            <div class="scores">{{movie.vote_average | userPercents}}%</div>
          </div>
          <span>
            <i class="tagline">{{movie.tagline}}</i>
          </span>
          <div class="genres">
            <div class="genres_item" v-for="genre in movie.genres" :key="genre.id">{{genre.name}}</div>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            <p>{{ movie.overview}}</p>
          </div>
          <div class="runtime info-point">
            <h3>Runtime:</h3>
            <span v-if="movie.runtime != 0">{{movie.runtime | minutesToHours}}</span>
            <span v-else>unknown</span>
          </div>
          <div class="budget info-point">
            <h3>Budget:</h3>
            <span v-if="movie.budget != 0">{{movie.budget}}$</span>
            <span v-else>unknown</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import CircleLoader from "vue-loading-spinner/src/components/Circle2.vue";
import {mapState} from 'vuex'
export default {
  components: {
    CircleLoader:CircleLoader
  },
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
      return value * 10;
    },
    minutesToHours(runTime) {
      let minutes = runTime % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      let hours = (runTime - minutes) / 60;
      return hours + ":" + minutes;
    }
  },
  computed: {
    ...mapState(['isLoading'])
  }
};
</script>

<style scoped>
.poster {
  height: 400px;
  border-radius: 4px 0 0 4px;
  margin-right: 30px;
}

.header {
  display: flex;
  justify-content: flex-start;
  height: auto;
  color: #fff;
  background-size: cover;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

.overview > p {
  font-size: 14px;
}

.title {
  margin-bottom: 3px;
}

.info_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scores {
  color: #fff;
  font-weight: 800;
  background-color: #27ae60;
  padding: 5px 15px;
  border-radius: 3px;
}

.genres {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
}

.genres_item {
  margin-right: 20px;
  background-color: #27ae60;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  margin-bottom: 5px;
}

.genres_item:last-child {
  margin-right: 0;
}

.info-point > * {
  display: inline;
}

.info-point {
  margin-bottom: 20px;
}

@media (max-width: 575.98px) {
  body {
    overflow: hidden;
  }
  .poster {
    height: auto;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .header {
    flex-direction: column;
    box-shadow: none;
  }

  .header_info {
    padding: 10px 10px 40px 10px;
  }

  .info_top {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
}
</style>