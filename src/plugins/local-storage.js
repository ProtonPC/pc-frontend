import store from 'store'

export function getFromStorage(table, defaultValue = []){
  return store.get(table, defaultValue);
}

export function setToStorage(table, values){
  store.set(table, values);
}
