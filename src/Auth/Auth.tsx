import { useState } from 'react';
import AuthForm from './AuthForm';

function Auth() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const authType = isLoginPage ? 'LOGIN' : 'SIGNUP';

  return (
    <div className="Auth modal">
      <header>
        <h1 className="mg-0_5rem">Auth Page</h1>
      </header>
      <main className="authContainer">
        <h2>{authType}</h2>
        <input className="mg-0_5rem" type="button" value="Login!" onClick={() => setIsLoginPage(true)} />
        <input className="mg-0_5rem" type="button" value="signup!" onClick={() => setIsLoginPage(false)} />
        <AuthForm isLoginPage={isLoginPage} />
      </main>
    </div>
  );
}

export default Auth;
