import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import QueueIcon from "@mui/icons-material/Queue";
import { useAuth, useData } from "../../contexts";
import { GetAVideo, PostHistoryVideo } from "../../Utlis";
import "./Video.css";
import {
  useDislikeVideo,
  useLikeVideo,
  useRemoveWatchLater,
  useWatchLaterVideo,
} from "../../custom-hooks";

export function Video() {
  const { token } = useAuth();
  const { videoId } = useParams();
  const { state, dispatch, loader, setLoader } = useData();
  const [videoDetails, setVideoDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    (async () => {
      const data = await GetAVideo(videoId);
      setVideoDetails(data);
      PostHistoryVideo(dispatch, data, token);
      setLoader(false);
    })();
  }, []);

  const isLiked = state.likes?.find((like) => like._id === videoId);
  const isWatchLater = state.watchLater?.find((later) => later._id === videoId);

  const likeClickHandler = () => {
    if (token) {
      useLikeVideo(dispatch, videoDetails, token);
    } else {
      navigate("/login");
    }
  };

  const dislikeClickHandler = () => {
    useDislikeVideo(dispatch, videoId, token);
  };

  const watchLaterClickHandler = () => {
    if (token) {
      useWatchLaterVideo(dispatch, videoDetails, token);
    } else {
      navigate("/login");
    }
  };

  const removeWatchLaterClickHandler = () => {
    useRemoveWatchLater(dispatch, videoId, token);
  };

  return (
    <>
      {videoDetails !== "" && !loader && (
        <div className="video-container">
          <div className="video-player-container">
            <div className="player-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="video-content-container">
              <div className="content">
                <span className="video-title">{videoDetails.title}</span>
                <span className="video-creator">{videoDetails.creator}</span>
              </div>
              <div className="actions-container">
                <div
                  className="video-action-items"
                  onClick={isLiked ? dislikeClickHandler : likeClickHandler}
                >
                  {isLiked ? (
                    <>
                      <ThumbUpIcon className="video-action-icon filled" />
                      <span className="icon-content">Liked</span>
                    </>
                  ) : (
                    <>
                      <ThumbUpOutlinedIcon className="video-action-icon" />
                      <span className="icon-content">Like</span>
                    </>
                  )}
                </div>
                <div
                  className="video-action-items"
                  onClick={
                    isWatchLater
                      ? removeWatchLaterClickHandler
                      : watchLaterClickHandler
                  }
                >
                  {isWatchLater ? (
                    <>
                      <BookmarkOutlinedIcon className="video-action-icon filled" />
                      <span className="icon-content">Remove Watch Later</span>
                    </>
                  ) : (
                    <>
                      <BookmarkBorderOutlinedIcon className="video-action-icon" />
                      <span className="icon-content">Watch Later</span>
                    </>
                  )}
                </div>
                <div className="video-action-items">
                  <QueueIcon className="video-action-icon" />
                  <span className="icon-content">Add to Playlist</span>
                </div>
              </div>
            </div>
            <div className="video-desc">{videoDetails.description}</div>
          </div>
        </div>
      )}
    </>
  );
}
