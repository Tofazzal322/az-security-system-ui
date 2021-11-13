import { Container, Typography, TextField, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink,useHistory} from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { Box } from "@mui/system";
import Footer from "../Shared/Footer";
import Button from "@restart/ui/esm/Button";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Box>
      <Container sx={{ mb: 8 }}>
        <Grid container spacing={2}>
          <Grid
            className="input-field   py-5"
            item
            sx={{ mt: 8 }}
            xs={12}
            md={6}
          >
            <Box className="register-form ms-5 ps-5">
              <Typography
                className="product-title w-75"
                sx={{ fontWeight: 700 }}
                variant="h4"
                gutterBottom
              >
                Register{" "}
              </Typography>
              {!isLoading && (
                <form onSubmit={handleLoginSubmit}>
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    label="ReType Your Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />

                  <Button
                    className="register-toggle-btn mt-2 d-block w-75"
                    sx={{ width: "75%", m: 1 }}
                    type="submit"
                    variant="contained"
                  >
                    Register
                  </Button>
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button className="register-toggle-btn w-75" variant="text">
                      Already Registered? Please Login
                    </Button>
                  </NavLink>
                </form>
              )}
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">User Created successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", p: 10 }}
              src="https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Register;