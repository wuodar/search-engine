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

export default{
  data(){
    let _ = require('underscore');
    let actorList = _.uniq(_.flatten(_.map(movies, function (movie){return movie.cast})))
    let moviesByCast = _.map(actorList, function (actor){
      return {actorName: actor, movies: _.filter(movies, function (movie){
          return _.contains(movie.cast, actor)
        })}
    })
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