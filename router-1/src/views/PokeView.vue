<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const poke = ref({});

const back = () => {
    router.push('/pokemons')
}

const getPoke = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data)
        poke.value = data
    } catch (err) {
        console.log(err)
        poke.value = null
    }
}

getPoke()

</script>

<template>
    <div v-if="poke">
        <img :src="poke.sprites?.front_default" :alt="poke.name">
        <h1>Pokemon: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button @click="back">Volver</button>
</template>