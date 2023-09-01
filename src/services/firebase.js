import { doc, setDoc, getDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/plugins/firebase';

async function getData(table){
  return await getDocs(collection(db, table))
}

async function saveData(table, payload){
  // Normalize object:
  payload = JSON.parse(JSON.stringify(payload))

  if (!payload.id){
    let newId = uuidv4()
    payload = {...payload, id: newId}
    await setDoc(doc(db, table, newId), payload)
  }else{
    let cityRef = doc(db, table, payload.id);
    await setDoc(cityRef, payload, { merge: true })
  }
  return payload
}

async function getItem(table, id){
  let docRef = doc(db, table, id);
  let docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : false
}

async function deleteData(table, id){
  return await deleteDoc(doc(db, table, id));
}

export const firebaseClient = {
  setTable(table){
    this.table = table
    return this
  },
  table: "",
  getItem: async function (id){
    return await getItem(this.table, id)
  },

  getItems: async function (){
    let snapshot = await getData(this.table);
    return snapshot.docs.map(doc => doc.data())
  },

  deleteItem: async function (id){
    return deleteData(this.table, id)
  },

  saveItem: async function (payload){
    return await saveData(this.table, payload)
  }
}
