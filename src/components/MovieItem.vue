<template>
  <div class="movie_item">
    <div class="image_section">
      <img class="poster" :src="posterOrigin + movie.poster_path" v-if="movie.poster_path != null" :alt="movie.title">
      <img v-else class="poster poster_not-found" src="../assets/image-not-found.jpg" alt="poster not found">
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
        <button class="btn view_more">read more</button>
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

.poster_not-found {
  width: 160px;
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
  border-radius: 5px;
  color: #fff;
}


.image_section {
  position: relative;
}

.vote_scores {
  width: 25px;
  text-align: center;
  position: absolute;
  color: #fff;
  background-color: #27ae60;
  padding: 5px;
  border-radius: 4px;
  top: 15px;
  left: -10px;
}

@media (max-width: 575.98px) {
  .movie_item {
    flex-direction: column;
    width: 100%;
    margin: 0 0 30px 0;
    padding-bottom: 20px;
  }

  .image_section {
    text-align: center;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .poster {
    margin-bottom: 10px;
    height: 500px; 
  }

  .info {
    margin-left: 0;
  }

  .vote_scores {
    top: 15px;
    left: 0;
  }

  .view_more {
    width: 100%;
  }
}
</style>