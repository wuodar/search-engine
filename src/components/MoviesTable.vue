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
    return {
      fields: [
        'title',
        { key: 'year', label: 'Production Year' },
        'cast',
        'genres'
      ],
      iterator: 1,
      filtredMovieList: movies,
      items: moviesList
    }
  },
  methods:{
    addItem(){
      this.iterator += 1
      this.items = _.first(this.filtredMovieList, 10*this.iterator)
    },
    filterMovieList (form) {
      if(form) {
        return _.filter(movies, function (movie) {
          if(form.title !== "" && !movie.title.includes(form.title)) {
            return false;
          }
          if(form.productionFrom !== "" && movie.year < form.productionFrom){
            return false;
          }
          if(form.productionTo !== "" && movie.year > form.productionTo) {
            return false;
          }
          return !(form.cast !== "" && !_.contains(movie.cast, form.cast));
        });
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.$root.$on("searchMovie", (form) => {
      this.filtredMovieList = this.filterMovieList(form);
      this.iterator = 0;
      this.addItem();
    });
  },
}
</script>

<style scoped>

</style>