// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyA9fwCc-h6xnFX0Ye_QjrrYPqaTxLLfexo",
    authDomain: "chat-c6239.firebaseapp.com",
    projectId: "chat-c6239",
    storageBucket: "chat-c6239.appspot.com",
    messagingSenderId: "262821298390",
    appId: "1:262821298390:web:99b61ab6db68d8e8554977"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()