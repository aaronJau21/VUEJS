<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore();

const { increments } = useCounter
const { count, double } = storeToRefs(useCounter)
</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increments">+1</button>
</template>
