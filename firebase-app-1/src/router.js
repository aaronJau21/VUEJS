import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './stores/useStore.js'

const requireAuth = async(to, from, next) => {
    const useStore = useUserStore()
    
    useStore.loading = true
    const user = await useStore.currentUser()
    if(user){
        next()
    }else{
        next('/login')
    }
    useStore.loading = false
}

const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import('./views/Home.vue'),
        beforeEnter: requireAuth
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./views/Register.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router