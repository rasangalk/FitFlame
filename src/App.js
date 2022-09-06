import { CssBaseline } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Blogs from "./pages/Client/Main-Pages/Blogs";
import Orders from "./pages/Client/Main-Pages/Orders";
import Schedules from "./pages/Client/Main-Pages/Schedules";
import TrainersList from "./pages/Client/Main-Pages/Trainers-List";
import BlogList from "./pages/Admin/MainPages/BlogList";
import BlogCreate from "./pages/Admin/MainPages/BlogCreate";
import BlogView from "./pages/Admin/MainPages/BlogView";
import BlogUpdate from "./pages/Admin/MainPages/BlogUpdate";
import AdminUserList from "./pages/Admin/MainPages/AdminUserList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTileName } from "./redux/AppbarTitleSlice";

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
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/create" element={<BlogCreate />} />
        <Route path="/blog/view" element={<BlogView />} />
        <Route path="/blog/update" element={<BlogUpdate />} />
        <Route path="/admin/users" element={<AdminUserList />} />
      </Routes>
    </div>
  );
}

export default App;
