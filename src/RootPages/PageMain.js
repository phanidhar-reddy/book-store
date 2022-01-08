import { Grid } from "@mui/material";
import React from "react";
import { Body } from "./Body/Body";
import { Footer } from "./Meta/Footer";
import { Header } from "./Meta/Header";

export const PageMain = () => {
  return (
    <Grid>
      <Header></Header>
      <div>
        <Body></Body>
      </div>
      <Footer></Footer>
    </Grid>
  );
};
