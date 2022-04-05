import { actionType } from "./actionTypes";

export const initialState = {
  videos: [],
  categories: [],
  history: [],
  likes: [],
  playlists: [],
  watchLater: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_VIDEOS:
      return {
        ...state,
        videos: action.payload.videos,
      };

    case actionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };

    case actionType.SET_HISTORY:
      return {
        ...state,
        history: action.payload.history,
      };

    case actionType.SET_LIKES:
      return {
        ...state,
        likes: action.payload.likes,
      };

    case actionType.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.playlists,
      };

    case actionType.SET_WATCH_LATER:
      return {
        ...state,
        watchLater: action.payload.watchlater,
      };

    default:
      return state;
  }
};
