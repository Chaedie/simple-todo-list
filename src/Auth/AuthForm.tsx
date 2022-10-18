import './AuthForm.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { baseUrl } from '../api/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AuthForm({ authType }: { authType: string }) {
  const navigate = useNavigate();
  const [authInputs, setAuthInputs] = useState({
    email: '',
    password: '',
    passwordAgain: '',
  });
  let token = null;

  const isValidEmail = authInputs.email.includes('@');
  const isValidPassword = authInputs.password.length >= 8;
  const isSamePassword = authInputs.password === authInputs.passwordAgain;

  const isValidInputs: {
    [key: string]: boolean;
  } = {
    login: isValidEmail && isValidPassword,
    signup: isValidEmail && isValidPassword && isSamePassword,
  };

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthInputs({ ...authInputs, [name]: value });
  };

  const handleSubmitAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = authInputs;
    const authUrl = authType === 'login' ? `${baseUrl}/auth/signin` : `${baseUrl}/auth/signup`;

    axios.post(authUrl, { email, password }).then((data: any) => {
      if (data.access_token) {
        token = data?.access_token;
        localStorage.setItem('token', token);
        navigate('/todo');
      } else if (data.statusCode === 400) {
        alert(data.message);
        navigate('/');
      } else {
        alert('로그인 정보를 확인해주세요.');
        navigate('/');
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      alert('자동 로그인 되었습니다.');
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <form className="AuthForm" onSubmit={handleSubmitAuth}>
      <input type="email" name="email" placeholder="ID" value={authInputs.email} onChange={handleChangeInputs} />
      <br />
      <input
        minLength={8}
        type="password"
        name="password"
        placeholder="Password"
        value={authInputs.password}
        onChange={handleChangeInputs}
      />
      <br />
      {authType === 'signup' && (
        <>
          <input
            type="password"
            name="passwordAgain"
            placeholder="Password"
            value={authInputs.passwordAgain}
            onChange={handleChangeInputs}
          />
          <br />
        </>
      )}
      <input type="submit" value={authType} disabled={!isValidInputs[authType]} />
    </form>
  );
}

export default AuthForm;
