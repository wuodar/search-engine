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
          {{person+', '}}
        </span>
      </template>
      <template #cell(genres)="data">
        <span v-for="genre in data.item.genres" v-bind:key="genre">
          {{genre+', '}}
        </span>
      </template>
    </b-table>
  </div>
</template>

<script>
import movies from "../assets/movies/movies.json"
export default {
  name: "MoviesTable",
  data() {
    return {
      fields: [
        'title',
        { key: 'year', label: 'Production Year' },
        'cast',
        'genres'
      ],
      items: movies
    }
  }
}
</script>

<style scoped>

</style>