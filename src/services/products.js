import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getProducts(){
  return await httpClient.get(apiRoutes.listProducts)
}

export async function deleteProduct(id){
  return await httpClient.delete(apiRoutes.getProduct(id))
}

export async function saveProduct(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getProduct(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listProducts, payload)
  }
}
