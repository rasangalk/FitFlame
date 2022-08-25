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
import { styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTileName } from "../../../redux/AppbarTitleSlice";
const drawerWidth = 64;

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 20,
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Pathname", location.pathname);

  const drawer = (
    <Box>
      <StyledList>
        <ListItem disablePadding>
          {location.pathname === "/blogs" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                dispatch(setTileName("Blogs"));
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
                dispatch(setTileName("Blogs"));
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
          {location.pathname === "/trainers" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                dispatch(setTileName("Trainers"));
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
                dispatch(setTileName("Trainers"));
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
          {location.pathname === "/orders" ? (
            <StyledListItemButton
              sx={{ background: "#2A3036" }}
              onClick={() => {
                dispatch(setTileName("Order History"));
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
                dispatch(setTileName("Order History"));
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
                dispatch(setTileName("Schedules"));
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
                dispatch(setTileName("Schedules"));
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
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
              marginTop: 8.3,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}
