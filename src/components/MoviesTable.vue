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
      movies: movies,
      items: moviesList
    }
  },
  methods:{
    addItem(){
      this.iterator += 1
      this.items = _.first(this.movies, 10*this.iterator)
    }
  }
}
</script>

<style scoped>

</style>