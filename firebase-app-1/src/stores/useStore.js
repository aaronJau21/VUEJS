import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import router from '../router.js'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loading: false
    }),
    actions: {
        async registerUser(email, password) {
            this.loading = true
            try {
               const { user } = await createUserWithEmailAndPassword(auth, email, password)
               this.userData = {email: user.email, uid: user.uid}
               router.push('/')
            } catch (err) {
                console.error(err)
            }finally{
                this.loading = false
            }
        },
        async loginUser(email, password){
            this.loading = true
            try{
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.password, uid:user.uid }
                router.push('/')
            }catch(err){
                console.error(err)
            }finally{
                this.loading = false
            }
        },
        async logout(){
            try{
                await signOut(auth)
                this.userData = null
                router.push('/login')
            }catch(err){
                console.log(err)
            }
        }
    }
})