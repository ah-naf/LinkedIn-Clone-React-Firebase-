import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, onSnapshot
} from 'firebase/firestore'

import {
  getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTYV2trVoempO8t30iylQkeN5ef-XN3U",
  authDomain: "linkedin-project-b8697.firebaseapp.com",
  projectId: "linkedin-project-b8697",
  storageBucket: "linkedin-project-b8697.appspot.com",
  messagingSenderId: "60918564201",
  appId: "1:60918564201:web:1457c84e97fb43e131e9f8",
  measurementId: "G-8R45565N4D"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

const colRef = collection(db, 'books')



export {colRef, auth}; 