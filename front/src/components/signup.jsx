import { Box, createTheme } from '@mui/material';
import '../App.css';
import Navbar from './Navbar';

import { useState } from 'react';
import SignUpPage from './signup1';

function Signup() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Box bgcolor={'#ffff'} color={'text.secondary'}>
      <Navbar />
      <SignUpPage />
    </Box>
  );
}

export default Signup;
