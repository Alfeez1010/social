import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/userSlice';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    dispatch(update({ name, password }));
    console.log(name, password);
  };
  return (
    <div>
      <Box
        sx={{
          height: '1000',
          marginTop: 8,
          display: 'flex',
          borderStyle: 'solid',
          borderColor: '#d3dbe8',
          borderRadius: '10',
          border: '5px solid d3dbe8 ',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login{' '}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3, ml: 1 }}>
          <Grid
            container
            spacing={1}
            bgcolor="#ffff"
            color={'text.primary'}
            fullWidth
            marginRight={1}
          >
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                placeholder={user.name}
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder={user.password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} margin="6px">
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    size="15px"
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleUpdate}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="center"></Grid>
        </Box>
      </Box>
    </div>
  );
}

export default LoginPage;
