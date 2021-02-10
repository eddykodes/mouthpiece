import firebaseConfig from './firebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utils
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }