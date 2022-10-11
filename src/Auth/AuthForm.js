import './AuthForm.scss';
import { useEffect, useState } from 'react';
import { baseUrl } from '../api/api';
import { useNavigate } from 'react-router-dom';

function AuthForm({ authType }) {
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

  const isValidInputs = {
    login: isValidEmail && isValidPassword,
    signup: isValidEmail && isValidPassword && isSamePassword,
  };

  const handleChangeInputs = e => {
    const { name, value } = e.target;
    setAuthInputs({ ...authInputs, [name]: value });
  };

  const handleSubmitAuth = e => {
    e.preventDefault();
    const { email, password } = authInputs;
    const authUrl = authType === 'login' ? `${baseUrl}/auth/signin` : `${baseUrl}/auth/signup`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    fetch(authUrl, options)
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          token = data.access_token;
          localStorage.setItem('token', token);
          navigate('/todo');
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
        minLength="8"
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
