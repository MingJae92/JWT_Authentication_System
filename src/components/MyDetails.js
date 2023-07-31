import React from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';

const MyDetails = () => {
  const handleCancel = () => {
    // Handle cancel logic here
    alert('Form canceled');
  };

  const handleSave = () => {
    // Handle save logic here
    alert('Form saved');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" type="email" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="House Number" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Street Address" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="City" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Post Code" required />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Button variant="contained" color="error" fullWidth onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="success" fullWidth onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MyDetails;
