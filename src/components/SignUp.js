import React from 'react'
import { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here, e.g., send the email and password to the server
    console.log('Login - Email:', email, 'Password:', password);
  };

  const handleSignUp = () => {
    // Perform sign-up logic here, e.g., send the name, email, and password to the server
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        width="300px"
        py={3}
        px={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Create an account
        </Typography>
        <form style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={2} textAlign="center" width="100%">
        <Typography variant="body2" component="div">
          <Box display="inline-block">
            Already have an account? Login
          </Box>
        </Typography>
      </Box>
      <Box
        position="absolute"
        top={0}
        right={0}
        mt={3}
        mr={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >

        <Box display="flex" justifyContent="center">
          <Button color="primary" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Box ml={1}>
            <Link to="/"><Button color="primary" onClick={handleLogin}>Login</Button></Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};


export default SignUp