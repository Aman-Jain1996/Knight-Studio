import React from "react";
import "./VideocardHorizontal.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useData } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";

export function VideocardHorizontal({ cardData, from }) {
  const { _id, imageUrl, title, creator } = cardData;
  const { dispatch } = useData();
  const date = new Date();

  const dislikeClickHandler = () => {
    dispatch({
      type: actionType.SET_LIKES,
      payload: { type: actionType.DISLIKE_VIDEO, id: _id },
    });
    dispatch({
      type: actionType.MENU_TOGGLE,
      payload: { id: 1 },
    });
  };

  const removeWatchLaterClickHandler = () => {
    dispatch({
      type: actionType.SET_WATCH_LATER,
      payload: { type: actionType.REMOVE_WATCH_LATER, id: _id },
    });
    dispatch({
      type: actionType.MENU_TOGGLE,
      payload: { id: 1 },
    });
  };

  return (
    <div className="videocard-horizontal-container">
      <div className="videocard-horizontal-image">
        <img src={imageUrl} alt="like-image-banner" />
      </div>
      <div className="videocard-horizontal-content">
        <div className="content-title">{title}</div>
        <div className="content-desc">{creator}</div>
        <div className="timestamp">
          <span>
            <AccessTimeIcon />
          </span>
          {date.toDateString()}
        </div>
      </div>
      <div className="card-actionContainer">
        <div
          title={
            from === "like"
              ? "Remove from liked videos"
              : "Remove from Watch Later"
          }
        >
          <DeleteIcon
            onClick={
              from === "like"
                ? dislikeClickHandler
                : removeWatchLaterClickHandler
            }
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}
