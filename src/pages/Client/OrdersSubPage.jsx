import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
const usersCollectionRef = collection(db, "orders");

function OrdersSubPage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const filterdData = query(
        usersCollectionRef,
        where("clientId", "==", "bVeT0xDbbWyyKJSLFYdH")
      );
      const querySnapshot = await getDocs(filterdData);
      setOrders(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUsers();
  }, []);

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
          padding: 4,
        }}
      >
        <Box>
          <Box
            sx={{
              padding: 4,
              height: "calc(100vh - 11rem)",
              overflow: "auto",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
              "&::-webkit-scrollbar-track": {
                background: "white",
                marginTop: "72px",
                marginBottom: "64px",
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell align="right">Trainer Name</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row) => (
                    <TableRow
                      key={row.clientId}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/view-order", {
                          state: {
                            orderId: row.id,
                            trainerName: row.trainerName,
                            email: row.trainerEmail,
                          },
                        });
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.orderId}
                      </TableCell>
                      <TableCell align="right">{row.trainerName}</TableCell>
                      <TableCell align="right">{row.trainerMobile}</TableCell>
                      <TableCell align="right">{row.trainerEmail}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrdersSubPage;
