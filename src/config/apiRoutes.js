const { host, protocol } = window.location;

const apiUrl = `${protocol}//${host}`

console.log(apiUrl)

const apiRoutes = {
  listProductTypes: apiUrl+'/api/productTypes',
  getProductType: (id) => apiUrl+`/api/productTypes/${id}`,

  listCustomers: apiUrl+'/api/customers',
  getCustomer: (id) => apiUrl+`/api/customers/${id}`,

  listProducts: apiUrl+'/api/products',
  getProduct: (id) => apiUrl+`/api/products/${id}`,

  listPorts: apiUrl+'/api/ports',
  getPort: (id) => apiUrl+`/api/ports/${id}`,

  listWarehouses: apiUrl+'/api/warehouses',
  getWarehouse: (id) => apiUrl+`/api/warehouses/${id}`,

  listUsers: apiUrl+'/api/users',
  getUser: (id) => apiUrl+`/api/users/${id}`,

  listUserGroups: apiUrl+'/api/userGroups',
  getUserGroup: (id) => apiUrl+`/api/usersGroups/${id}`,

  listSuppliers: apiUrl+'/api/suppliers',
  getSupplier: (id) => apiUrl+`/api/suppliers/${id}`,
}

export default apiRoutes
