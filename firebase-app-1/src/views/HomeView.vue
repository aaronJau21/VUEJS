<script setup>
import { useUserStore } from '../stores/userStore'

const { userData } = useUserStore();
</script>

<template>
   <h1>Home</h1>
   <p> {{ userData?.email }} </p>
</template>