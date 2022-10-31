import { http } from './api';

interface authInputs {
  email: string;
  password: string;
}

export async function postAuth(
  authUrl: string,
  { email, password }: authInputs,
  navigate: Function
) {
  try {
    const res = await http.post(authUrl, { email, password });
    if (res.data.access_token) {
      localStorage.setItem('token', res.data.access_token);
      navigate('/todo');
      return;
    }

    throw new Error('API통신 실패');
  } catch (error: any) {
    if (error.response.status === 400) {
      alert(error.response.data.message);
    } else {
      alert('입력 정보를 확인해주세요.');
    }
    console.error(error.message);
  }
}
