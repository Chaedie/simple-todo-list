import { useState } from 'react';
import './Auth.scss';
import AuthForm from './AuthForm.js';

function Auth() {
  const [authType, setAuthType] = useState('login');

  return (
    <div className="Auth modal">
      <header>
        <h1 className="mg-0_5rem">Auth Page</h1>
      </header>
      <main className="authContainer">
        <h2>{authType}</h2>
        <input
          className="mg-0_5rem"
          type="button"
          value="Login!"
          onClick={() => setAuthType('login')}
        />
        <input
          className="mg-0_5rem"
          type="button"
          value="signup!"
          onClick={() => setAuthType('signup')}
        />
        <AuthForm authType={authType} />
      </main>
    </div>
  );
}

export default Auth;

// 요청
// URL: /auth/signup
// Method: POST
// Headers:
// Content-Type: application/json
// Body:
// email: string
// password: string
