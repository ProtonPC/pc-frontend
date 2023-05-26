import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getCustomers(){
  return await httpClient.get(apiRoutes.listCustomers)
}

export async function deleteCustomer(id){
  return await httpClient.delete(apiRoutes.getCustomer(id))
}

export async function saveCustomer(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getCustomer(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listCustomers, payload)
  }
}
