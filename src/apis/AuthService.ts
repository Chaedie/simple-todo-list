import { http } from '.';

export class AuthService {
  async signIn(email: string, password: string) {
    const { data } = await http.post(URLS.LOGIN, { email, password });
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
    }
  }

  async signUp(email: string, password: string) {
    const { data } = await http.post(URLS.SIGNUP, { email, password });
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}

const URLS = {
  LOGIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};
