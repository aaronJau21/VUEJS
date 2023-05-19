<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/useStore';
// import { useRouter } from 'vue-router'

const userStore = useUserStore();
// const router = useRouter();

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
    if(!email.value || !password.value.length > 5 ){
        alert('Llena los campos')
    }
    
    await userStore.registerUser(email.value, password.value)
    // router.push('/')
}
</script>

<template>
    <div>
        <h1>Register</h1>
        <form action="" @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese Imail" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loading">Crear Usuario</button>
        </form>
    </div>
</template>