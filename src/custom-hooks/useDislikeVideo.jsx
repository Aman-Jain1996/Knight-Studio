import { actionType } from "../reducers/actionTypes";
import { DeleteLikeVideo } from "../Utlis";

export function useDislikeVideo(dispatch, videoId, token) {
  DeleteLikeVideo(dispatch, videoId, token);
  dispatch({
    type: actionType.MENU_TOGGLE,
    payload: { id: 1 },
  });
}
