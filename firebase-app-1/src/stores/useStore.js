import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null
    }),
    actions: {
        async registerUser(email, password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (err) {
                console.log(err)
            }
        }
    }
})