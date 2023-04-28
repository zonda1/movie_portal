import axios from 'axios';

const API_KEY = '4f58cb7827938d0b9a7356e8f717f1d8';
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const createApi = () => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    params: {
      api_key: API_KEY,
    },
  });

  return api;
};
