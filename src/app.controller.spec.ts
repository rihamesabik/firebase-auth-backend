// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARl_Piq93N61cN3BVbYE60MTDPaJ2BBvE",
  authDomain: "miniprojet-300a0.firebaseapp.com",
  projectId: "miniprojet-300a0",
  storageBucket: "miniprojet-300a0.firebasestorage.app",
  messagingSenderId: "872881845890",
  appId: "1:872881845890:web:b047532af0ed938f99269b",
  measurementId: "G-2WP6ZRR2Q3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
