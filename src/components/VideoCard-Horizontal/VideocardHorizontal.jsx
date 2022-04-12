import React from "react";
import "./VideocardHorizontal.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useAuth, useData } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";
import { useDislikeVideo, useRemoveWatchLater } from "../../custom-hooks";

export function VideocardHorizontal({ cardData, from }) {
  const { _id, imageUrl, title, creator } = cardData;
  const { dispatch } = useData();
  const { token } = useAuth();
  const date = new Date();

  const dislikeClickHandler = () => {
    useDislikeVideo(dispatch, _id, token);
  };

  const removeWatchLaterClickHandler = () => {
    useRemoveWatchLater(dispatch, _id, token);
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
