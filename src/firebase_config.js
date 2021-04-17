import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBmK1QHm6rVLjRQSFiR_lw1bvspzDCgJfc",
    authDomain: "todoapp-2d214.firebaseapp.com",
    projectId: "todoapp-2d214",
    storageBucket: "todoapp-2d214.appspot.com",
    messagingSenderId: "584249803050",
    appId: "1:584249803050:web:a23379c65025691d0b5e53"};

    firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };