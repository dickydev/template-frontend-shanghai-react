import axios from 'axios';

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_BASE_URL ?? 'https://jsonplaceholder.typicode.com/',
  timeout: 8000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error : ', error.response?.data || error.message);
    throw error;
  },
);
