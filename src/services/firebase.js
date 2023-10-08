import { v4 as uuidv4 } from 'uuid';
import { useCollection, useFirestore } from 'vuefire'
import { Timestamp, getDocs, query, orderBy, limit, collection } from 'firebase/firestore'
export const getFirebaseHandler = (dbKey) => {
  let key = dbKey
  let db = useFirestore()

  return {
    get: async function (id){
      let docRef = doc(db, key, id)
      let docSnap = await getDoc(docRef)
      return docSnap.exists() ? docSnap.data() : false
    },

    getAllAsync: async function (){
      let output = []
      let docs = await getDocs(collection(db, key))
      docs.forEach(doc => {
        output.push(doc.data())
      })
      return output
    },

    getAll: function (maxAmount = 50, orderByColumn = "createdAt"){
      let c = collection(db, key)
      let q = query(c, orderBy(orderByColumn), limit(maxAmount))
      return useCollection(q)
    },

    delete: async function(id){
      return await deleteDoc(doc(db, key, id));
    },

    save: async function(payload){
      // Normalize object:
      payload = JSON.parse(JSON.stringify(payload))

      if (!payload.id){
        let createdAt = Timestamp.fromDate(new Date())
        let newId = uuidv4()
        payload = {...payload, id: newId, createdAt }
        await setDoc(doc(db, key, newId), payload)
      }else{
        let updatedAt = Timestamp.fromDate(new Date())
        let cityRef = doc(db, key, payload.id);
        payload = { ...payload, updatedAt }
        await setDoc(cityRef, payload, { merge: true })
      }
      return payload
    }
  }
}
