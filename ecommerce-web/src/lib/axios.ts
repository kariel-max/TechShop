// src/lib/axios.ts
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3750/api', // ajuste conforme sua API
  headers: {
    'Content-Type': 'application/json',
  },
});
