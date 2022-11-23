import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import AuthForm from './AuthForm';

function Auth() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const authType = isLoginPage ? 'LOGIN' : 'SIGNUP';

  return (
    <Container fixed>
      <Box component="main">
        {/* <Box className="authContainer" component="main"> */}
        <Box component="header">
          <Typography variant="h5">{authType} Page</Typography>
        </Box>
        <Button variant="contained" onClick={() => setIsLoginPage(true)}>
          Login!
        </Button>
        <Button variant="contained" onClick={() => setIsLoginPage(false)}>
          SignUp!
        </Button>

        <AuthForm isLoginPage={isLoginPage} />
      </Box>
    </Container>
  );
}

export default Auth;
