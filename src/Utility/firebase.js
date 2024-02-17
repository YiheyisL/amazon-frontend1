import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCh8T9eTLe2aewgguLazH22b2sovwHCZoE",
  authDomain: "clone-36711.firebaseapp.com",
  projectId: "clone-36711",
  storageBucket: "clone-36711.appspot.com",
  messagingSenderId: "592942764986",
  appId: "1:592942764986:web:78ab170273aae276b54383",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
