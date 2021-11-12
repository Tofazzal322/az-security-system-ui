import {
  Alert,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  ////////////////////////  Login With User /////////////////////
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  /////////////////////////////////////////////

  //////////////////  Login with user ///////////////////
  const handleLoginSubmit = (e) => {
    const email = loginData?.email;
    const password = loginData?.password;

    loginUser(email, password, location, history);
    e.preventDefault();
  };
  //////////////////////////////////////////////////

  /////////////////  Login with Google //////////////////
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  //////////////////////////////
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{ backgroundColor: "white", mt: 8, p: 5, py: 10 }}
          xs={12}
          md={6}
        >
          <Typography
            sx={{ color: "blue", fontWeight: 600 }}
            variant="h4"
            gutterBottom
          >
            Please Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "98%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

            <TextField
              sx={{ width: "98%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              <div className="forget-pass">
                <Link to="/register">Forget password?</Link>
              </div>
            </Form.Group>

            <Button
              className="login-btn  btn-outline-warning text-light mb-4 mt-2"
              variant="primary"
              type="submit"

              // onClick={loginUser}
            >
              Login
            </Button>

            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>

          <Button className="btn btn-danger w-100" onClick={handleGoogleSignIn}>
            Sign in with google
          </Button>

          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button
              className="border btn btn-outline-dark fw-bold toggle-btn"
              variant="text"
            >
              New User? Please Register
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", p: 10 }}
            src="https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
            // src="https://static3.depositphotos.com/1005574/198/v/950/depositphotos_1982796-stock-illustration-login-icon-button.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
