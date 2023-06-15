import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getUserGroups(){
  return await httpClient.get(apiRoutes.listUserGroups)
}

export async function deleteUserGroups(id){
  return await httpClient.delete(apiRoutes.getUserGroup(id))
}

export async function saveUserGroup(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getUserGroup(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listUserGroups, payload)
  }
}
