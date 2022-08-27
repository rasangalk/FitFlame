import { Box, Button, TextField } from "@mui/material";
import React from "react";
import AppBarTrainer from "../../../components/Trainer/AppBarTrainer";

const Plan = () => {
  return (
    <Box>
      <AppBarTrainer trainerName="Hi, Randy!"></AppBarTrainer>
      <Box sx={{ margin: "5rem 5rem 1rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Workout Plan"
            multiline
            rows={5}
          />
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Meal Plan"
            multiline
            rows={5}
          />
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={5}
          />
        </Box>
        <Button
          sx={{
            height: "40px",
            width: "200px",
            backgroundColor: "#3C56F5",
            marginTop: "3rem",
          }}
          variant="contained"
        >
          send
        </Button>
      </Box>
    </Box>
  );
};

export default Plan;
