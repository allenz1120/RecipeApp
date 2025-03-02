// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "allensrecipes-cfc96.firebaseapp.com",
  projectId: "allensrecipes-cfc96",
  storageBucket: "allensrecipes-cfc96.firebasestorage.app",
  messagingSenderId: "33009858320",
  appId: "1:33009858320:web:1adcc5d0e718ecc1295795",
  measurementId: "G-C340R4LHY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export these variables so other components can use them
export const db = getFirestore(app);
export const storage = getStorage(app);