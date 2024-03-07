// LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Store/AuthSlice';
import { TextField,Button,Container,Grid, Paper, Typography } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    localStorage.setItem("USERNAME",username)
    if (username.length >5 && password.includes("@")) {
      dispatch(login({ username }));
    }
  };

  return (
    <>
    
    <Container maxWidth="sm" sx={{display:"flex", justifyContent:'center',alignContent:"center", height:"80vh", width:"100vw", padding:10}}>
      <Paper elevation={2} sx={{backgroundColor:`rgb(234, 235, 232)`}}>
<Grid container sx={{justifySelf:"center",alignItems:"center" ,margin:3}}>
    <Typography variant='h4'>Please Login To Access !</Typography>
    </Grid>
        <Grid container spacing={5}>
       
      <Grid item xs={12}>
      <TextField
       fullWidth
        label="UserName"
        value={username}
        variant='outlined'
        onChange={(e) => setUsername(e.target.value)}
      />
      </Grid>
      <Grid item xs={12}>
      <TextField
      fullWidth
      label="Password"
      variant='outlined'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      </Grid>
      <Grid item xs={12}>
      <Button variant='contained' color='primary' onClick={handleLogin}>Login</Button>
      </Grid>
      </Grid>
     
      </Paper>
      </Container>
    </>
  );
};

export default LoginForm;
