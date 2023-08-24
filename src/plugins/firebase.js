// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAHyj13hS9cmvco0frlP_Wtfw1ZMkOcqD8",

  authDomain: "pricecalculator-a96d1.firebaseapp.com",

  projectId: "pricecalculator-a96d1",

  storageBucket: "pricecalculator-a96d1.appspot.com",

  messagingSenderId: "822476146805",

  appId: "1:822476146805:web:2fe57927f5bad543f6903c",

  measurementId: "G-TJP82BQRVQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
