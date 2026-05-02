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


// Finance services
export const financeService = {
  getTransactions: () => api.get('/finance/transactions'),
  createTransaction: (data) => api.post('/finance/transactions', data),
  updateTransaction: (id, data) => api.put(`/finance/transactions/${id}`, data),
  getProfitLoss: () => api.get('/finance/profit-loss'),
  deleteTransaction: (id) => api.delete(`/finance/transactions/${id}`),
};



export default api;
