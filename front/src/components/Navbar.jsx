import { InstallMobile, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { useState } from 'react';

import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [avatar, setAvatar] = useState(false);
  const name = useSelector((state) => state.user.name);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {name}
        </Typography>
        <InstallMobile sx={{ display: { xs: 'block', sm: 'block' } }} />
        <div class="form-group has-feedback">
          <input
            type="text"
            class="form-control"
            id="inputSuccess2"
            placeholder="search..."
            size="35"
            height="20"
          />
          <span class="glyphicon glyphicon-search form-control-feedback"></span>
        </div>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 35, height: 35 }}
            src="data:image/jpeg;base64,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"
            onClick={(e) => setAvatar(true)}
          ></Avatar>
        </Icons>
        <UserBox onClick={(e) => setAvatar(true)}>
          <Avatar
            sx={{ width: 35, height: 35 }}
            src="data:image/jpeg;base64,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"
          ></Avatar>
          <Typography>{name}</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={avatar}
        onClose={(e) => setAvatar(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <Button>Profile</Button>
        </MenuItem>

        <MenuItem>
          <Button>My account</Button>
        </MenuItem>

        <MenuItem>
          <Button href="/login" type="submit">
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
