import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AppBarTrainer from "../../../components/Trainer/AppBarTrainer";
import { DataGrid } from "@mui/x-data-grid";

const Orders = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "name", headerName: "Name", flex: 0.3 },
    { field: "email", headerName: "Email", flex: 0.3 },
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.2,
      align: "left",
      headerAlign: "left",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
    {
      id: 2,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
    {
      id: 3,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
    {
      id: 4,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
    {
      id: 5,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
    {
      id: 6,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
    {
      id: 7,
      name: "Nimesha Chamod",
      email: "chamod@gmail.com",
      phone: "+94702343123",
    },
  ];

  return (
    <div>
      <AppBarTrainer trainerName="Hi, Randy!"></AppBarTrainer>
      <Box sx={{ margin: "5rem 5rem 1rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#2A3036", fontWeight: "400", marginBottom: "5rem" }}
          >
            Orders
          </Typography>
        </Box>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Orders;
