import Checkbox from "./pages/Checkbox";
import Navbar from "./pages/Navbar";
import Welcome from "./pages/Welcome"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Checkbox" element={<Checkbox />} />
      </Routes>
    </>
  );
}

export default App;
