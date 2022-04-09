import React from "react";
import "./Videocard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function Videocard() {
  return (
    <div className="videocard-container">
      <div className="video-banner">
        <img
          src="https://res.cloudinary.com/ajain8479/image/upload/v1648884662/Kashmir-Files_oymxyf.jpg"
          alt="image"
        />
      </div>
      <div className="video-content">
        <div className="content">
          <span className="video-title">Aman</span>
          <span className="video-creator">Jain</span>
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

export default Videocard;
