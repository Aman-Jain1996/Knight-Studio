import React from "react";
import "./Asidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import QueueIcon from "@mui/icons-material/Queue";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

function Asidenav() {
  return (
    <div className="asidenav-container">
      <Link to="/">
        <div className="icon-content-container">
          <span className="logo-container">
            <HomeIcon className="icon" />
          </span>
          <span className="content-container">Home</span>
        </div>
      </Link>
      <Link to="/explore">
        <div className="icon-content-container">
          <span className="logo-container">
            <ExploreIcon className="icon" />
          </span>
          <span className="content-container">Explore</span>
        </div>
      </Link>
      <Link to="">
        <div className="icon-content-container">
          <span className="logo-container">
            <QueueIcon className="icon" />
          </span>
          <span className="content-container">Playlists</span>
        </div>
      </Link>
      <Link to="/liked">
        <div className="icon-content-container">
          <span className="logo-container">
            <ThumbUpAltIcon className="icon" />
          </span>
          <span className="content-container">Liked</span>
        </div>
      </Link>
      <Link to="">
        <div className="icon-content-container">
          <span className="logo-container">
            <BookmarkIcon className="icon" />
          </span>
          <span className="content-container">Watch Later</span>
        </div>
      </Link>
      <Link to="/history">
        <div className="icon-content-container">
          <span className="logo-container">
            <HistoryIcon className="icon" />
          </span>
          <span className="content-container">History</span>
        </div>
      </Link>
    </div>
  );
}

export default Asidenav;
