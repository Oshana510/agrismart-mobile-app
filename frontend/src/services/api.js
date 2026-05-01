import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANT: Use correct backend port
const API_URL = 'http://192.168.8.115:5000/api';
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth services
export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
};

// Labor services
export const laborService = {
  getAll: () => api.get('/labor'),
  create: (data) => api.post('/labor', data),
  markAttendance: (id, data) => api.post(`/labor/${id}/attendance`, data),
  delete: (id) => api.delete(`/labor/${id}`),
};

export default api;