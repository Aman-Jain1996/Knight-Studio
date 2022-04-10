import React, { useEffect, useState } from "react";
import "./Videocard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useData, useAuth } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";
import { useNavigate } from "react-router-dom";
import {
  useDislikeVideo,
  useLikeVideo,
  useRemoveWatchLater,
  useWatchLaterVideo,
} from "../../custom-hooks";

export function Videocard({ video }) {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const { _id, imageUrl, title, creator, menu } = video;

  const navigate = useNavigate();

  const isLiked = state.likes?.find((like) => like._id === _id);
  const isWatchLater = state.watchLater.find((later) => later._id === _id);

  useEffect(() => {
    dispatch({
      type: actionType.MENU_TOGGLE,
      payload: { id: 1 },
    });
  }, [navigate]);

  const toggleMenuClickHandler = () => {
    dispatch({
      type: actionType.MENU_TOGGLE,
      payload: { id: _id },
    });
  };

  const likeClickHandler = () => {
    if (token) {
      useLikeVideo(dispatch, video, token);
    } else {
      navigate("/login", { state: { path: location.pathname } });
    }
  };

  const dislikeClickHandler = () => {
    useDislikeVideo(dispatch, _id, token);
  };

  const watchLaterClickHandler = () => {
    if (token) {
      useWatchLaterVideo(dispatch, video, token);
    } else {
      navigate("/login", { state: { path: location.pathname } });
    }
  };

  const removeWatchLaterClickHandler = () => {
    useRemoveWatchLater(dispatch, _id, token);
  };

  return (
    <div className="videocard-container">
      <div className="video-banner" onClick={() => navigate(`/explore/${_id}`)}>
        <img src={imageUrl} alt="image" />
      </div>
      <div className="video-content">
        <div className="content">
          <span className="video-title">{title}</span>
          <span className="video-creator">{creator}</span>
        </div>
        <div className="video-menu">
          <MoreVertIcon
            onClick={toggleMenuClickHandler}
            className="video-menu-icon"
          />
          {menu && (
            <div className="video-menu-container">
              <div
                className="menu-items"
                onClick={isLiked ? dislikeClickHandler : likeClickHandler}
              >
                <span>
                  <ThumbUpAltIcon />
                </span>
                {isLiked ? "Dislike video" : "Like Video"}
              </div>
              <div
                className="menu-items"
                onClick={
                  isWatchLater
                    ? removeWatchLaterClickHandler
                    : watchLaterClickHandler
                }
              >
                <span>
                  <BookmarkIcon />
                </span>
                {isWatchLater ? "Remove Watch Later" : "Watch Later"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
