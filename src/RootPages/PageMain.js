import { Container, Grid } from "@mui/material";
import React from "react";
import { Body } from "./Body/Body";
import { Footer } from "./Meta/Footer";
import { Header } from "./Meta/Header";

export const PageMain = () => {
  return (
    <Grid>
      <Header></Header>
      <Container fixed sx={{ mt: 2 }}>
        <Container maxWidth="md"></Container>
        <Body></Body>
      </Container>
      <Footer></Footer>
    </Grid>
  );
};
