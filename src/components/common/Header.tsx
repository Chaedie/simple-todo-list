import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';

function Header() {
  let pageName = '';
  const location = useLocation();
  if (location.pathname === '/') {
    pageName = 'Auth Page';
  }

  return (
    <Box component="header" m={2}>
      <Typography variant="h3">{pageName}</Typography>
    </Box>
  );
}

export default Header;
