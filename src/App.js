import { CssBaseline } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Client/Main-Pages/Blogs";
import Orders from "./pages/Client/Main-Pages/Orders";
import Schedules from "./pages/Client/Main-Pages/Schedules";
import TrainersList from "./pages/Client/Main-Pages/Trainers-List";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTileName } from "./redux/AppbarTitleSlice";
import TrainerDetails from "./pages/Client/Main-Pages/Trainer-Details";
import MakeOrder from "./pages/Client/Main-Pages/Make-Order";
import ViewOrder from "./pages/Client/Main-Pages/View-Order";
import UpdateOrder from "./pages/Client/Main-Pages/Update-Order";

export function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogs") {
      dispatch(setTileName("Blogs"));
    } else if (location.pathname === "/trainers") {
      dispatch(setTileName("Trainers"));
    } else if (location.pathname === "/orders") {
      dispatch(setTileName("Order History"));
    } else if (location.pathname === "/schedules") {
      dispatch(setTileName("Schedules"));
    } else if (location.pathname === `/trainer-details`) {
      dispatch(setTileName("Trainer Details"));
    } else if (location.pathname === "/make-order") {
      dispatch(setTileName("Make Order"));
    } else if (location.pathname === "/view-order") {
      dispatch(setTileName("View Order"));
    } else if (location.pathname === "/update-order") {
      dispatch(setTileName("Update Order"));
    }
  }, [location.pathname]);

  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/trainer-details" element={<TrainerDetails />} />
        <Route path="/make-order" element={<MakeOrder />} />
        <Route path="/view-order" element={<ViewOrder />} />
        <Route path="/update-order" element={<UpdateOrder />} />
      </Routes>
    </div>
  );
}

export default App;
