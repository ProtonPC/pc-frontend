import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getWarehouses(){
  return await httpClient.get(apiRoutes.listWarehouses)
}

export async function deleteWarehouse(id){
  return await httpClient.delete(apiRoutes.getWarehouse(id))
}

export async function saveWarehouse(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getWarehouse(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listWarehouses, payload)
  }
}
