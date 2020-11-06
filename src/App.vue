<template>
  <b-container>
    <h1>Baza filmów</h1>
    <MoviesTable></MoviesTable>
  </b-container>
</template>

<script>
import MoviesTable from "@/components/MoviesTable";

export default {
  name: 'App',
  components: {
    MoviesTable
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
