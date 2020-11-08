<template>
  <div>
    <h1>Filmy wg gatunku</h1>
    <div v-for="item in moviesByGenre" v-bind:key="item">
      <div v-if="item.movies.length !==0">
        <h4>{{item.genre}}</h4>
        <ol>
          <li v-for="movie in item.movies" v-bind:key="movie">
            {{movie.title}}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import movies from '../assets/movies/movies.json'
import genres from '../assets/movies/genres.json'

export default{
  data(){
    let _ = require('underscore');
    let moviesByGenre = _.map(genres, function (genre){
      return {genre: genre, movies: _.filter(movies, function (movie){
        return _.contains(movie.genres, genre)
      })}
    })
    return {
      movies,
      genres,
      moviesByGenre: moviesByGenre,
    }
  }
}
</script>

<style scoped>

</style>