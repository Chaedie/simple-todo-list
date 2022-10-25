import axios from 'axios';

export const baseUrl = 'https://pre-onboarding-selection-task.shop';

export const http = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

export function getAuthorization(token: string | null) {
  return { Authorization: `Bearer ${token}` };
}
