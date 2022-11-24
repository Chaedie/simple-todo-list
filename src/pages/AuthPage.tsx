import { Box, Button } from '@mui/material';
import { useState } from 'react';
import AuthForm from 'src/components/Auth/AuthForm';
import Layout from 'src/components/Layout/Layout';

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Layout>
      <Box p={1}>
        <Button variant="outlined" onClick={() => setIsSignIn(true)}>
          로그인하기
        </Button>
        <Button variant="outlined" onClick={() => setIsSignIn(false)}>
          회원가입하기
        </Button>
      </Box>
      <Box m={1} />

      <AuthForm isSignIn={isSignIn} />
    </Layout>
  );
}

export default AuthPage;
