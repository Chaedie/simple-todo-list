import axios from 'axios';

export const baseUrl = 'https://pre-onboarding-selection-task.shop';

export const http = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});
