import { Box, Grid, Button } from "@mui/material";
import React from "react";
import Table from "./AdminUserListTable";

const AdminUserListSubPage = () => {
  return (
    <Box
      sx={{
        height: 300,
        mx: "60px",
        my: "30px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={10}>
          <h1>Users</h1>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#3C56F5",
              padding: "5px 36px",
            }}
            variant="contained"
          >
            Report
          </Button>
        </Grid>
      </Grid>

      <Table />
    </Box>
  );
};

export default AdminUserListSubPage;
