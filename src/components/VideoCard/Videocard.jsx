import React from "react";
import "./Videocard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export function Videocard({ video }) {
  const { imageUrl, title, creator } = video;
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
          <MoreVertIcon className="video-menu-icon" />
          <div className="video-menu-container">
            <div className="menu-items">
              <span>
                <ThumbUpAltIcon />
              </span>
              Like Video
            </div>
            <div className="menu-items">
              <span>
                <BookmarkIcon />
              </span>
              Watch Later
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
