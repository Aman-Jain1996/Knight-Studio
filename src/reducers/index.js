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
        videos: action.payload.videos.map((video) => ({
          ...video,
          menu: false,
        })),
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
      if (action.payload.type === actionType.DISLIKE_VIDEO) {
        return {
          ...state,
          likes: state.likes.filter((like) => like._id !== action.payload.id),
        };
      }
      return {
        ...state,
        likes: state.likes.concat(action.payload.likes),
      };

    case actionType.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.playlists,
      };

    case actionType.SET_WATCH_LATER:
      if (action.payload.type === actionType.REMOVE_WATCH_LATER) {
        return {
          ...state,
          watchLater: state.watchLater.filter(
            (later) => later._id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        watchLater: state.watchLater.concat(action.payload.watchlater),
      };

    case actionType.MENU_TOGGLE:
      return {
        ...state,
        videos: state.videos.map((video) =>
          video._id === action.payload.id
            ? { ...video, menu: !video.menu }
            : { ...video, menu: false }
        ),
      };

    // case actionType.SET_LIKE_VIDEO:
    //   const likedVideo = state.videos.filter((video) => video._id === id);
    //   console.log(likedVideo);
    //   return {
    //     ...state,
    //     likes: state.likes.concat(likedVideo),
    //   };

    default:
      return state;
  }
};
