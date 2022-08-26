import {
  AccountCircle,
  FactCheck,
  FormatListBulleted,
  Inbox,
  Mail,
  Menu,
  PeopleAlt,
  ShoppingBag,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const AppBarTrainer = ({ trainerName }) => {
  const [state, setState] = useState({
    left: false,
  });

  // Handles drawer toggling
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Handles items in the menu
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText>Clients</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText>Orders</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FactCheck />
            </ListItemIcon>
            <ListItemText>Packages</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#2A3036" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* {trainerName} */}
            Hi, Randy!
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default AppBarTrainer;
