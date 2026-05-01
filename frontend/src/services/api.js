import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://172.20.10.4:5000/api';

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

// Auth services (Farmer Profile)
export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
  updatePassword: (passwordData) => api.put('/auth/password', passwordData),
};

// Land services (Farmer Land Management)
export const landService = {
  getAll: () => api.get('/lands'),
  getOne: (id) => api.get(`/lands/${id}`),
  create: (data) => api.post('/lands', data),
  update: (id, data) => api.put(`/lands/${id}`, data),
  delete: (id) => api.delete(`/lands/${id}`),
};

export default api;