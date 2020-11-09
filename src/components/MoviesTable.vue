<template>
  <div>
    <b-table small :fields="fields" :items="items" responsive="sm">
      <template #cell(title)="data">
        {{data.item.title}}
      </template>
      <template #cell(year)="data">
        {{data.item.year}}
      </template>
      <template #cell(cast)="data">
        <span v-for="person in data.item.cast" v-bind:key="person">
          {{person+","}}
        </span>
      </template>
      <template #cell(genres)="data">
        <span v-for="genre in data.item.genres" v-bind:key="genre">
          {{genre+","}}
        </span>
      </template>
    </b-table>
    <b-button variant="info col-sm-12" type="button" v-on:click="addItem()">Pokaż więcej</b-button>
  </div>
</template>

<script>
import movies from "../assets/movies/movies.json"
import {_} from 'vue-underscore'

export default {
  name: "MoviesTable",
  data() {
    let moviesList = _.first(movies, 10)
    let filtredMovieList = [];
    return {
      fields: [
        'title',
        { key: 'year', label: 'Production Year' },
        'cast',
        'genres'
      ],
      iterator: 1,
      movies,
      filtredMovieList,
      items: moviesList
    }
  },
  methods:{
    addItem(){
      this.iterator += 1
      this.items = _.first(this.filtredMovieList, 10*this.iterator)
    },
    doTheSearch (wincent) {
      if(wincent) {
        return _.filter(movies, function (movie) {
          if(wincent.title !== "" && !movie.title.includes(wincent.title)) {
            return false;
          }
          if(wincent.productionFrom !== "" && movie.year < wincent.productionFrom){
            return false;
          }
          if(wincent.productionTo !== "" && movie.year > wincent.productionTo) {
            return false;
          }
          return !(wincent.cast !== "" && !_.contains(movie.cast, wincent.cast));


        });
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.$root.$on("searchMovie", (form) => {
      this.filtredMovieList = this.doTheSearch(form);
      this.iterator = 0;
      this.addItem();
    });
  },
}
</script>

<style scoped>

</style>