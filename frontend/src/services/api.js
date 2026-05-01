import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANT: Change this to your computer's local IP address (e.g. 192.168.x.x) 
// so your mobile phone can connect to the backend server.
const API_URL = 'http://172.28.10.227:5000/api';

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



// Task services
export const taskService = {
  getAll: () => api.get('/tasks/tasks'),
  create: (data) => api.post('/tasks/tasks', data),
  update: (id, data) => api.put(`/tasks/tasks/${id}`, data),
  delete: (id) => api.delete(`/tasks/tasks/${id}`),
  updateStatus: (id, status) => api.put(`/tasks/tasks/${id}/status`, { status }),
  getLabors: () => api.get('/labor'),
  createEmployee: (data) => api.post('/tasks/employees', data),
};


export default api;
