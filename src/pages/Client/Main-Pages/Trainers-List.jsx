import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../../components/Client/layouts/Appbar";
import MiniDrawer from "../../../components/Client/layouts/Drawer";

export default function TrainersList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Grid container spacing={0}>
        <Grid item md={0.5}>
          <MiniDrawer />
        </Grid>
        <Grid item md={11.5}></Grid>
      </Grid>
    </Box>
  );
}
