// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3e64TFAjunc2pWZAkzy5ZUdtmwn9vtDE",
  authDomain: "ustudentdatabase.firebaseapp.com",
  projectId: "ustudentdatabase",
  storageBucket: "ustudentdatabase.appspot.com",
  messagingSenderId: "881208318220",
  appId: "1:881208318220:web:19e89067d19f5d657a1129",
  measurementId: "G-NY86PL04T7"
};

// Initialize Firebase

  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database=getDatabase(app);
export {db,database,auth,app};
