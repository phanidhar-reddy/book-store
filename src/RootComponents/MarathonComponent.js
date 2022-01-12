import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { LockSharp } from "@mui/icons-material";
import marathonForm from "../FormComponentsJsonFiles/MarathonForm.json";
import _ from "lodash";
import BoxComponent from "../Components/BoxComponent";
import { useDispatch } from "react-redux";
import { ADD_MARATHON_DATA } from "../Redux/AllConstants";

export const MarathonComponent = () => {
  const dispatch = useDispatch();
  const getCurrentDate = () => {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  const [marathonData, setMarathonData] = useState({
    bookname: "",
    pagesRead: 0,
    currentDate: getCurrentDate(),
    totalPages: 0,
  });

  const values = [
    ["", ""],
    [""],
    [marathonData.bookname],
    [marathonData.pagesRead, marathonData.currentDate],
    [marathonData.totalPages],
  ];

  const addDataToMarathon = () => {
    dispatch({ type: ADD_MARATHON_DATA, value: { ...marathonData } });
  };

  const onChangeFunction = (event) => {
    let value = event.target.value;
    setMarathonData((prev) => {
      prev[event.target.name] = value;
      return { ...prev };
    });
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container maxWidth="xs">
            <Avatar>
              <LockSharp color="primary" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Book Details
            </Typography>
            {_.map(marathonForm.ids, (ids, id) => {
              return (
                <BoxComponent
                  key={ids[0]}
                  ids={ids}
                  names={marathonForm.names[id]}
                  types={marathonForm.types[id]}
                  changeFunction={[onChangeFunction, onChangeFunction]}
                  disabled={marathonForm.disabled[id]}
                  values={values[id]}
                ></BoxComponent>
              );
            })}

            <Grid container direction="row" justify="center">
              <ButtonGroup disableElevation>
                <Button
                  onClick={addDataToMarathon}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
                <Button variant="outlined" color="primary">
                  Reset
                </Button>
              </ButtonGroup>
            </Grid>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
};
