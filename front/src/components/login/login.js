import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../Copyright';
import { Box } from '@mui/material';
import Navbar from '../Navbar';
import LoginPage from './LoginPage';

const theme = createTheme();

function Login() {
  const [mode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
      <div>
        <ThemeProvider theme={theme}>
          <Navbar />
          <div style={{ height: '82vh' }}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <LoginPage />

                <Copyright sx={{ mt: 8 }} />
              </Container>
            </Box>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Login;
