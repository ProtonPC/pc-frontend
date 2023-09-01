import { setToStorage, getFromStorage } from "@/plugins/local-storage";
import { entities } from '@/config/constants'
import { firebaseLogin, firebaseRegistration } from '@/plugins/firebase'

export async function login(email, password){
  let userData = await firebaseLogin(
    email,
    password
  );
  let payload = userData.user.toJSON()
  setUserData(payload)
  return payload
}

export async function signup(email, password){
  let userData = await firebaseRegistration(
    email,
    password
  );
  setUserData(userData.user)
  return userData
}


export function isAuthenticated(){
  let user = getUserData()
  return user?.uid ? true : false
}

export function getUserData(){
  return getFromStorage(entities.users);
}

export function setUserData(data){
  setToStorage(entities.users, data);
}

export function logout(){
  setToStorage(entities.users, null);
  window.location.reload()
}
