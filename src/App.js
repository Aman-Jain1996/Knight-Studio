import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";

import {
  History,
  Home,
  Homescreen,
  Liked,
  Login,
  Playlist,
  Signup,
  Videos,
  WatchLater,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="mock" element={<Mockman />} />
        <Route exact path="/" element={<Home />} />
        <Route element={<Homescreen />}>
          <Route path="explore" element={<Videos />} />
          <Route path="liked" element={<Liked />} />
          <Route path="history" element={<History />} />
          <Route path="later" element={<WatchLater />} />
          <Route path="playlists" element={<Playlist />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
