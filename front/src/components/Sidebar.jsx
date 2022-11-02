import {
  AccountBoxOutlined,
  ContactPageSharp,
  DarkMode,
  Home,
  Login,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';

function Sidebar({ mode, setMode }) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/signup">
              <ListItemIcon>
                <AccountBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="signup" />
            </ListItemButton>
          </ListItem>{' '}
          <ListItem disablePadding>
            <ListItemButton component="a" href="/login">
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <ListItemText primary="login" />
            </ListItemButton>
          </ListItem>{' '}
          <ListItem disablePadding>
            <ListItemButton component="a" href="/support">
              <ListItemIcon>
                <ContactPageSharp />
              </ListItemIcon>
              <ListItemText primary="contact us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/support">
              <ListItemIcon>
                <DarkMode />
                <Switch
                  onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
                />
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
