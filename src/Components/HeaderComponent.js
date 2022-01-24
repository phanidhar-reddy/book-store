import { LibraryAddTwoTone, MenuBook } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderComponent = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const displayHeaderSection = props.hideAll ? "none" : "block";
  //const pages = [{ name: "Books", link: "/book" }, "Marathon", "Reports"];
  const pages = [
    { name: "Books", link: "/books", visibility: true },
    { name: "Marathon", link: "/marathon", visibility: true },
    { name: "Reports", link: "/reports", visibility: props.user.role === "1" },
  ];
  console.log(pages);
  //const settings = ["Profile", "Dashboard", "Logout"];
  const settings = [
    { name: "Profile", link: "/profile" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "logout", link: "/" },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogOut = () => {
    handleCloseUserMenu();
    props.handleLogout();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const createPages = () => {
    return pages.map((page) => {
      return page.visibility === true ? (
        <MenuItem onClick={props.handleBooksFetch} key={page.name}>
          <NavLink to={page.link} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: { displayHeaderSection },
              }}
            >
              {page.name}
            </Button>
          </NavLink>
        </MenuItem>
      ) : (
        <div></div>
      );
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <LibraryAddTwoTone></LibraryAddTwoTone>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuBook />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {createPages()}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { displayHeaderSection } }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                let handleClose = handleCloseUserMenu;
                if (setting.name === "logout") {
                  handleClose = handleLogOut;
                }
                return (
                  <MenuItem key={setting.name} onClick={handleClose}>
                    <NavLink
                      to={setting.link}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </NavLink>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
