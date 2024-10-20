// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaq-Wa7Ljbf9gLIrhpvUj7fVlegCx9Kt4",
  authDomain: "frank-gram.firebaseapp.com",
  projectId: "frank-gram",
  storageBucket: "frank-gram.appspot.com",
  messagingSenderId: "971653483948",
  appId: "1:971653483948:web:e663a98f9dc9955b827e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {
  auth
}