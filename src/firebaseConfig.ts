import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}
export const firebaseConfig: FirebaseConfig = {
    apiKey: "AIzaSyC_x0Hr2dU2ebyU4ENnDNeWGERwwFZx0-E",
    authDomain: "teste2-b6cad.firebaseapp.com",
    projectId: "teste2-b6cad",
    storageBucket: "teste2-b6cad.firebasestorage.app",
    messagingSenderId: "52677562858",
    appId: "1:52677562858:web:fd55a802307fac56822293"
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);