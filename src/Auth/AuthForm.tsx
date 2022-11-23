import { useCallback, useMemo } from 'react';
import { URLS } from '../api/api';
import { postAuth } from '../api/user';
import useForm from '../hooks/useForm';
import useAutoLogin from '../hooks/useAutoLogin';
import { Button, Input } from '@mui/material';
import { Stack } from '@mui/system';

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
    <form onSubmit={handleSubmitAuth}>
      <Stack>
        <br />
        <Input
          type="email"
          placeholder="ID"
          value={email}
          onChange={handleChangeInputs}
          name="email"
        />
        <br />
        <Input
          minRows={8}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChangeInputs}
        />
        <br />
        {!isLoginPage && (
          <Input
            minRows={8}
            type="password"
            name="passwordConfirm"
            placeholder="Password"
            value={passwordConfirm}
            onChange={handleChangeInputs}
          />
        )}
        <br />
        <Button
          type="submit"
          variant="contained"
          value={isLoginPage ? 'LOGIN' : 'SIGNUP'}
          disabled={!isValid}
        >
          {isLoginPage ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </Stack>
    </form>
  );
}

export default AuthForm;
