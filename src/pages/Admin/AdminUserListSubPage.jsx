import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import LoadingSpinner from "../../components/Admin/LoadingSpinner";

const AdminUserListSubPage = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getBlogs = async () => {
      const filterdData = query(
        collection(db, "users"),
        where("name", "!=", "null")
      );
      const querySnapshot = await getDocs(filterdData);
      setRows(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getBlogs();
  }, []);

  const renderPage = (
    <Box
      sx={{
        height: 300,
        mx: "60px",
        my: "10px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={8}>
          <h1>Users</h1>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            label="Title"
            id="Title"
            size="small"
            sx={{ textTransform: "capitalize" }}
          />
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
      <TableContainer
        sx={{
          height: 410,
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#2A3036",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Table sx={{ width: 1200, height: "max-content" }}>
          <TableHead sx={{ width: 1200 }}>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.blogID} hover={true}>
                <TableCell scope="row">{row.id}</TableCell>
                <TableCell
                  sx={{ textTransform: "capitalize" }}
                  style={{ width: 300 }}
                  align="left"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ textTransform: "capitalize" }}
                  style={{ width: 160 }}
                  align="center"
                >
                  {row.role}
                </TableCell>
                <TableCell
                  sx={{ textTransform: "lowercase" }}
                  style={{ width: 350 }}
                  align="left"
                >
                  {row.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return <> {isLoading ? <LoadingSpinner /> : renderPage}</>;
};

export default AdminUserListSubPage;
