import { initializeApp } from "firebase/app"
import Firebase from "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCydDfQf65BoKp7SC5lNMPgyIaIwPf6xdw",
    authDomain: "login-e085d.firebaseapp.com",
    projectId: "login-e085d",
    storageBucket: "login-e085d.appspot.com",
    messagingSenderId: "138992350553",
    appId: "1:138992350553:web:5bb4a68683d82e98184848",
    measurementId: "G-MHS9Z9718L"
};

let firebase = initializeApp(firebaseConfig);
export default firebase;