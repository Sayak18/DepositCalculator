import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEoJsbg4ERoh5_E0Ml--FDf4HiWH6XqyM",
    authDomain: "depocalc-48b49.firebaseapp.com",
    projectId: "depocalc-48b49",
    storageBucket: "depocalc-48b49.appspot.com",
    messagingSenderId: "550685056538",
    appId: "1:550685056538:web:40a7946f72037ea3127ba3",
    measurementId: "G-WYR8Z47B7T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
  
export default db;