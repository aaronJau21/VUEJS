import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDrgAh5A8LRuQwzEtuhdX10xbtKKaav1Bs",
    authDomain: "vue-3-2023-4fb3a.firebaseapp.com",
    projectId: "vue-3-2023-4fb3a",
    storageBucket: "vue-3-2023-4fb3a.appspot.com",
    messagingSenderId: "370820788769",
    appId: "1:370820788769:web:6ff3c33bb41bf143042960"
};

initializeApp(firebaseConfig);

const auth = getAuth()

export { auth }