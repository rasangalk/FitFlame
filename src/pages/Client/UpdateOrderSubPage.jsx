import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function UpdateOrderSubPage() {
  const [age, setAge] = useState("");
  const [description, setDescription] = useState();
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      p={0}
      sx={{
        height: "calc(100vh - 64px)",
        padding: 2,
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 6rem)",
          background: "rgba(255, 255, 255, 0.73)",
          borderRadius: "41px",
          position: "relative",
        }}
      >
        <Box sx={{ padding: 4 }}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="weight(kg)"
                  defaultValue="46"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="height(cm)"
                  defaultValue="146"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="goal"
                  variant="outlined"
                  defaultValue="weight loss"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    programme
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>programme 1</MenuItem>
                    <MenuItem value={20}>programme 2</MenuItem>
                    <MenuItem value={30}>programme 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              sx={{ width: "100%" }}
              defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere magnam, deserunt consequatur voluptatum maxime, possimus officia quaerat maiores dolores nemo quis numquam sed cumque tempora ex aliquam amet perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere magnam, deserunt consequatur voluptatum maxime, possimus officia quaerat maiores dolores nemo quis numquam sed cumque tempora ex aliquam amet perferendis!"
              multiline
              maxRows={4}
              value={description}
            />
          </Box>
        </Box>
        <Box sx={{ padding: 4, position: "absolute", bottom: 0 }}>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="contained" sx={{ background: "#2A3036" }}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ background: "#3C56F5" }}
                onClick={() => {
                  // navigate("/make-order");
                }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default UpdateOrderSubPage;
