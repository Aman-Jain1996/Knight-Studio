import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DataReducer, initialState } from "../reducers";
import {
  GetAllCategories,
  GetAllVideos,
  GetLikedVideos,
  GetPlaylists,
  GetWatchHistory,
  GetWatchLaterVideos,
} from "../Utlis";
import { useAuth } from "./AuthContext";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const { token } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [loader, setLoader] = useState(false);
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    GetAllVideos(dispatch);
    GetAllCategories(dispatch);
  }, []);

  useEffect(() => {
    if (token) {
      GetWatchLaterVideos(dispatch, token);
      GetWatchHistory(dispatch, token);
      GetLikedVideos(dispatch, token);
      GetPlaylists(dispatch, token);
    }
  }, [token]);

  return (
    <div>
      <DataContext.Provider
        value={{
          state,
          dispatch,
          loader,
          setLoader,
          isPlaylistModalOpen,
          setIsPlaylistModalOpen,
          isAddModalOpen,
          setIsAddModalOpen,
          modalData,
          setModalData,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}

export const useData = () => useContext(DataContext);
