import './AuthForm.scss';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../api/api';
import { postAuth } from '../api/user';

function AuthForm({ isLoginPage }: { isLoginPage: boolean }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const navigate = useNavigate();

  const authType = useMemo(() => (isLoginPage ? 'login' : 'signup'), [isLoginPage]);

  const isValidEmail = useMemo(() => email.includes('@'), [email]);
  const isValidPassword = useMemo(() => password.length >= 8, [password]);
  const isSamePassword = useMemo(() => password === passwordAgain, [password, passwordAgain]);

  const isValidInputs: {
    [key: string]: boolean;
  } = {
    login: isValidEmail && isValidPassword,
    signup: isValidEmail && isValidPassword && isSamePassword,
  };

  const handleSubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authUrl = isLoginPage ? URLS.LOGIN : URLS.SIGNUP;
    await postAuth(authUrl, { email, password }, navigate);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
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
      {!isLoginPage && (
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
