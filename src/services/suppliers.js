// import apiRoutes from '@/config/apiRoutes';
// import httpClient from '@/config/httpClient';

import { deleteData, getData, saveData, getItem } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "suppliers"

export async function getSupplier(id){
  //let snapshot = await getData(TABLE_NAME);
  return await getItem(TABLE_NAME, id)
}

export async function getSuppliers(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listSuppliers)
}

export async function deleteSupplier(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getSupplier(id))
}

export async function saveSupplier(payload){
  return await saveData(TABLE_NAME, payload)
  // if(payload.id) {
  //   return await httpClient.put(apiRoutes.getSupplier(payload.id), payload)
  // }else{
  //   return await httpClient.post(apiRoutes.listSuppliers, payload)
  // }
}
