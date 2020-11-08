<template>
  <b-container>
    <h1>Baza filmów</h1>
    <SearchEngine></SearchEngine>
    <MoviesTable></MoviesTable>
    <MovieListByGenre></MovieListByGenre>
    <MovieListByActor></MovieListByActor>
  </b-container>
</template>

<script>
import MoviesTable from "@/components/MoviesTable";
import SearchEngine from "@/components/SearchEngine";
import MovieListByGenre from "@/components/MovieListByGenre";
import MovieListByActor from "@/components/MovieListByActor";

export default {
  name: 'App',
  components: {
    MovieListByActor,
    MoviesTable,
    SearchEngine,
    MovieListByGenre
  }
};
</script>

<style>

</style>
