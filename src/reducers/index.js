import { actionType } from "./actionTypes";

export const initialState = {
  filters: {
    search: "",
    category: "All",
  },
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
      return {
        ...state,
        likes: action.payload.likes,
      };

    case actionType.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.playlists,
      };

    case actionType.SET_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((play) =>
          play._id === action.payload.playlistId
            ? action.payload.playlist
            : play
        ),
      };

    case actionType.SET_WATCH_LATER:
      return {
        ...state,
        watchLater: action.payload.watchlater,
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

    case actionType.SEARCH_FILTER_CHANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload.search,
        },
      };

    case actionType.CATEGORY_FILTER_CHANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload.category,
        },
      };

    default:
      return state;
  }
};
