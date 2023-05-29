<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const pokemons = ref([])

const getPokemons = async () => {

    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        pokemons.value = data.results
    } catch (err) {
        console.log(err);
    }

}

getPokemons()
</script>

<template>
    <h2>Pokemons</h2>
    <ul>
        <li v-for="pokemon in pokemons">
            <router-link :to="`/pokemons/${pokemon.name}`" >{{ pokemon.name }}</router-link>
        </li>
    </ul>
</template>