<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Poke Api
      </router-link>

      <div class="d-flex">
        <router-link to="/" class="mx-3 px-2 nav-link btn btn-outline-primary">Home</router-link>
        <router-link to="/pokemons" class="mx-2 px-2 nav-link btn btn-outline-primary">Pokemones</router-link>
      </div>

    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>
