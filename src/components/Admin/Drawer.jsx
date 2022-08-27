import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListItemIcon from "@mui/material/ListItemIcon";
import { makeStyles } from "@mui/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import { styled } from "@mui/material";

const DrawerWidth = 240;

const StyledBottomNavigation = styled(BottomNavigation)({
  width: DrawerWidth,
  position: "fixed",
  bottom: 0,
});
export default function TemporaryDrawer() {
  return (
    <Drawer
      variant="persistance"
      open="true"
      sx={{
        width: DrawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DrawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["Blogs", "Users"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {text === "Users" ? <PeopleIcon /> : <DescriptionIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <StyledBottomNavigation showLabels>
          <BottomNavigationAction icon={<LogoutIcon />} />
        </StyledBottomNavigation>
      </Box>
    </Drawer>
  );
}
