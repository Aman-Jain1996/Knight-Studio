import { actionType } from "../reducers/actionTypes";
import {
  DeleteAllHistoryVideoService,
  DeleteLikeService,
  DeleteVideoHistoryService,
  DeleteWatchLaterService,
  FetchCategoryService,
  FetchHistoryService,
  FetchLikedService,
  FetchPlaylistsService,
  FetchVideoService,
  FetchVideosService,
  FetchWatchLaterService,
  PostHistoryService,
  PostLikeService,
  PostWatchLaterService,
} from "../Services";
import { ToastHandler } from "./toastUtils";

// Videos

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

export const GetAVideo = async (videoId) => {
  try {
    const { data: videoData, status: videoStatus } = await FetchVideoService(
      videoId
    );

    if (videoStatus === 200 || videoStatus === 201) {
      return videoData.video;
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
      ToastHandler("success", "Added to Liked Videos.....");
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
      ToastHandler("warn", "Removed from Liked Videos.....");
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
      ToastHandler("success", "Added to Watch Later Videos.....");
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
      ToastHandler("warn", "Removed from Watch Later Videos.....");
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

export const PostHistoryVideo = async (dispatch, video, token) => {
  try {
    const { data: historyData, status: historyStatus } =
      await PostHistoryService(token, video);

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

export const DeleteHistoryVideo = async (dispatch, videoId, token) => {
  try {
    const { data: historyData, status: historyStatus } =
      await DeleteVideoHistoryService(token, videoId);

    if (historyStatus === 200 || historyStatus === 201) {
      ToastHandler("warn", "Removed video from History.....");
      dispatch({
        type: actionType.SET_HISTORY,
        payload: { history: historyData?.history },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const DeleteAllHistoryVideo = async (dispatch, token) => {
  try {
    const { data: historyData, status: historyStatus } =
      await DeleteAllHistoryVideoService(token);

    if (historyStatus === 200 || historyStatus === 201) {
      ToastHandler("warn", "Cleared Watch History.....");
      dispatch({
        type: actionType.SET_HISTORY,
        payload: { history: historyData?.history },
      });
    }
  } catch (err) {
    console.error(err);
  }
};
