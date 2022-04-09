import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Homescreen from "./pages/HomeScreen/Homescreen";
import Liked from "./pages/Liked/Liked";
import Videos from "./pages/Videos/Videos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Homescreen />}>
          <Route path="explore" element={<Videos />} />
          <Route path="liked" element={<Liked />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
