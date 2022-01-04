import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyClboTSn1iQlwY7qXivjJf5vl8J5rkHhxE",
    authDomain: "shorten-link-url.firebaseapp.com",
    projectId: "shorten-link-url",
    storageBucket: "shorten-link-url.appspot.com",
    messagingSenderId: "1023701581431",
    appId: "1:1023701581431:web:bf7e2af1bac572e8de5072",
    measurementId: "G-SELXMQ2T3N"
});

export const db = getFirestore();

export default firebaseApp