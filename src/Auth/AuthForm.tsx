import './AuthForm.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { baseUrl } from '../api/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AuthForm({ authType }: { authType: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const token = useRef(localStorage.getItem('token'));
  const navigate = useNavigate();

  const isValidEmail = useMemo(() => email.includes('@'), [email]);
  const isValidPassword = useMemo(() => password.length >= 8, [password]);
  const isSamePassword = useMemo(() => password === passwordAgain, [password, passwordAgain]);

  const isValidInputs: {
    [key: string]: boolean;
  } = {
    login: isValidEmail && isValidPassword,
    signup: isValidEmail && isValidPassword && isSamePassword,
  };

  const handleSubmitAuth = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const authUrl = authType === 'login' ? `${baseUrl}/auth/signin` : `${baseUrl}/auth/signup`;
    const { data } = await axios.post(authUrl, { email, password });

    if (data.statusCode === 400) {
      alert(data.message);
      navigate('/');
      return;
    }
    if (data.access_token) {
      token.current = data.access_token;
      localStorage.setItem('token', token.current!);
      navigate('/todo');
      return;
    }
    alert('입력 정보를 확인해주세요.');
    navigate('/');
  };

  useEffect(() => {
    if (token.current) {
      alert('자동 로그인 되었습니다.');
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <form className="AuthForm" onSubmit={handleSubmitAuth}>
      <input type="email" name="email" placeholder="ID" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input
        minLength={8}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      {authType === 'signup' && (
        <>
          <input
            type="password"
            name="passwordAgain"
            placeholder="Password"
            value={passwordAgain}
            onChange={e => setPasswordAgain(e.target.value)}
          />
          <br />
        </>
      )}
      <input type="submit" value={authType} disabled={!isValidInputs[authType]} />
    </form>
  );
}

export default AuthForm;
