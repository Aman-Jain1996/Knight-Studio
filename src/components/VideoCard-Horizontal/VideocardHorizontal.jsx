import React from "react";
import "./VideocardHorizontal.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useAuth, useData } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";
import {
  useDislikeVideo,
  useRemoveHistoryVideo,
  useRemoveWatchLater,
} from "../../custom-hooks";
import { useNavigate } from "react-router-dom";

export function VideocardHorizontal({ cardData, from }) {
  const { _id, imageUrl, title, creator } = cardData;
  const { dispatch } = useData();
  const { token } = useAuth();
  const date = new Date();
  const navigate = useNavigate();

  const dislikeClickHandler = () => {
    useDislikeVideo(dispatch, _id, token);
  };

  const removeWatchLaterClickHandler = () => {
    useRemoveWatchLater(dispatch, _id, token);
  };

  const removeWatchHistoryClickHandler = () => {
    useRemoveHistoryVideo(dispatch, _id, token);
  };

  return (
    <div className="videocard-horizontal-container">
      <div
        className="videocard-horizontal-image"
        onClick={() => navigate(`/explore/${_id}`)}
      >
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
              : from === "history"
              ? "Remove from History"
              : "Remove from Watch Later"
          }
        >
          <DeleteIcon
            onClick={
              from === "like"
                ? dislikeClickHandler
                : from === "history"
                ? removeWatchHistoryClickHandler
                : removeWatchLaterClickHandler
            }
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}
