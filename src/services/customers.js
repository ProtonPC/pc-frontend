// import apiRoutes from '@/config/apiRoutes';
// import httpClient from '@/config/httpClient';
import { deleteData, getData, saveData, getItem } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "customers"

export async function getCustomer(id){
  //let snapshot = await getData(TABLE_NAME);
  return await getItem(TABLE_NAME, id)
}

export async function getCustomers(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listCustomers)
}

export async function deleteCustomer(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getCustomer(id))
}

export async function saveCustomer(payload){
  return await saveData(TABLE_NAME, payload)
  // if(payload.id) {
  //   return await httpClient.put(apiRoutes.getCustomer(payload.id), payload)
  // }else{
  //   return await httpClient.post(apiRoutes.listCustomers, payload)
  // }
}
