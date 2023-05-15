<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';

import axios from 'axios';

const poke = ref({})
const route = useRoute()
const router = useRouter()

const back = () => {
    router.push('/pokemons')
}

const getdata = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data)
        poke.value = data
    } catch (err) {
        console.log(err)
    }
}

getdata()
</script>

<template>
    <img :src="poke.sprites.front_default" :alt="poke.name">
    <h1>Pokeme: {{ $route.params.name }}</h1>
    <!-- <p>{{ poke.abilities.ability.name }}</p> -->
    <button @click="back">Volver</button>
</template>