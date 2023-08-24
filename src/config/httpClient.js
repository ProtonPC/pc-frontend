const httpClient = {
  get: async (url) => {
    return await fetch(url, {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'accept': 'application/json;',
      }
    }).then(response => response.json())
  },
  post: async (url, body = {}) => {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'accept': 'application/json;',
      }
    }).then(response => response.json())
  },
  put: async (url, body = {}) => {
    return await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'accept': 'application/json;',
      }
    }).then(response => response.json())
  },
  delete: async (url) => {
    return await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'accept': 'application/json;',
      }
    }).then(response => response.json())
  }
}

export default httpClient
