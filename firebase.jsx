// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsPcoVeo9CV0lVMEeQWIfQMOE3hbOo2D4",
  authDomain: "grupolfa.firebaseapp.com",
  projectId: "grupolfa",
  storageBucket: "grupolfa.appspot.com",
  messagingSenderId: "92751989367",
  appId: "1:92751989367:web:8c5b985bec9532135d1472",
  measurementId: "G-RPNTMHDZ82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);