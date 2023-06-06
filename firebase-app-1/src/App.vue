<script setup>
import { useUserStore } from './stores/userStore';

const user = useUserStore()



</script>

<template>
  <nav v-if="!user.loadingSession">
    <router-link to="/" v-if="user.userData">Home</router-link> |
    <router-link to="/login" v-if="!user.userData">Login</router-link> |
    <router-link to="/register" v-if="!user.userData">Register</router-link> |
    <button @click="user.logoutUser" v-if="user.userData">Logout</button>
  </nav>
  <div v-else>Loading</div>
  <RouterView />
</template>