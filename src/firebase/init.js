
// import firebase from 'firebase';
// import firestore from 'firebase/firestore';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOfz9kdj0NOfMzacmzDfzCyUAui0ao8F4",
  authDomain: "ninja-smoothies-73cbc.firebaseapp.com",
  projectId: "ninja-smoothies-73cbc",
  storageBucket: "ninja-smoothies-73cbc.appspot.com",
  messagingSenderId: "370172597222",
  appId: "1:370172597222:web:9a71a0654fe46a2ef0fc27",
  measurementId: "G-DDGM616LQF"
};


const firebaseApp =  firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore()