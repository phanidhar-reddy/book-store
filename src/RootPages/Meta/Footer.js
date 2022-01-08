import {
  Copyright,
  Favorite,
  LocationCity,
  Restore,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="All Rights Reserved"></BottomNavigationAction>
        </BottomNavigation>
      </Paper>
    </footer>
  );
};
