import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.178.204:3333'
})

export default api;
