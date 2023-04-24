// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmvAbhboFlPR-an7nM4Ps2MjJVzEgkng8",
  authDomain: "next-to-do-99182.firebaseapp.com",
  projectId: "next-to-do-99182",
  storageBucket: "next-to-do-99182.appspot.com",
  messagingSenderId: "220497105427",
  appId: "1:220497105427:web:db8d6e547cca882299e5e6",
  measurementId: "G-EBBV49ZJ98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
