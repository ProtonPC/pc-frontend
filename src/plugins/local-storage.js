import store from 'store'

export function getItems(table, defaultValue = []){
  return store.get(table, defaultValue);
}

export function setItems(table, values){
  store.set(table, values);
}

// For flags:

export function getItem(table){
  return getItems(table, {});
}

export function setItem(table, value){
  setItems(table, value)
}
