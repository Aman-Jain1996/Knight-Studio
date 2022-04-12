import { actionType } from "../reducers/actionTypes";
import { DeleteWatchLaterVideo } from "../Utlis";

export function useRemoveWatchLater(dispatch, videoId, token) {
  DeleteWatchLaterVideo(dispatch, videoId, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}
