import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router";

export const useUserStore = defineStore("user", {
  state: () => ({
    userData: null,
    loading: false,
    loadingSession: false
  }),
  actions: {
    async registerUser(email, password) {
      this.loading = true;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    async loginUser(email, password) {
      this.loading = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        this.userData = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    async logoutUser() {
      this.loading = true;
      try {
        await signOut(auth);
        this.userData = null;
        router.push("/login");
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    currentUser() {
      return new Promise((resolve, reject) => {
        const suscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.userData = { email: user.email, uid: user.uid };
            } else {
              this.userData = null;
            }
            resolve(user);
          },
          (e) => reject(e)
        );
        suscribe();
      });
    },
  },
});
