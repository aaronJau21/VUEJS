<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <button>Logout</button>
  </nav>
  <router-view></router-view>
</template>