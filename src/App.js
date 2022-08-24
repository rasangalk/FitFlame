import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
