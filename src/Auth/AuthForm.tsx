import './AuthForm.scss';
import { useCallback, useMemo } from 'react';
import { URLS } from '../api/api';
import { postAuth } from '../api/user';
import useForm from '../hooks/useForm';
import useAutoLogin from '../hooks/useAutoLogin';

interface Props {
  isLoginPage: boolean;
}

function AuthForm({ isLoginPage }: Props) {
  const { inputs, handleChangeInputs, isValid } = useForm(isLoginPage);
  const { email, password, passwordConfirm } = useMemo(() => inputs, [inputs]);
  const navigate = useAutoLogin();

  const handleSubmitAuth = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const authUrl = isLoginPage ? URLS.LOGIN : URLS.SIGNUP;
      await postAuth(authUrl, { email, password }, navigate);
    },
    [isLoginPage, email, password, navigate]
  );

  return (
    <form className="AuthForm" onSubmit={handleSubmitAuth}>
      <input
        type="email"
        name="email"
        placeholder="ID"
        value={email}
        onChange={handleChangeInputs}
      />
      <br />
      <input
        minLength={8}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChangeInputs}
      />
      <br />
      {!isLoginPage && (
        <>
          <input
            minLength={8}
            type="password"
            name="passwordConfirm"
            placeholder="Password"
            value={passwordConfirm}
            onChange={handleChangeInputs}
          />
          <br />
        </>
      )}
      <input
        type="submit"
        value={isLoginPage ? 'LOGIN' : 'SIGNUP'}
        disabled={!isValid}
      />
    </form>
  );
}

export default AuthForm;
