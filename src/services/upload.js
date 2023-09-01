import { ref, uploadBytes } from "firebase/storage";
import { storage } from '@/plugins/firebase'

export async function uploadFile(file){
  let storageRef = ref(storage, `files/${file.name}`)
  let snapshot = await uploadBytes(storageRef, file)
  return snapshot.metadata
}
