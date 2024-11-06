import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    'api-key': import.meta.env.VITE_API_KEY
  }
});

export default api;