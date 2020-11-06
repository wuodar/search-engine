<template>
  <div role="group">
    <label for="inputTitle">Tytuł</label>
    <b-form-input id="inputTitle"  type="text"
                  placeholder="Podaj tytuł lub fragment tytułu filmu"></b-form-input>
  <b-row class="my-2">
    <b-col sm="4">
      <label for="inputProductionFrom">Rok produkcji od:</label>
    </b-col>
    <b-col sm="8">
      <b-form-input id="inputProductionFrom" type="text"
                    placeholder="Liczba naturalna z przedziału 1900-2019"></b-form-input>
    </b-col>
  </b-row>
    <b-row class="my-2">
      <b-col sm="4">
        <label for="inputProductionTo">Rok produkcji do:</label>
      </b-col>
      <b-col sm="8">
        <b-form-input id="inputProductionTo" type="text"
                      placeholder="Liczba naturalna z przedziału 1900-2019"></b-form-input>
      </b-col>
    </b-row>
    <label for="inputCast">Obsada</label>
    <b-form-input id="inputCast"  type="text"
                  placeholder="Imię i nazwisko"></b-form-input>

    <b-button variant="info col-sm-12 my-2">Szukaj</b-button>
  </div>

</template>

<script>
export default {
  name: "MoviesTable"
}
</script>

<style scoped>

</style>