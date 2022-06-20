import Checkbox from "./components/pages/checkbox/Checkbox";
import Navbar from "./components/Navbar";
import Welcome from "./components/pages/Welcome"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Checkbox" element={<Checkbox />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
