import axios, { AxiosInstance } from 'axios'
import { BASE_API_URL } from '../cores/settings'

const client: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "content-type": "application/json",
    "x-requested-with": "XMLHttpRequest"
  },
})

// Request interceptor
client.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // Handle Errors
  return Promise.reject(error)
});

// Response interceptor
client.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Handle Errors
  return Promise.reject(error)
});

export default client
