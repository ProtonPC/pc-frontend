import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getPorts(){
  return await httpClient.get(apiRoutes.listPorts)
}

export async function deletePort(id){
  return await httpClient.delete(apiRoutes.getPort(id))
}

export async function savePort(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getPort(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listPorts, payload)
  }
}
