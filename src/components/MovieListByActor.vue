<template>
  <div>
    <h1>Filmy wg obsady</h1>
    <div v-for="item in moviesByCast" v-bind:key="item">
      <div v-if="item.movies.length !==0">
        <h4>{{item.actorName}}</h4>
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
let _ = require('underscore');

export default{
  data(){
    let moviesList = _.first(movies, 100)
    let actorList = _.uniq(_.flatten(_.map(moviesList, function (movie){return movie.cast})))
    let moviesByCast = _.first(_.map(actorList, function (actor){
      return {actorName: actor, movies: _.filter(moviesList, function (movie){
          return _.contains(movie.cast, actor)
        })}
    }), 100)
    return {
      movies,
      actorList,
      moviesByCast,
    }
  }
}
</script>

<style scoped>

</style>