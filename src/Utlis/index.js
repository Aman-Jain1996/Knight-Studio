import { useData } from "../contexts/DataContext";
import { actionType } from "../reducers/actionTypes";
import {
  DeleteLikeService,
  DeleteWatchLaterService,
  FetchCategoryService,
  FetchHistoryService,
  FetchLikedService,
  FetchPlaylistsService,
  FetchVideosService,
  FetchWatchLaterService,
  PostLikeService,
  PostWatchLaterService,
} from "../Services";

export const GetAllVideos = async (dispatch) => {
  try {
    const { data: videoData, status: videoStatus } = await FetchVideosService();

    if (videoStatus === 200 || videoStatus === 201) {
      dispatch({
        type: actionType.SET_VIDEOS,
        payload: { videos: videoData?.videos },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const GetAllCategories = async (dispatch) => {
  try {
    const { data: categoryData, status: categoryStatus } =
      await FetchCategoryService();

    if (categoryStatus === 200 || categoryStatus === 201) {
      dispatch({
        type: actionType.SET_CATEGORIES,
        payload: { categories: categoryData?.categories },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// Likes

export const GetLikedVideos = async (dispatch, token) => {
  try {
    const { data: likedData, status: likedStatus } = await FetchLikedService(
      token
    );

    if (likedStatus === 200 || likedStatus === 201) {
      dispatch({
        type: actionType.SET_LIKES,
        payload: { likes: likedData?.likes },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const PostLikeVideo = async (dispatch, video, token) => {
  try {
    const { data: likedData, status: likedStatus } = await PostLikeService(
      token,
      video
    );

    if (likedStatus === 200 || likedStatus === 201) {
      dispatch({
        type: actionType.SET_LIKES,
        payload: { likes: likedData?.likes },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteLikeVideo = async (dispatch, videoId, token) => {
  try {
    const { data: likedData, status: likedStatus } = await DeleteLikeService(
      token,
      videoId
    );

    if (likedStatus === 200 || likedStatus === 201) {
      dispatch({
        type: actionType.SET_LIKES,
        payload: { likes: likedData?.likes },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// Playlists

export const GetPlaylists = async (dispatch, token) => {
  try {
    const { data: playlistsData, status: playlistsStatus } =
      await FetchPlaylistsService(token);

    if (playlistsStatus === 200 || playlistsStatus === 201) {
      dispatch({
        type: actionType.SET_PLAYLISTS,
        payload: { playlists: playlistsData?.playlists },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// Watch Later

export const GetWatchLaterVideos = async (dispatch, token) => {
  try {
    const { data: watchLaterData, status: watchLaterStatus } =
      await FetchWatchLaterService(token);

    if (watchLaterStatus === 200 || watchLaterStatus === 201) {
      dispatch({
        type: actionType.SET_WATCH_LATER,
        payload: { watchlater: watchLaterData?.watchlater },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const PostWatchLaterVideos = async (dispatch, video, token) => {
  try {
    const { data: watchLaterData, status: watchLaterStatus } =
      await PostWatchLaterService(token, video);

    if (watchLaterStatus === 200 || watchLaterStatus === 201) {
      dispatch({
        type: actionType.SET_WATCH_LATER,
        payload: { watchlater: watchLaterData?.watchlater },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteWatchLaterVideo = async (dispatch, videoId, token) => {
  try {
    const { data: watchLaterData, status: watchLaterStatus } =
      await DeleteWatchLaterService(token, videoId);

    if (watchLaterStatus === 200 || watchLaterStatus === 201) {
      dispatch({
        type: actionType.SET_WATCH_LATER,
        payload: { watchlater: watchLaterData?.watchlater },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// History

export const GetWatchHistory = async (dispatch, token) => {
  try {
    const { data: historyData, status: historyStatus } =
      await FetchHistoryService(token);

    if (historyStatus === 200 || historyStatus === 201) {
      dispatch({
        type: actionType.SET_HISTORY,
        payload: { history: historyData?.history },
      });
    }
  } catch (err) {
    console.error(err);
  }
};
