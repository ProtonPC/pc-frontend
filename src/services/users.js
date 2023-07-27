import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';
import { setItem } from '@/plugins/local-storage';

export async function login(username, password){
  if(username == "alex" && password == "brazilcoms"){
    setItem({
      name: "Alex",
      username,
      password,
      role: "admin",
    })
    return true
  }
  return false
}

export async function getUsers(){
  return await httpClient.get(apiRoutes.listUsers)
}

export async function deleteUsers(id){
  return await httpClient.delete(apiRoutes.getUser(id))
}

export async function saveUser(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getUser(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listUsers, payload)
  }
}
