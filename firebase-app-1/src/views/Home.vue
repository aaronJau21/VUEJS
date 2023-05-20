<script setup>
import { useUserStore } from '../stores/useStore';
const useStore = useUserStore()

</script>

<template>
    <h1>Hello</h1>
    <p>{{ useStore.userData?.email }}</p>
</template>
