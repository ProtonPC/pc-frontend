// import apiRoutes from '@/config/apiRoutes';
// import httpClient from '@/config/httpClient';
import { deleteData, getData, saveData, getItem } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "ports"

export async function getPort(id){
  //let snapshot = await getData(TABLE_NAME);
  return await getItem(TABLE_NAME, id)
}

export async function getPorts(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listPorts)
}

export async function deletePort(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getPort(id))
}

export async function savePort(payload){
  return await saveData(TABLE_NAME, payload)
  // if(payload.id) {
  //   return await httpClient.put(apiRoutes.getPort(payload.id), payload)
  // }else{
  //   return await httpClient.post(apiRoutes.listPorts, payload)
  // }
}
