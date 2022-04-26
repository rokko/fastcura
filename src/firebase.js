// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXN9ROqir9XQByysX9sAf78Pr9o5lJjMg",
    authDomain: "fastcura-d09cb.firebaseapp.com",
    projectId: "fastcura-d09cb",
    storageBucket: "fastcura-d09cb.appspot.com",
    messagingSenderId: "703748089575",
    appId: "1:703748089575:web:d09d5892518c68b6b6a442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)