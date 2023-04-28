import store from 'store'

export function getItems(table){
  return store.get(table, []);
}

export function setItems(table, values){
  store.set(table, values);
}
