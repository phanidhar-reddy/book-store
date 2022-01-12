import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BooksScreen } from "../../RootComponents/BooksScreen";
import { DashboardComponent } from "../../RootComponents/DashboardComponent";
import { MarathonComponent } from "../../RootComponents/MarathonComponent";
import { ProfileDetailsComponent } from "../../RootComponents/ProfileDetailsComponent";
import { ReportComponent } from "../../RootComponents/ReportComponent";
import SignInComponent from "../../RootComponents/SignInComponent";
export const Body = (props) => {
  return (
    <Grid>
      <Routes>
        <Route exact path="/" element={<SignInComponent abc="22" />}></Route>
        <Route
          exact
          path="/signin"
          element={<SignInComponent abc="22" />}
        ></Route>
        <Route exact path="/marathon" element={<MarathonComponent />}></Route>
        <Route exact path="/reports" element={<ReportComponent />}></Route>
        <Route exact path="/books" element={<BooksScreen />}></Route>
        <Route exact path="/dashboard" element={<DashboardComponent />}></Route>
        <Route
          exact
          path="/profile"
          element={<ProfileDetailsComponent />}
        ></Route>
      </Routes>
    </Grid>
  );
};
