<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, loading, getData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <h2>Pokemons</h2>
  <p v-if="loading">Cargando información</p>
  <div v-if="data">
    <ul>
      <li v-for="pokemon in data.results">
        <router-link :to="`/pokemons/${pokemon.name}`">{{
          pokemon.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
