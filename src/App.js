import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
