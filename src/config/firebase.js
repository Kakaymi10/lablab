// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbloeJNjdhU840mPSdQiYaIJkKWCMKOI4",
  authDomain: "alu-hackathon.firebaseapp.com",
  projectId: "alu-hackathon",
  storageBucket: "alu-hackathon.appspot.com",
  messagingSenderId: "903657003269",
  appId: "1:903657003269:web:cdf7eb75098b7aea6ebf6c",
  measurementId: "G-M355NDKVJ1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app);