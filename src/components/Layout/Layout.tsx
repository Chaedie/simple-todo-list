import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { PropsWithChildren } from 'react';
import Header from '../common/Header';

function Layout({ children }: PropsWithChildren) {
  return (
    <Container fixed>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Header />
        {children}
      </Box>
    </Container>
  );
}

export default Layout;
