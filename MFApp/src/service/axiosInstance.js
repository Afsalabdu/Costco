import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your API base URL
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
}); // Create the axios instance

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    // For example, add an authentication token to the headers
    const token = localStorage.getItem('authToken') || "dummy token"; // taking auth token from local Storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log('Request:',token, config);
    return config;
  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  }
);
