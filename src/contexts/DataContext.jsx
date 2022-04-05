import React, { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../reducers";
import { actionType } from "../reducers/actionTypes";
import { FetchCategoryService, FetchVideosService } from "../Services";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    {
      (async () => {
        const { data: videoData, status: videoStatus } =
          await FetchVideosService();

        if (videoStatus === 200 || videoStatus === 201) {
          dispatch({
            type: actionType.SET_VIDEOS,
            payload: { videos: videoData?.videos },
          });
        }

        const { data: categoryData, status: categoryStatus } =
          await FetchCategoryService();

        if (categoryStatus === 200 || categoryStatus === 201) {
          dispatch({
            type: actionType.SET_CATEGORIES,
            payload: { categories: categoryData?.categories },
          });
        }
      })();
    }
  }, []);

  return (
    <div>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </div>
  );
}

export const useData = () => useContext(DataContext);
