<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, loading, getData, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <h2>Pokemons</h2>
  <p v-if="loading">Cargando información</p>
  <div class="alert alert-danger" v-if="error">{{ error }}</div>
  <div v-if="data">
    <ul class="list-group">
      <li v-for="pokemon in data.results" class="list-group-item">
        <router-link :to="`/pokemons/${pokemon.name}`">{{
          pokemon.name
        }}</router-link>
      </li>
    </ul>
    <div class="mt-2">
      <button :disabled="!data.previous" class="btn btn-warning me-3" @click="getData(data.previous)">Previous</button>
      <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
    </div>
  </div>
</template>
