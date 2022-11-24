import { http } from '.';

export class AuthService {
  async signIn(email: string, password: string) {
    try {
      const { data } = await http.post(URLS.LOGIN, { email, password });
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
      }
    } catch (error) {
      alert('입력 정보를 확인해주세요.');
    }
  }

  async signUp(email: string, password: string) {
    try {
      const { data } = await http.post(URLS.SIGNUP, { email, password });
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
      }
    } catch (error) {
      alert('입력 정보를 확인해주세요.');
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
