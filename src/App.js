import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  AddPlaylistModal,
  Loading,
  Navbar,
  PlaylistModal,
  PrivateRoute,
} from "./components";
import { useAuth, useData } from "./contexts";
import {
  History,
  Home,
  Homescreen,
  Liked,
  Login,
  Playlist,
  Signup,
  Videos,
  Video,
  WatchLater,
  SinglePlaylist,
} from "./pages";

function App() {
  const { token } = useAuth();
  const { loader, isPlaylistModalOpen, isAddModalOpen } = useData();
  return (
    <>
      {token && isAddModalOpen && <AddPlaylistModal />}
      {token && isPlaylistModalOpen && <PlaylistModal />}
      {loader && <Loading />}
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navbar />
      <Routes>
        <Route path="mock" element={<Mockman />} />
        <Route exact path="/" element={<Home />} />
        <Route element={<Homescreen />}>
          <Route path="explore" element={<Videos />} />
          <Route path="explore/:videoId" element={<Video />} />
          <Route
            path="liked"
            element={
              <PrivateRoute>
                <Liked />
              </PrivateRoute>
            }
          />
          <Route
            path="history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="later"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          />
          <Route
            path="playlists"
            element={
              <PrivateRoute>
                <Playlist />
              </PrivateRoute>
            }
          />
          <Route
            path="playlists/:playlistId"
            element={
              <PrivateRoute>
                <SinglePlaylist />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
