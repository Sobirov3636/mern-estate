// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-461f4.firebaseapp.com",
  projectId: "mern-estate-461f4",
  storageBucket: "mern-estate-461f4.appspot.com",
  messagingSenderId: "1053787037126",
  appId: "1:1053787037126:web:30cab7132829ba9ff8a6c7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
