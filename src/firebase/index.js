import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDy3SW8bYlUte39CSwsGGx6N9GWwDNrjp0",
    authDomain: "coderhouse-ecommerce-ce5c5.firebaseapp.com",
    projectId: "coderhouse-ecommerce-ce5c5",
    storageBucket: "coderhouse-ecommerce-ce5c5.appspot.com",
    messagingSenderId: "349868482654",
    appId: "1:349868482654:web:e8c825f1469067bb05d4cf"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}