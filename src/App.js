import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Homescreen from "./pages/HomeScreen/Homescreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Homescreen />} />
      </Routes>
    </>
  );
}

export default App;
