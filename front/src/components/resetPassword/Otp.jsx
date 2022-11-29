import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/userSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Otp() {
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  //   const [login, setLogin] = useState('');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [errorOne, setErrorOne] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update({ password }));
    const resetData = {
      password,
      otp,
    };
    axios
      .post('http://localhost:8000/otp', resetData)
      .then((res) => {
        // console.log(resetData);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
        setErrorOne(true);
      });
  };
  return (
    <div>
      <Box
        sx={{
          width: '50vh',
          bgcolor: '',
          padding: 6,
          margin: 'auto',
          //   height: '1000',
          marginTop: 8,
          display: 'flex',
          alignContent: 'center',
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
          New Password
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
            {' '}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="otp"
                label="otp"
                autoComplete="email"
                onChange={(e) => setOtp(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="password"
                placeholder={user.password}
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid>
              {errorOne ? (
                <Typography
                  sx={{
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginLeft: '90px',
                    marginTop: '10px',
                  }}
                >
                  {errorMessage}
                </Typography>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleUpdate}
            sx={{ mt: 3, mb: 2 }}
          >
            Reset
          </Button>{' '}
        </Box>
      </Box>
    </div>
  );
}

export default Otp;
