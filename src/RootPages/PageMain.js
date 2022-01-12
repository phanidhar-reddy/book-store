import { Container, Grid } from "@mui/material";
import React from "react";
import UserContextProvider from "../UserContext/UserContextProvider";
import { Body } from "./Body/Body";
import { Footer } from "./Meta/Footer";
import { Header } from "./Meta/Header";

export const PageMain = () => {
  return (
    <Grid>
      <UserContextProvider>
        <Header></Header>
        <Container fixed sx={{ mt: 2, mb: 3 }}>
          <Container maxWidth="md"></Container>
          <Body></Body>
        </Container>
        <Footer></Footer>
      </UserContextProvider>
    </Grid>
  );
};
