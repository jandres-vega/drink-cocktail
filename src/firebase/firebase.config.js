import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAAM8LIk6f5sP7eY6ud2gN_L3DBppXJkpY",
    authDomain: "drinks-cocktail.firebaseapp.com",
    projectId: "drinks-cocktail",
    storageBucket: "drinks-cocktail.appspot.com",
    messagingSenderId: "192829094286",
    appId: "1:192829094286:web:4643dafead94a01939ccdf",
    measurementId: "G-TL0Z6M3KYC"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);