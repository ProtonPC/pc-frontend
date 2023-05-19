const { host, protocol } = window.location;

const apiUrl = `${protocol}//${host}`

console.log(apiUrl)

const apiRoutes = {
  listProductTypes: apiUrl+'/api/productTypes',
  getProductType: (id) => apiUrl+`/api/productTypes/${id}`,

  listCustomers: apiUrl+'/api/customers',
  getCustomer: (id) => apiUrl+`/api/customers/${id}`
}

export default apiRoutes
