// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4aZ5RXpt42p72V9EEU9-1WsgnK_7x_g4",
  authDomain: "blogs-c8c97.firebaseapp.com",
  projectId: "blogs-c8c97",
  storageBucket: "blogs-c8c97.firebasestorage.app",
  messagingSenderId: "523719804043",
  appId: "1:523719804043:web:deffed0e4159e44d24808e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);