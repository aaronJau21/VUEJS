<script setup>
import { useUserStore } from './stores/useStore';

const userStore = useUserStore()

</script>

<template>
  <nav v-if="!userStore.loading">
    <router-link to="/" v-if="userStore.userData">Home</router-link> |
    <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
    <router-link to="/register" v-if="!userStore.userData">Register</router-link> |
    <button @click="userStore.logout" v-if="userStore.userData">Logout</button>
  </nav>
  <div v-else>
    Loading user...
  </div>
  <router-view></router-view>
</template>