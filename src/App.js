import { CssBaseline } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Client/Main-Pages/Blogs";
import Orders from "./pages/Client/Main-Pages/Orders";
import Schedules from "./pages/Client/Main-Pages/Schedules";
import TrainersList from "./pages/Client/Main-Pages/Trainers-List";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTileName } from "./redux/AppbarTitleSlice";
import TrainerClients from "./pages/Trainer/MainPages/Clients";
import TrainerOrders from "./pages/Trainer/MainPages/Orders";
import TrainerPackages from "./pages/Trainer/MainPages/Packages";
import TrainerOrderDetaills from "./pages/Trainer/MainPages/OrderDetaills";
import TrainerPlan from "./pages/Trainer/MainPages/Plan";
import TrainerViewPlan from "./pages/Trainer/MainPages/ViewPlan";
import TrainerAboutProfile from "./pages/Trainer/MainPages/AboutProfile";
import TrainerProfile from "./pages/Trainer/MainPages/Profile";
import TrainerProfileEdit from "./pages/Trainer/MainPages/ProfileEdit";
import TrainerCreatepackage from "./pages/Trainer/MainPages/Createpackage";

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
        <Route path="/trainer/clients" element={<TrainerClients />} />
        <Route path="/trainer/orders" element={<TrainerOrders />} />
        <Route path="/trainer/packages" element={<TrainerPackages />} />
        <Route path="/trainer/orders/:id" element={<TrainerOrderDetaills />} />
        <Route path="/trainer/create-plan/:id" element={<TrainerPlan />} />
        <Route path="/trainer/plan/:id" element={<TrainerViewPlan />} />
        <Route path="/trainer/about" element={<TrainerAboutProfile />} />
        <Route path="/trainer/about" element={<TrainerAboutProfile />} />
        <Route path="/trainer/profile" element={<TrainerProfile />} />
        <Route path="/trainer/profile-edit" element={<TrainerProfileEdit />} />
        <Route
          path="/trainer/package-create"
          element={<TrainerCreatepackage />}
        />
      </Routes>
    </div>
  );
}

export default App;
