import { AccountCircleSharp, LockSharp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../Services/UserService";
import UserContext from "../UserContext/UserContext";

const SignInComponent = (props) => {
  const [loginState, updateState] = useState({
    email: "",
    passsword: "",
  });
  const history = useNavigate();
  const userCon = useContext(UserContext);

  const onChnageFunction = (event) => {
    let value = event.target.value;
    updateState((prev) => {
      prev[event.target.name] = value;
      return { ...prev };
    });
  };

  const loginToScreen = async () => {
    const userData = await userApi.getCurrentUserDetails(
      loginState.email,
      loginState.passsword
    );

    if (userData) {
      userCon.updateUser({
        ...userData[0],
      });
      history("../marathon", { replace: true });
    }
  };

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Container fixed maxWidth="xs">
        <Avatar>
          <AccountCircleSharp color="primary" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={loginState.email}
            onChange={onChnageFunction}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginState.password}
            onChange={onChnageFunction}
          />
          <Button
            fullWidth
            onClick={loginToScreen}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </Container>
      <Divider orientation="vertical" flexItem />
      <Container maxWidth="xs">
        <Avatar>
          <LockSharp color="primary" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box display="flex">
          <Box mr={1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoFocus
            />
          </Box>
          <Box ml={1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
            />
          </Box>
        </Box>
        <Box display="flex">
          <Box mr={1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
            />
          </Box>
          <Box ml={1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              type="number"
              name="phoneNumber"
            />
          </Box>
        </Box>
        <Box display="flex">
          <Box mr={1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
          </Box>
          <Box ml={1}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="reneterPassword"
              label="Re-Enter Password"
              type="password"
              id="reneterPassword"
            />
          </Box>
        </Box>
        <Grid container direction="row" justify="center">
          <ButtonGroup disableElevation>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
            <Button variant="outlined" color="primary">
              Reset
            </Button>
          </ButtonGroup>
        </Grid>
      </Container>
      {userCon.user.firstname}
    </Grid>
  );
};

export default SignInComponent;
