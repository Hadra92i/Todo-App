import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAKnIlPs6XMab8_v__IDbDKLuVqVZ6HrfE",
    authDomain: "hadra-todo-app.firebaseapp.com",
    projectId: "hadra-todo-app",
    storageBucket: "hadra-todo-app.appspot.com",
    messagingSenderId: "998867771547",
    appId: "1:998867771547:web:5bbfdd62677186f765663e"
});

const db = getFirestore();

export { db };
