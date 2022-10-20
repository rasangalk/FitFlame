import React, { useState, useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../../firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { Grid, Typography } from "@mui/material";

const theadStyle = {
  fontFamily: "poppins",
  fontWeight: "bold",
  fontStyle: "normal",
};

const thStyle = {
  paddingLeft: "50px",
  paddingTop: "30px",
};

const heading = {
  left: "auto",
  paddingTop: "40px",
  paddingLeft: "50px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "37px",
  textAlign: "left",
  color: "#125465",
};

const trStyle = {
  fontFamily: "poppins",
  fontWeight: "normal",
  fontStyle: "normal",
};

const tdStyle = {
  paddingLeft: "50px",
  paddingTop: "10px",
};

const button = {
  left: "100px",
  width: "160px",
  padding: "8px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "17px",
  textAlign: "center",
  color: "white",
  backgroundColor: "#054fc7",
  border: "none",
  borderRadius: "12px",
};

const body = {
  backgroundColor: "white",
  width: "100vw",
  height: "100vh",
  paddingLeft: "40px",
  paddingTop: "40px",
};

const WorkoutSchedule = (props) => {
  return (
    <tr key={props.inv.id} style={trStyle}>
      <td style={tdStyle}>{props.inv.trainerName}</td>
      <td style={tdStyle}> {props.inv.trainerID}</td>
      <td style={tdStyle}> {props.inv.description}</td>
      <td style={tdStyle}> {props.inv.date}</td>
      <td style={tdStyle}> {props.inv.workoutPlan}</td>
    </tr>
  );
};

const Example = React.forwardRef((props, ref) => {
  const [rows, setRows] = useState([]);
  const location = useLocation();
  const scheduleId = location.state.id;

  useEffect(() => {
    // const getBlogs = async () => {
    //   const filterdData = query(
    //     collection(db, "users"),
    //     where("role", "==", "Trainer")
    //   );
    //   const querySnapshot = await getDocs(filterdData);
    //   let usersList = querySnapshot.docs.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id,
    //   }));
    //   setRows(usersList);
    //   console.log(usersList);
    // };

    // getBlogs();
    // const orderId = "Q4BrUHThgVUOrbTBGm37";

    async function fetchData() {
      const userDoc = doc(db, "shedules", scheduleId);
      const docSnap = await getDoc(userDoc);
      setRows(docSnap.data());
    }
    fetchData();
  }, []);

  console.log("THE ROWS", rows);

  //   const trainersList = () => {
  //     return rows.map(function (currentTrainer, i) {
  //       return <WorkoutSchedule inv={currentTrainer} key={i} />;
  //     });
  //   };

  return (
    <div ref={ref}>
      <p style={heading}>Workout Schedule Report - FitFlame</p>

      <table>
        <thead style={theadStyle}>
          <th style={thStyle}>Trainer Name</th>
          <th style={thStyle}>Trainer ID</th>
          <th style={thStyle}>Description</th>
          <th style={thStyle}>Date</th>
          <th style={thStyle}>Workout Plan</th>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>{rows.trainerName}</td>
            <td style={tdStyle}>{rows.trainerID}</td>
            <td style={tdStyle}>{rows.description}</td>
            <td style={tdStyle}>{rows.date}</td>
            <td style={tdStyle}>{rows.workoutPlan}</td>
            {/* <td style={tdStyle}> {props.inv.trainerID}</td>
            <td style={tdStyle}> {props.inv.description}</td>
            <td style={tdStyle}> {props.inv.date}</td>
            <td style={tdStyle}> {props.inv.workoutPlan}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
});

const WorkoutScheduleReport = () => {
  const componentRef = useRef();

  return (
    <div style={body}>
      <ReactToPrint
        trigger={() => <button style={button}>Print</button>}
        content={() => componentRef.current}
      />
      <Example ref={componentRef} />
    </div>
  );
};

export default WorkoutScheduleReport;
