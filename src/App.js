import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { History, Home, Homescreen, Liked, Videos } from "./pages";

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
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
