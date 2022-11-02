import { Box, createTheme, Stack } from '@mui/material';
import '../App.css';
import Navbar from './Navbar';
import Rightbar from './Rightbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Add from './Add';
import { useState } from 'react';
import { ThemeProvider } from '@mui/system';

function Home() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={3} justifyContent="space-evenly">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
