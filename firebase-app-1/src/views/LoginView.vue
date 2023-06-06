<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
// import { useRoute, useRouter } from 'vue-router';

const user = useUserStore();
// const router = useRouter();

const email = ref('');
const password = ref('');


const handleSubmit = async () => {
    if (!email.value || password.value < 6) {
        return alert('Llena los campos')
    }
    await user.loginUser(email.value, password.value)
    // router.push('/')
}

</script>

<template>
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese Email" v-model.trim="email">
        <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">

        <button type="submit" :disabled="user.loading">Ingresar</button>
    </form>
</template>