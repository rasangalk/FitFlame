import {
  Box,
  Button,
  Card,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";

function ViewOrderSubPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state.orderId;
  const trainerName = location.state.trainerName;
  const trainerEmail = location.state.email;
  const [data, setData] = useState("");
  const [url, setURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const userDoc = doc(db, "orders", orderId);
      const docSnap = await getDoc(userDoc);
      setData(docSnap.data());
    }
    fetchData();
  }, []);

  console.log("This is OrderID", orderId);
  console.log("This is Data", data);
  // const [weight, setWeight] = useState("46");
  // const [height, setHeight] = useState("134");
  // const [goal, setGoal] = useState("weight loss");
  // const [programme, setProgramme] = useState("3 months");
  // const [description, setDescription] = React.useState(
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere magnam, deserunt consequatur voluptatum maxime, possimus officia quaerat maiores dolores nemo quis numquam sed cumque tempora ex aliquam amet perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere magnam, deserunt consequatur voluptatum maxime, possimus officia quaerat maiores dolores nemo quis numquam sed cumque tempora ex aliquam amet perferendis!"
  // );

  const storage = getStorage();
  const desertRef = ref(storage, `images/${data.image}`);
  getDownloadURL(desertRef)
    .then((url) => {
      setURL(url);
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break;
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break;
      }
    });

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
                  id="outlined-multiline-flexible"
                  label="Trainer Name"
                  sx={{ width: "100%" }}
                  value={trainerName}
                  inputProps={{ readOnly: true }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Email"
                  sx={{ width: "100%" }}
                  value={trainerEmail}
                  inputProps={{ readOnly: true }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Weight(kg)"
                  sx={{ width: "100%" }}
                  value={data.weight}
                  inputProps={{ readOnly: true }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Height(cm)"
                  sx={{ width: "100%" }}
                  value={data.height}
                  inputProps={{ readOnly: true }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Goal"
                  sx={{ width: "100%" }}
                  value={data.goal}
                  inputProps={{ readOnly: true }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Programme"
                  sx={{ width: "100%" }}
                  value={data.programme}
                  inputProps={{ readOnly: true }}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              sx={{ width: "100%" }}
              multiline
              maxRows={4}
              value={data.description}
              inputProps={{ readOnly: true }}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <CardMedia
              component="img"
              height="170px"
              sx={{ width: "140px", borderRadius: 3 }}
              image={url}
              alt="GYM TRAINER"
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
                  navigate("/update-order");
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

export default ViewOrderSubPage;
