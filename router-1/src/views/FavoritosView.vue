<script setup>
import { useFavoritoStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritoStore();

const { favoritos } = storeToRefs(useFavoritos)
// const { remove } = useFavoritos
</script>

<template>
    <h1>Favoritos</h1>
    <ul class="list-group">
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}
            </div>
            <div>
            <button class="btn btn-sm btn-danger" @click="useFavoritos.remove(poke.id)">Eliminar</button>
        </div>
        </li>
    </ul>
</template>