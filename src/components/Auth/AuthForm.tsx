import { Box, Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { AuthService } from 'src/apis/AuthService';
import useAutoLogin from 'src/hooks/useAutoLogin';
import useForm from '../../hooks/useForm';

interface Props {
  isSignIn: boolean;
}

const authService = new AuthService();

function AuthForm({ isSignIn }: Props) {
  const { inputs, handleChangeInputs, isValid } = useForm(isSignIn);
  const { email, password, passwordConfirm } = inputs;
  const navigate = useAutoLogin();

  const handleSubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const api = isSignIn ? authService.signIn : authService.signUp;
    await api(email, password);
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  };

  return (
    <form onSubmit={handleSubmitAuth}>
      <Stack>
        <TextField
          type="email"
          name="email"
          label="email"
          variant="outlined"
          value={email}
          onChange={handleChangeInputs}
          autoComplete="true"
        />
        <Box m={1} />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="outlined"
          value={password}
          onChange={handleChangeInputs}
          autoComplete="true"
        />
        <Box m={1} />
        {!isSignIn && (
          <TextField
            type="password"
            name="passwordConfirm"
            label="confirm"
            variant="outlined"
            value={passwordConfirm}
            onChange={handleChangeInputs}
            autoComplete="true"
          />
        )}
        <Box m={1} />
        <Button variant="outlined" type="submit">
          제출
        </Button>
        <Box m={1} />

        <Typography>이메일 : asdf@asdf.com </Typography>
        <Typography>비밀번호 : asdfasdf</Typography>
      </Stack>
    </form>
  );
}

export default AuthForm;
