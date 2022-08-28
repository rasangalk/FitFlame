import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";

function createData(name, age, mobile, email) {
  return { name, age, mobile, email };
}

function TrainerDetailsSubPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const trainerId = location.state.id;

  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const userDoc = doc(db, "users", trainerId);
      const docSnap = await getDoc(userDoc);
      setData(docSnap.data());
    }
    fetchData();
  }, []);

  const rows = [createData(data.name, data.age, data.mobile, data.email)];
  console.log("This is what is expect", data);
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
        <Box sx={{ padding: 4, position: "relative" }}>
          <Box>
            <TableContainer
              component={Paper}
              sx={{ background: "white", boxShadow: "none", borderRadius: 5 }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Mobile</TableCell>
                    <TableCell align="right">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.mobile}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              sx={{ width: "100%" }}
              multiline
              aria-readonly
              maxRows={8}
              value={data.description}
              inputProps={{ readOnly: true }}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Packages"
              sx={{ width: "100%" }}
              multiline
              aria-readonly
              maxRows={10}
              value={data.packages}
              inputProps={{ readOnly: true }}
              InputLabelProps={{ shrink: true }}
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
                  navigate("/make-order", {
                    state: {
                      id: trainerId,
                      name: data.name,
                      mobile: data.mobile,
                      email: data.email,
                    },
                  });
                }}
              >
                Make Order
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default TrainerDetailsSubPage;
