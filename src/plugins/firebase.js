// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc, deleteDoc, getFirestore, getDocs, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { setItem } from '@/plugins/local-storage'
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
const storage = getStorage(app);


export async function getData(table){
  return await getDocs(collection(db, table))
  //, orderBy("name"), limit(3));
}

export async function saveData(table, payload){
  // Normalize object:
  payload = JSON.parse(JSON.stringify(payload));

  if (!payload.id){
    let newId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    payload = {...payload, id: newId}
    await setDoc(doc(db, table, newId), payload);
  }else{
    let cityRef = doc(db, table, payload.id);
    await setDoc(cityRef, payload, { merge: true });
  }
  return payload
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
  let userData = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  setItem('user', userData.user)
  return userData
}

export async function firebaseRegistration(email, password){
  let userData = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  setItem('user', userData.user)
  return userData
}

export async function uploadFile(file){
  const storageRef = ref(storage, `files/${file.name}`)
  let snapshot = await uploadBytes(storageRef, file)
  console.log(snapshot)
  console.log('Uploaded a blob or file!');
  return snapshot.metadata
}
