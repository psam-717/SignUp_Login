// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7oyEf-4MjfaidbxCVfe52JZ8-Ij0jcHk",
  authDomain: "react-native-login-366ed.firebaseapp.com",
  projectId: "react-native-login-366ed",
  storageBucket: "react-native-login-366ed.appspot.com",
  messagingSenderId: "659112326968",
  appId: "1:659112326968:web:fa6b99e8e36164af3ff3cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)