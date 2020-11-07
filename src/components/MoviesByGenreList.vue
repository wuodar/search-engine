<template>
  <div>
    <h1>Filmy wg gatunku</h1>
    <div v-for="item in result" v-bind:key="item">{{item.title}}</div>
  </div>
</template>

<script>
import movies from '../assets/movies/movies.json'
// import genres from '../assets/movies/genres.json'

export default{
  data(){
    let _ = require('underscore');
    let data = movies
    let result = _.first(_.reject(data,
        function(item){ return (item.genres.length === 0);}), 10);
    return{
      result
    }
  }
}
</script>

<style scoped>

</style>