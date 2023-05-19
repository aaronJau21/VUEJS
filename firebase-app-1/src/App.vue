<script setup>
import { useUserStore } from './stores/useStore';

const userStore = useUserStore()



</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <button @click="userStore.logout">Logout</button>
  </nav>
  <router-view></router-view>
</template>