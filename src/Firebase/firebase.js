import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAiFnKnh9wQq8aSyq74HOy9LjomvRoGnYs",
    authDomain: "todo-list-328503.firebaseapp.com",
    projectId: "todo-list-328503",
    storageBucket: "todo-list-328503.appspot.com",
    messagingSenderId: "151576986442",
    appId: "1:151576986442:web:9b0c33b313c1f36352b7b3"
};

const firebase = initializeApp(firebaseConfig)
export { firebase }
export const db = getFirestore();