// import apiRoutes from '@/config/apiRoutes';
// import httpClient from '@/config/httpClient';

import { deleteData, getData, saveData, getItem } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "warehouses"

export async function getWarehouse(id){
  //let snapshot = await getData(TABLE_NAME);
  return await getItem(TABLE_NAME, id)
}

export async function getWarehouses(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listWarehouses)
}

export async function deleteWarehouse(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getWarehouse(id))
}

export async function saveWarehouse(payload){
  return await saveData(TABLE_NAME, payload)
  // if(payload.id) {
  //   return await httpClient.put(apiRoutes.getWarehouse(payload.id), payload)
  // }else{
  //   return await httpClient.post(apiRoutes.listWarehouses, payload)
  // }
}
