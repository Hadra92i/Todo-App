import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAL-cNuYf61luCgtdCJ146ZpquIT9UDgWQ",
    authDomain: "todoapp-df801.firebaseapp.com",
    projectId: "todoapp-df801",
    storageBucket: "todoapp-df801.appspot.com",
    messagingSenderId: "204497224039",
    appId: "1:204497224039:web:07d8d31581b6d8dca5afc2"
});

const db = getFirestore();

export { db };