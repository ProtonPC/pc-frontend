import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getProductTypes(){
  return await httpClient.get(apiRoutes.listProductTypes)
}

export async function deleteProductTypes(id){
  return await httpClient.delete(apiRoutes.getProductType(id))
}

export async function saveProductType(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getProductType(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listProductTypes, payload)
  }
}
