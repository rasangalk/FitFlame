import { Close } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AppBarTrainer from "../../../components/Trainer/AppBarTrainer";

const Createpackage = () => {
  const [selected, setSelected] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    setSelected(selected);
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("File type is not supported!");
    }
  };
  return (
    <Box sx={{ height: "100vh" }}>
      <AppBarTrainer trainerName="Hi, Randy!" />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
        }}
      >
        <Box
          sx={{
            margin: "5rem 5rem 1rem",
            backgroundColor: "#F4F3F8",
            borderRadius: "1.5rem",
            boxShadow: 12,
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "2rem 4rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    height: "300px",
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    marginTop: "4rem",
                    marginBottom: "1rem",
                    background: imagePreview
                      ? `url("${imagePreview}")no-repeat center/cover`
                      : "#D9D9D9",
                  }}
                >
                  {!imagePreview && (
                    <>
                      <label htmlFor="fileUpload">Choose Cover</label>
                      <input
                        type="file"
                        id="fileUpload"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </>
                  )}
                </Box>
                {imagePreview && (
                  <>
                    <Close
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setImagePreview(null);
                        setSelected("");
                      }}
                    />
                  </>
                )}
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  <span style={{ color: "#3C56F5" }}>Create</span> Package,
                </Typography>
                <TextField
                  sx={{ width: "100%", marginTop: "3rem" }}
                  id="outlined-basic"
                  label="Package"
                  variant="outlined"
                />
                <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                  <TextField
                    sx={{ width: "100%", marginTop: "3rem" }}
                    id="outlined-basic"
                    label="Duration"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ width: "100%", marginTop: "3rem" }}
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    type="number"
                  />
                </Box>
                <TextField
                  sx={{ width: "100%", marginTop: "3rem" }}
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={5}
                />
                <Button
                  sx={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "#3C56F5",
                    marginTop: "3rem",
                  }}
                  variant="contained"
                >
                  create
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Createpackage;
