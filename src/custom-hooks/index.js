export { useFilteredData } from "./filteredData";

import { actionType } from "../reducers/actionTypes";
import {
  PostLikeVideo,
  DeleteLikeVideo,
  PostWatchLaterVideos,
  DeleteWatchLaterVideo,
  DeleteHistoryVideo,
  DeleteAllHistoryVideo,
} from "../Utlis";

export const useLikeVideo = (dispatch, video, token) => {
  PostLikeVideo(dispatch, video, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
};

export function useDislikeVideo(dispatch, videoId, token) {
  DeleteLikeVideo(dispatch, videoId, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}

export function useRemoveWatchLater(dispatch, videoId, token) {
  DeleteWatchLaterVideo(dispatch, videoId, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}

export function useWatchLaterVideo(dispatch, video, token) {
  PostWatchLaterVideos(dispatch, video, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}

export function useRemoveHistoryVideo(dispatch, videoId, token) {
  DeleteHistoryVideo(dispatch, videoId, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}

export function useRemoveAllHistoryVideo(dispatch, token) {
  DeleteAllHistoryVideo(dispatch, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}
