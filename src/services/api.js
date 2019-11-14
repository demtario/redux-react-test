const API = {
  baseURL: 'https://rickandmortyapi.com/api',

  get: (endpoint, data={}) => {
    let params = '?'
    for(const key in data) {
      params += `${key}=${data[key]}&`
    }

    return fetch(`${API.baseURL}${endpoint}${params}`)
  }
}

export default API