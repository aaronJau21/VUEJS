<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const pokemons = ref([])

const getData = async () => {
    try {
        const { data } = await axios.get(baseURL)
        // console.log(data.results)
        pokemons.value = data.results
    } catch (err) {
        console.log(err)
    }
}

getData();

</script>

<template>
    <h1>Pokemon</h1>
    <ul>
        <li v-for="pokemon in pokemons">
            <router-link :to="`/pokemons/${pokemon.name}`"> {{ pokemon.name }} </router-link>
        </li>
    </ul>
</template>