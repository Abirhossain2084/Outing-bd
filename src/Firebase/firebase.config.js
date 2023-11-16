// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBryU8XkgfqSOCIk0JEli9pSE8ZLa9ohZY",
  authDomain: "outingbd-e0644.firebaseapp.com",
  projectId: "outingbd-e0644",
  storageBucket: "outingbd-e0644.appspot.com",
  messagingSenderId: "872695794878",
  appId: "1:872695794878:web:c8cef5c8fdf4e1053fa2ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;