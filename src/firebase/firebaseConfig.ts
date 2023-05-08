import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA8l20lP-iyeZGdLJrnpyiPq3K1GHQKs6A",
  authDomain: "project1-86566.firebaseapp.com",
  projectId: "project1-86566",
  storageBucket: "project1-86566.appspot.com",
  messagingSenderId: "347929983501",
  appId: "1:347929983501:web:0c4022c378a7665cbdf344",
  measurementId: "G-0WDQY62GXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;