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

</style>
