// import apiRoutes from '@/config/apiRoutes';
// import httpClient from '@/config/httpClient';
import { deleteData, getData, saveData, getItem } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "products"

export async function getProduct(id){
  //let snapshot = await getData(TABLE_NAME);
  return await getItem(TABLE_NAME, id)
}

export async function getProducts(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listProducts)
}

export async function deleteProduct(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getProduct(id))
}

export async function saveProduct(payload){
  return await saveData(TABLE_NAME, payload)
  // if(payload.id) {
  //   return await httpClient.put(apiRoutes.getProduct(payload.id), payload)
  // }else{
  //   return await httpClient.post(apiRoutes.listProducts, payload)
  // }
}
