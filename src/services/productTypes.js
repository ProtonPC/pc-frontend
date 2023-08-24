//import apiRoutes from '@/config/apiRoutes';
//import httpClient from '@/config/httpClient';
import { deleteData, getData, saveData } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "product-types"

export async function getProductTypes(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listProductTypes)
}

export async function deleteProductTypes(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getProductType(id))
}

export async function saveProductType(payload){
  //let snapshot = await getData(TABLE_NAME);
  return await saveData(TABLE_NAME, payload)
  /*
  if(payload.id) {
    return await httpClient.put(apiRoutes.getProductType(payload.id), payload)
  }else{
    return await snapshot.add(payload)
    //httpClient.post(apiRoutes.listProductTypes, payload)
  }
  */
}
