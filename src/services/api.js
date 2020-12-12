import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://api.laraspa.test',
  withCredentials: true,
})

export default apiClient
