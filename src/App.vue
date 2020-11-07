<template>
  <b-container>
    <h1>Baza filmów</h1>
    <SearchEngine></SearchEngine>
    <MovieByGenreList></MovieByGenreList>
  </b-container>
</template>

<script>
// import MoviesTable from "@/components/MoviesTable";
import SearchEngine from "@/components/SearchEngine";
import MovieByGenreList from "@/components/MoviesByGenreList";

export default {
  name: 'App',
  components: {
    // MoviesTable,
    SearchEngine,
    MovieByGenreList
  }
};
</script>

<style>

</style>
