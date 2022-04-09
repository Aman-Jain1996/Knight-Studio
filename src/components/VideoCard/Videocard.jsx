import React from "react";
import "./Videocard.css";
import banner1 from "../../assets/Kashmir-Files.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import QueueIcon from "@mui/icons-material/Queue";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";

function Videocard() {
  return (
    <div className="videocard-container">
      <div className="video-banner">
        <img src={banner1} alt="image" />
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
