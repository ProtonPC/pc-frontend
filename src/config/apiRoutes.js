// const { host, protocol } = window.location;

const apiUrl = 'http://127.0.0.1:8000/api';

console.log(apiUrl)

const apiRoutes = {
  listProductTypes: apiUrl+'/products-types',
  getProductType: (id) => apiUrl+`/products-types/${id}`,

  listCustomers: apiUrl+'/customers',
  getCustomer: (id) => apiUrl+`/customers/${id}`,

  listProducts: apiUrl+'/products',
  getProduct: (id) => apiUrl+`/products/${id}`,

  listPorts: apiUrl+'/ports',
  getPort: (id) => apiUrl+`/ports/${id}`,

  listWarehouses: apiUrl+'/warehouses',
  getWarehouse: (id) => apiUrl+`/warehouses/${id}`,

  listUsers: apiUrl+'/users',
  getUser: (id) => apiUrl+`/users/${id}`,

  listUserGroups: apiUrl+'/users-groups',
  getUserGroup: (id) => apiUrl+`/users-groups/${id}`,

  listSuppliers: apiUrl+'/suppliers',
  getSupplier: (id) => apiUrl+`/suppliers/${id}`,

  listQuotes: apiUrl+'/quotes',
  getQuote: (id) => apiUrl+`/quotes/${id}`,
}

export default apiRoutes
