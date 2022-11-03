/* eslint-disable no-unused-vars */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import e from 'cors';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { update } from '../redux/userSlice';
function SignupTwo() {
  const [lname, setLname] = useState();
  const [fname, setFname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(update());
    console.log(fname, lname, email, password);
    const formData = { fname, lname, email, password };
    axios
      .post('http://localhost:8000/signup', formData)

      .then((res) => {
        console.log('done');
      })
      .catch((err) => {
        console.log('err');
      });
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
        <Typography component="h1" variant="h5" color="#000000">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3, ml: 1 }}>
          <Grid container spacing={1} bgcolor="#ffff" color={'black'} fullWidth>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                autoComplete="new-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
            href="#"
            fullWidth
            onClick={onFormSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
export default SignupTwo;
