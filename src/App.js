import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Client/Main-Pages/Blogs";
import Orders from "./pages/Client/Main-Pages/Orders";
import Schedules from "./pages/Client/Main-Pages/Schedules";
import TrainersList from "./pages/Client/Main-Pages/Trainers-List";

export function App() {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/schedules" element={<Schedules />} />
      </Routes>
    </div>
  );
}

export default App;
