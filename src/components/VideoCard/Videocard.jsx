import React, { useEffect, useState } from "react";
import "./Videocard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useData, useAuth } from "../../contexts";
import { actionType } from "../../reducers/actionTypes";
import { useNavigate } from "react-router-dom";

export function Videocard({ video }) {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const { _id, imageUrl, title, creator, menu } = video;

  const navigate = useNavigate();

  const isLiked = state.likes.find((like) => like._id === _id);
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
      dispatch({
        type: actionType.SET_LIKES,
        payload: { likes: [{ ...video }] },
      });

      dispatch({
        type: actionType.MENU_TOGGLE,
        payload: { id: 1 },
      });
    } else {
      navigate("/login");
    }
  };

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

  const watchLaterClickHandler = () => {
    if (token) {
      dispatch({
        type: actionType.SET_WATCH_LATER,
        payload: { watchlater: [{ ...video }] },
      });

      dispatch({
        type: actionType.MENU_TOGGLE,
        payload: { id: 1 },
      });
    } else {
      navigate("/login");
    }
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
    <div className="videocard-container">
      <div className="video-banner">
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
              <div className="menu-items">
                <span>
                  <ThumbUpAltIcon />
                </span>
                {isLiked ? (
                  <div onClick={dislikeClickHandler}>Dislike video</div>
                ) : (
                  <div onClick={likeClickHandler}>Like Video</div>
                )}
              </div>
              <div className="menu-items">
                <span>
                  <BookmarkIcon />
                </span>
                {isWatchLater ? (
                  <div onClick={removeWatchLaterClickHandler}>
                    Remove Watch Later
                  </div>
                ) : (
                  <div onClick={watchLaterClickHandler}>Watch Later</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
