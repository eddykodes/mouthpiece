import firebaseConfig from './firebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Firebase web configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utils
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }