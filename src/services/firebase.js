// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKksSFhglIypszaOJ2ZRnq6OKcJHkYMwI",
  authDomain: "elevate-inventory-f0638.firebaseapp.com",
  databaseURL: "https://elevate-inventory-f0638-default-rtdb.firebaseio.com",
  projectId: "elevate-inventory-f0638",
  storageBucket: "elevate-inventory-f0638.firebasestorage.app",
  messagingSenderId: "420666212578",
  appId: "1:420666212578:web:805b28b2fa5efb6cc1debb",
  measurementId: "G-S9BKBQELT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);