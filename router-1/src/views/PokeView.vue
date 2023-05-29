<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const route = useRoute();
const router = useRouter();

const { getData, data, loading } = useGetData();

const back = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando información</p>

  <div v-if="data">
    <img :src="data.sprites?.front_default" :alt="$route.params.name" />
    <h1>Pokemon: {{ $route.params.name }}</h1>
  </div>
  <h1 v-else>No existe el pokemon</h1>
  <button @click="back">Volver</button>
</template>
