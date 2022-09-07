import React, { useState } from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
// import demoImage from "../../99.jpg";
import CloseIcon from "@mui/icons-material/Close";

const BlogUpdateSubPage = () => {
  return (
    <Box
      sx={{
        mx: "60px",
        my: "30px",
      }}
    >
      <TextField
        fullWidth
        label="Title"
        id="Title"
        defaultValue=""
        onInput={(e) => {
          e.target.value = e.target.value.slice(0, 70);
        }}
      />
      <TextField
        fullWidth
        sx={{ my: "20px" }}
        multiline
        rows={8}
        label="Content"
        id="Content"
      />

      <Box
        sx={{
          height: "160px",
          width: "160px",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <CloseIcon sx={{ position: "absolute", m: "5px auto auto 130px" }} />
        {/* <img src={demoImage} alt="demo" style={{ height: "inherit" }} /> */}
      </Box>
      <Grid container spacing={2} sx={{ mt: "5px" }}>
        <Grid item>
          <Button
            style={{
              backgroundColor: "#2A3036",
              padding: "5px 36px",
            }}
            variant="contained"
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{
              backgroundColor: "#3C56F5",
              padding: "5px 36px",
            }}
            variant="contained"
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogUpdateSubPage;
