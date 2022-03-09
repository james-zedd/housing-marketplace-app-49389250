// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCAmmrB0uhx8vx82VfwYK-SAFiwpySxfyo',
    authDomain: 'house-marketplace-app-f026f.firebaseapp.com',
    projectId: 'house-marketplace-app-f026f',
    storageBucket: 'house-marketplace-app-f026f.appspot.com',
    messagingSenderId: '117886595981',
    appId: '1:117886595981:web:ad87786263b7bd88d543c4',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
