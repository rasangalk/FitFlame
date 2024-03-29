import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import FeedIcon from "@mui/icons-material/Feed";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GroupsIcon from "@mui/icons-material/Groups";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../Context/UserAuthContext";

const drawerWidth = 64;

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 70,
});

const StyledListItemButton = styled(ListItemButton)({
  "& svg": {
    fontSize: 25,
  },
  "&:hover": {
    background: "rgba(42, 48, 54, 0.16)",
    "& svg": {
      color: "#2A3036",
    },
  },
  borderRadius: 10,
  margin: 3,
  height: 50,
});

export default function MiniDrawer() {
  const { LogOut, user } = useUserAuth();
  console.log(user);
  const logOutnavigate = useNavigate();
  const handleLogout = async () => {
    try {
      await LogOut();
      logOutnavigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();

  const drawer = (
    <Box>
      <StyledList>
        <ListItem disablePadding>
          {location.pathname === "/blogs" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                navigate("/blogs");
              }}
            >
              <FeedIcon
                sx={{
                  color: "white",
                }}
              />
            </StyledListItemButton>
          ) : (
            <StyledListItemButton
              onClick={() => {
                navigate("/blogs");
              }}
            >
              <FeedIcon
                sx={{
                  color: "#2A3036",
                }}
              />
            </StyledListItemButton>
          )}
        </ListItem>
        <ListItem disablePadding>
          {location.pathname === "/trainers" ||
          location.pathname === "/trainer-details" ||
          location.pathname === "/make-order" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                navigate("/trainers");
              }}
            >
              <GroupsIcon
                sx={{
                  color: "white",
                }}
              />
            </StyledListItemButton>
          ) : (
            <StyledListItemButton
              onClick={() => {
                navigate("/trainers");
              }}
            >
              <GroupsIcon
                sx={{
                  color: "#2A3036",
                }}
              />
            </StyledListItemButton>
          )}
        </ListItem>
        <ListItem disablePadding>
          {location.pathname === "/orders" ||
          location.pathname === "/view-order" ||
          location.pathname === "/update-order" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                navigate("/orders");
              }}
            >
              <ListAltIcon
                sx={{
                  color: "white",
                }}
              />
            </StyledListItemButton>
          ) : (
            <StyledListItemButton
              onClick={() => {
                navigate("/orders");
              }}
            >
              <ListAltIcon
                sx={{
                  color: "#2A3036",
                }}
              />
            </StyledListItemButton>
          )}
        </ListItem>
        <ListItem disablePadding>
          {location.pathname === "/schedules" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                navigate("/schedules");
              }}
            >
              <EventNoteIcon
                sx={{
                  color: "white",
                }}
              />
            </StyledListItemButton>
          ) : (
            <StyledListItemButton
              onClick={() => {
                navigate("/schedules");
              }}
            >
              <EventNoteIcon
                sx={{
                  color: "#2A3036",
                }}
              />
            </StyledListItemButton>
          )}
        </ListItem>
      </StyledList>
    </Box>
  );

  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        width: "100%",
      }}
    >
      <Box
        position="fixed"
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: "100vh",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
          <StyledList sx={{ position: "fixed", bottom: 0 }}>
            <ListItem disablePadding>
              <StyledListItemButton onClick={handleLogout}>   
               <LogoutIcon
                  sx={{
                    color: "#2A3036",
                  }}
                />
              </StyledListItemButton>
            </ListItem>
          </StyledList>
        </Drawer>
      </Box>
    </Box>
  );
}
