import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignupTwo from './SignUpTwo';
import Copyright from './Copyright';

const theme = createTheme();

export default function SignUpPage() {
  return (
    <div style={{ height: '82vh' }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <SignupTwo />
          <Copyright sx={{ mt: 8 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
