import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const URL = {
  LOGIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};

export const http = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

http.interceptors.request.use(req => {
  if (req.headers) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return req;
});
