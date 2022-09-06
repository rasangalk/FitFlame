import { Box, Grid } from "@mui/material";
import React from "react";
import MenuAppBar from "../../../components/Client/layouts/Appbar";
import MiniDrawer from "../../../components/Client/layouts/Drawer";

function Orders() {
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

export default Orders;
