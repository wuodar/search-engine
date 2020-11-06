<template>
  <b-form v-if="show">
    <b-form-group
        id="input-group-1"
        label="Tytuł"
        label-for="inputTitle"
    >
      <b-form-input
          id="inputTitle"
          v-model="form.title"
          type="text"
          placeholder="Podaj tytuł lub fragment tytułu filmu"
      ></b-form-input>
    </b-form-group>
    <b-form-group
        id="input-group-2"
        label="Rok produkcji od:"
        label-for="inputProductionFrom"
        label-cols-sm="4"
    >
        <b-form-input
            id="inputProductionFrom"
            v-model="form.productionFrom"
            type="text"
            placeholder="Liczba naturalna z przedziału 1900-2019"
        ></b-form-input>
    </b-form-group>
    <b-form-group
        id="input-group-3"
        label="Rok produkcji do:"
        label-for="inputProductionTo"
        label-cols-sm="4"
    >
      <b-form-input
          id="inputProductionTo"
          v-model="form.productionTo"
          type="text"
          placeholder="Liczba naturalna z przedziału 1900-2019"
      ></b-form-input>
    </b-form-group>
    <b-form-group
        id="input-group-4"
        label="Obsada"
        label-for="inputCast"
    >
      <b-form-input
          id="inputCast"
          v-model="form.cast"
          type="text"
          placeholder="Imię i nazwisko"
      ></b-form-input>
    </b-form-group>
      <b-button variant="info col-sm-12" type="button">Szukaj</b-button>
  </b-form>
</template>

<script>
export default {
name: "search-engine",
  data() {
    return {
      form: {
        title: '',
        productionFrom: '',
        productionTo: '',
        cast: '',
      },
      show: true
    }
  },
    methods: {
    }
  }
</script>

<style scoped>

</style>