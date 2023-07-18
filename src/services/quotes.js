import apiRoutes from '@/config/apiRoutes';
import httpClient from '@/config/httpClient';

export async function getQuotes(){
  return await httpClient.get(apiRoutes.listQuotes)
}

export async function deleteQuote(id){
  return await httpClient.delete(apiRoutes.getQuote(id))
}

export async function saveQuote(payload){
  if(payload.id) {
    return await httpClient.put(apiRoutes.getQuote(payload.id), payload)
  }else{
    return await httpClient.post(apiRoutes.listQuotes, payload)
  }
}
