import React from "react";
import AppBarTrainer from "../../../components/Trainer/AppBarTrainer";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";

const Packages = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "program", headerName: "Program", flex: 0.3 },
    { field: "duration", headerName: "Duration", flex: 0.3 },
    {
      field: "price",
      headerName: "Price",
      flex: 0.2,
      align: "left",
      headerAlign: "left",
    },
  ];

  const rows = [
    {
      id: 1,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
    {
      id: 2,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
    {
      id: 3,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
    {
      id: 4,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
    {
      id: 5,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
    {
      id: 6,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
    {
      id: 7,
      program: "Cardio Mastery",
      duration: "3 months",
      price: "45,000 LKR",
    },
  ];

  return (
    <div>
      {" "}
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
            Packages
          </Typography>
          <Button
            variant="contained"
            sx={{ height: "40px", width: "130px", backgroundColor: "#3C56F5" }}
          >
            add
          </Button>
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

export default Packages;
