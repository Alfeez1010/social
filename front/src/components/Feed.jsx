import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <Box flex={5} p={2} sx={{ display: { xs: 'block', sm: 'block' } }}>
      <Post />
    </Box>
  );
}
export default Feed;
