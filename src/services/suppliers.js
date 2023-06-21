import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getSuppliers(){
  return await httpClient.get(apiRoutes.listSuppliers)
}

export async function deleteSupplier(id){
  return await httpClient.delete(apiRoutes.getSupplier(id))
}

export async function saveSupplier(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getSupplier(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listSuppliers, payload)
  }
}
