import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBarTrainer from "../../../components/Trainer/AppBarTrainer";

const OrderDetaills = () => {
  function createData(name, age, weight, height, goal, program, phone, email) {
    return { name, age, weight, height, goal, program, phone, email };
  }

  const rows = [
    createData(
      "Nimesha Chamod",
      22,
      98,
      178,
      "Weight loss",
      "3 Months",
      "+94782345243",
      "nimeshachamod@gmail.com"
    ),
  ];

  return (
    <Box>
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
            Order Details
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "4rem" }}>
          <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Age
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Weight&nbsp;(kg)
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Height&nbsp;(cm)
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Goal
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Program
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Phone
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#2A3036" }}>
                    Email
                  </TableCell>
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
                    <TableCell align="left">{row.age}</TableCell>
                    <TableCell align="left">{row.weight}</TableCell>
                    <TableCell align="left">{row.height}</TableCell>
                    <TableCell align="left">{row.goal}</TableCell>

                    <TableCell align="left">{row.program}</TableCell>

                    <TableCell align="left">{row.phone}</TableCell>

                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={5}
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus scelerisque lectus praesent semper. Viverra eu at amet consectetur habitasse. Pellentesque etiam quis viverra non et adipiscing. Sagittis consequat risus tortor, arcu enim sit. Adipiscing ornare laoreet viverra hac nunc nunc praesent varius vitae. Curabitur diam in sagittis ultrices aliquet tempor malesuada. Dignissim morbi fermentum, lectus ultricies cras tortor. Sit viverra id vitae, ornare pellentesque non, amet, fusce. Diam elementum dictum ac in id."
          InputProps={{
            readOnly: true,
          }}
        />

        <Box sx={{ display: "flex", gap: 4, marginTop: "3rem" }}>
          <Button
            sx={{ height: "40px", width: "130px", backgroundColor: "#2A3036" }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            sx={{ height: "40px", width: "130px", backgroundColor: "#3C56F5" }}
            variant="contained"
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetaills;
