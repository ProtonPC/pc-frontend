// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
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

// Initialize Firebase components:

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export async function getData(table){
  return await getDocs(collection(db, table))
  //, orderBy("name"), limit(3));
}

import { doc, setDoc, deleteDoc } from "firebase/firestore";

export async function saveData(table, payload){
  if (!payload.id){
    const newId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    return await setDoc(doc(db, table, newId), {...payload, id: newId});
  }
  const cityRef = doc(db, table, payload.id);
  await setDoc(cityRef, payload, { merge: true });
}

export async function getItem(table, id){
  const docRef = doc(db, table, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let data = docSnap.data()
    console.log("Document data:", data);
    return data
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function deleteData(table, id){
  return await deleteDoc(doc(db, table, id));
  /*
  if (!payload.id){
    const newId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    return await setDoc(doc(db, table, newId), {...payload, id: newId});
  }
  const cityRef = doc(db, table, payload.id);
  await setDoc(cityRef, payload, { merge: true });
  */
}

export async function firebaseLogin(email, password){
  const userCredential = await auth.signInWithEmailAndPassword(
    email,
    password
  );
  return userCredential;
}

export async function firebaseRegistration(email, password){
  const userCredential = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  return userCredential;
}
