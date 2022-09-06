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

import SignIn from "./pages/User/Main-Pages/SignIn";
import SignUp from "./pages/User/Main-Pages/SignUp";
import PasswordReset from "./pages/User/Main-Pages/PasswordReset";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import BlogList from "./pages/Admin/MainPages/BlogList";
import BlogCreate from "./pages/Admin/MainPages/BlogCreate";
import BlogView from "./pages/Admin/MainPages/BlogView";
import BlogUpdate from "./pages/Admin/MainPages/BlogUpdate";
import AdminUserList from "./pages/Admin/MainPages/AdminUserList";

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
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/trainers"
            element={
              <ProtectedRoute>
                <TrainersList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedules"
            element={
              <ProtectedRoute>
                <Schedules />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer-details"
            element={
              <ProtectedRoute>
                <TrainerDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/make-order"
            element={
              <ProtectedRoute>
                <MakeOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-order"
            element={
              <ProtectedRoute>
                <ViewOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-order"
            element={
              <ProtectedRoute>
                <UpdateOrder />
              </ProtectedRoute>
            }
          />
          {/* Chamod */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<PasswordReset />} />

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/create" element={<BlogCreate />} />
          <Route path="/blog/view" element={<BlogView />} />
          <Route path="/blog/update" element={<BlogUpdate />} />
          <Route path="/admin/users" element={<AdminUserList />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
