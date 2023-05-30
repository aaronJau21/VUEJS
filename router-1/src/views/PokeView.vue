<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritoStore } from '@/store/favoritos';
// import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritoStore();
const { add } = useFavoritos

const { getData, data, loading, error } = useGetData();

const back = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando información</p>

  <div class="alert alert-danger" v-if="error"> No Existe el Pokemon</div>
  <div v-if="data">
    <img :src="data.sprites?.front_default" :alt="$route.params.name" />
    <h1>Pokemon: {{ $route.params.name }}</h1>
    <button class="btn btn-primary mb-2" @click="add(data)"> favoritos </button>
  </div>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
