import { deleteData, getData, saveData, getItem } from '@/plugins/firebase'; // Import the initialized firebase instance

const TABLE_NAME = "quotes"

export async function getQuote(id){
  //let snapshot = await getData(TABLE_NAME);
  return await getItem(TABLE_NAME, id)
}

export async function getQuotes(){
  let snapshot = await getData(TABLE_NAME);
  return snapshot.docs.map(doc => doc.data())
  //return await httpClient.get(apiRoutes.listQuotes)
}

export async function deleteQuote(id){
  return deleteData(TABLE_NAME, id)
  //return await httpClient.delete(apiRoutes.getQuote(id))
}

export async function saveQuote(payload){
  return await saveData(TABLE_NAME, payload)
  // if(payload.id) {
  //   return await httpClient.put(apiRoutes.getQuote(payload.id), payload)
  // }else{
  //   return await httpClient.post(apiRoutes.listQuotes, payload)
  // }
}
